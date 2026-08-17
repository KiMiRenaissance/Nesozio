const DBBridge = {
  async _simulateNetworkDelay(ms = 100) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  async getProducts() {
    await this._simulateNetworkDelay(50);
    return PRODUCTS;
  },

  async getProductById(id) {
    await this._simulateNetworkDelay(30);
    return PRODUCTS.find(p => p.id === parseInt(id)) || null;
  },
};

const Cart = {
  STORAGE_KEY: 'nesozio_cart',

  getItems() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveItems(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this._updateBadge();
  },

  add(productId, quantity = 1, color = null, size = null) {
    const items = this.getItems();
    const existingIndex = items.findIndex(i => 
      i.productId === productId && i.color === color && i.size === size
    );

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({ productId, quantity, color, size, addedAt: Date.now() });
    }

    this.saveItems(items);
    Toast.show('Produk ditambahkan ke keranjang!', 'success');
    return true;
  },

  update(productId, quantity, color = null, size = null) {
    const items = this.getItems();
    const index = items.findIndex(i => 
      i.productId === productId && i.color === color && i.size === size
    );

    if (index > -1) {
      if (quantity <= 0) {
        items.splice(index, 1);
      } else {
        items[index].quantity = quantity;
      }
      this.saveItems(items);
    }
  },

  remove(productId, color = null, size = null) {
    let items = this.getItems();
    items = items.filter(i => !(i.productId === productId && i.color === color && i.size === size));
    this.saveItems(items);
    Toast.show('Produk dihapus dari keranjang', 'info');
  },

  clear() {
    this.saveItems([]);
  },

  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.quantity, 0);
  },

  getTotal() {
    const items = this.getItems();
    return items.reduce((sum, item) => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  },

  getDetailedItems() {
    const items = this.getItems();
    return items.map(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      return {
        ...item,
        product,
        subtotal: product ? product.price * item.quantity : 0
      };
    }).filter(item => item.product);
  },

  _updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  init() {
    this._updateBadge();
  }
};

const Wishlist = {
  STORAGE_KEY: 'nesozio_wishlist',

  getItems() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveItems(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  },

  toggle(productId) {
    const items = this.getItems();
    const index = items.indexOf(productId);
    if (index > -1) {
      items.splice(index, 1);
      this.saveItems(items);
      Toast.show('Dihapus dari wishlist', 'info');
      return false;
    } else {
      items.push(productId);
      this.saveItems(items);
      Toast.show('Ditambahkan ke wishlist!', 'success');
      return true;
    }
  },

  contains(productId) {
    return this.getItems().includes(productId);
  },

  getCount() {
    return this.getItems().length;
  }
};

const Toast = {
  _element: null,

  _getElement() {
    if (!this._element) {
      this._element = document.createElement('div');
      this._element.className = 'toast';
      this._element.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="toast-message"></span>
      `;
      document.body.appendChild(this._element);
    }
    return this._element;
  },

  show(message, type = 'success', duration = 3000) {
    const el = this._getElement();
    el.classList.remove('error', 'info');
    if (type === 'error') el.classList.add('error');
    
    el.querySelector('.toast-message').textContent = message;
    el.classList.add('show');

    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => {
      el.classList.remove('show');
    }, duration);
  }
};

const Auth = {
  USERS_KEY: 'nesozio_users',
  SESSION_KEY: 'nesozio_session',

  getUsers() {
    const data = localStorage.getItem(this.USERS_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  getSession() {
    const data = localStorage.getItem(this.SESSION_KEY);
    return data ? JSON.parse(data) : null;
  },

  saveSession(session) {
    if (session) {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(this.SESSION_KEY);
    }
    this._updateProfileUI();
  },

  getCurrentUser() {
    const session = this.getSession();
    if (!session) return null;
    const users = this.getUsers();
    return users.find(u => u.email === session.email) || null;
  },

  register(name, email, password) {
    const users = this.getUsers();
    
    if (users.find(u => u.email === email)) {
      Toast.show('Email sudah terdaftar!', 'error');
      return false;
    }

    const newUser = {
      name,
      email,
      password,
      createdAt: Date.now(),
      avatar: null,
      phone: '',
      address: '',
      orders: []
    };

    users.push(newUser);
    this.saveUsers(users);
    
    this.saveSession({ email, loginAt: Date.now() });
    Toast.show(`Selamat datang, ${name}! 🎉`, 'success');
    return true;
  },

  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      Toast.show('Email atau password salah!', 'error');
      return false;
    }

    this.saveSession({ email, loginAt: Date.now() });
    Toast.show(`Selamat datang kembali, ${user.name}! 👋`, 'success');
    return true;
  },

  logout() {
    this.saveSession(null);
    Toast.show('Berhasil logout', 'info');
  },

  isLoggedIn() {
    return this.getSession() !== null;
  },

  updateProfile(data) {
    const user = this.getCurrentUser();
    if (!user) return false;

    const users = this.getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx === -1) return false;

    users[idx] = { ...users[idx], ...data };
    this.saveUsers(users);
    Toast.show('Profil berhasil diperbarui!', 'success');
    return true;
  },

  addOrder(orderData) {
    const user = this.getCurrentUser();
    if (!user) return null;

    const users = this.getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx === -1) return null;

    const order = {
      id: 'NZO-' + Date.now().toString().slice(-10),
      date: new Date().toISOString(),
      ...orderData,
      status: 'Diproses'
    };

    if (!users[idx].orders) users[idx].orders = [];
    users[idx].orders.unshift(order);
    this.saveUsers(users);
    return order;
  },

  _updateProfileUI() {
    const user = this.getCurrentUser();
    const buttons = document.querySelectorAll('.profile-btn-wrapper');
    const basePath = this._resolvePath('');
    buttons.forEach((wrapper, wrapperIdx) => {
      if (!wrapper) return;
      const dropdownId = 'profileDropdown_' + wrapperIdx;
      if (user) {
        const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        const orderCount = user.orders ? user.orders.length : 0;
        const firstName = user.name.split(' ')[0];
        wrapper.innerHTML = `
          <div class="profile-dropdown-wrapper" style="position:relative;">
            <button class="nav-icon-btn profile-dropdown-trigger" id="${dropdownId}_trigger" title="Profil ${user.name}" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:white;font-weight:700;font-size:0.8rem;" onclick="Auth.toggleProfileDropdown('${dropdownId}', event)">
              ${initials}
            </button>
            <div class="profile-dropdown" id="${dropdownId}" style="display:none;position:absolute;top:calc(100% + 10px);right:0;min-width:280px;background:var(--white);border-radius:var(--radius);box-shadow:var(--shadow-lg);border:1px solid #e2e8f0;z-index:1000;overflow:hidden;">
              <div style="padding:1.25rem;background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:white;">
                <div style="display:flex;align-items:center;gap:0.85rem;">
                  <div style="width:50px;height:50px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.15rem;backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3);">
                    ${initials}
                  </div>
                  <div style="flex:1;min-width:0;">
                    <div style="font-weight:700;font-size:0.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${user.name}</div>
                    <div style="font-size:0.75rem;opacity:0.9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${user.email}</div>
                  </div>
                </div>
              </div>
              <div style="padding:0.5rem 0;">
                <a href="${basePath}profile/index.html" class="profile-menu-item" onclick="Auth.closeProfileDropdown('${dropdownId}')">
                  <span style="font-size:1.15rem;">👤</span>
                  <div style="flex:1;">
                    <div style="font-weight:600;font-size:0.88rem;">Profil Saya</div>
                    <div style="font-size:0.72rem;color:var(--text-muted);">Lihat & edit informasi akun</div>
                  </div>
                </a>
                <a href="${basePath}profile/index.html" class="profile-menu-item" onclick="event.preventDefault();Auth.closeProfileDropdown('${dropdownId}');setTimeout(()=>{try{ProfilePage.switchTab('orders',null);}catch(e){}window.location.href='${basePath}profile/index.html#orders';},50);">
                  <span style="font-size:1.15rem;">📦</span>
                  <div style="flex:1;">
                    <div style="font-weight:600;font-size:0.88rem;">Pesanan Saya</div>
                    <div style="font-size:0.72rem;color:var(--text-muted);">${orderCount > 0 ? orderCount + ' pesanan' : 'Belum ada pesanan'}</div>
                  </div>
                </a>
                <a href="${basePath}cart/index.html" class="profile-menu-item" onclick="Auth.closeProfileDropdown('${dropdownId}')">
                  <span style="font-size:1.15rem;">🛒</span>
                  <div style="flex:1;">
                    <div style="font-weight:600;font-size:0.88rem;">Keranjang</div>
                    <div style="font-size:0.72rem;color:var(--text-muted);">Lihat produk di keranjang</div>
                  </div>
                </a>
                <a href="${basePath}profile/index.html" class="profile-menu-item" onclick="event.preventDefault();Auth.closeProfileDropdown('${dropdownId}');setTimeout(()=>{window.location.href='${basePath}profile/index.html#settings';},50);">
                  <span style="font-size:1.15rem;">⚙️</span>
                  <div style="flex:1;">
                    <div style="font-weight:600;font-size:0.88rem;">Pengaturan</div>
                    <div style="font-size:0.72rem;color:var(--text-muted);">Password & preferensi</div>
                  </div>
                </a>
              </div>
              <div style="padding:0.5rem 0;border-top:1px solid #f1f5f9;">
                <button class="profile-menu-item" onclick="Auth.logoutFromDropdown('${dropdownId}')" style="width:100%;border:none;background:transparent;text-align:left;color:var(--danger);">
                  <span style="font-size:1.15rem;">🚪</span>
                  <div style="flex:1;">
                    <div style="font-weight:600;font-size:0.88rem;">Keluar</div>
                    <div style="font-size:0.72rem;opacity:0.8;">Logout dari akun ini</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        `;
      } else {
        wrapper.innerHTML = `
          <button class="nav-icon-btn" onclick="window.location.href='${this._resolvePath('login/index.html')}'" title="Masuk / Daftar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        `;
      }
    });
  },

  toggleProfileDropdown(id, e) {
    if (e) e.stopPropagation();
    const dd = document.getElementById(id);
    if (!dd) return;
    const isOpen = dd.style.display !== 'none';
    this._closeAllDropdowns();
    if (!isOpen) {
      dd.style.display = 'block';
      dd.classList.add('profile-dropdown-enter');
      setTimeout(() => dd.classList.remove('profile-dropdown-enter'), 250);
    }
  },

  closeProfileDropdown(id) {
    const dd = document.getElementById(id);
    if (dd) dd.style.display = 'none';
  },

  _closeAllDropdowns() {
    document.querySelectorAll('.profile-dropdown').forEach(dd => {
      dd.style.display = 'none';
    });
  },

  logoutFromDropdown(id) {
    this.closeProfileDropdown(id);
    if (confirm('Yakin ingin keluar dari akun ini?')) {
      this.logout();
      setTimeout(() => {
        window.location.href = this._resolvePath('index.html');
      }, 500);
    }
  },

  _resolvePath(target) {
    const here = window.location.pathname;
    const depth = here.split('/').filter(p => p && !p.includes('.html')).length;
    if (depth <= 1) return './' + target;
    return '../'.repeat(depth - 1) + target;
  },

  requireLogin() {
    if (!this.isLoggedIn()) {
      Toast.show('Silakan login terlebih dahulu', 'error');
      setTimeout(() => {
        window.location.href = this._resolvePath('login/index.html');
      }, 800);
      return false;
    }
    return true;
  },

  init() {
    this._updateProfileUI();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Cart.init();
  Auth.init();

  document.addEventListener('click', () => {
    Auth._closeAllDropdowns();
  });
});
