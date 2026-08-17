const ProfilePage = {
  currentTab: 'overview',

  init() {
    if (!Auth.isLoggedIn()) {
      Toast.show('Silakan login terlebih dahulu', 'error');
      setTimeout(() => {
        window.location.href = '../login/index.html?redirect=profile';
      }, 800);
      return;
    }
    this.render();
    this._handleHash();
    window.addEventListener('hashchange', () => this._handleHash());
  },

  _handleHash() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    let targetTab = null;
    if (hash === 'orders' || hash === 'pesanan') targetTab = 'orders';
    else if (hash === 'wishlist' || hash === 'favorit') targetTab = 'wishlist';
    else if (hash === 'settings' || hash === 'pengaturan') targetTab = 'settings';
    else if (hash === 'password') targetTab = 'password';
    else if (hash === 'overview' || hash === '') targetTab = 'overview';

    if (targetTab) {
      const tabs = document.querySelectorAll('.profile-tab');
      const tabMap = { overview: 0, orders: 1, wishlist: 2, settings: 3, password: 4 };
      const idx = tabMap[targetTab];
      const el = tabs[idx] || null;
      setTimeout(() => this.switchTab(targetTab, el), 50);
    }
  },

  switchTab(tab, el) {
    this.currentTab = tab;
    document.querySelectorAll('.profile-tab').forEach(t => {
      t.classList.remove('active');
      t.style.background = 'transparent';
      t.style.color = 'var(--text-dark)';
    });
    if (el) {
      el.classList.add('active');
      el.style.background = 'rgba(99,102,241,0.1)';
      el.style.color = 'var(--primary)';
    }
    this.renderTabContent();
  },

  render() {
    const user = Auth.getCurrentUser();
    const container = document.getElementById('profileContent');
    if (!user || !container) return;

    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const joinDate = new Date(user.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const orderCount = user.orders ? user.orders.length : 0;
    const wishlistCount = Wishlist.getCount();
    const cartCount = Cart.getCount();
    const activeOrders = user.orders ? user.orders.filter(o => o.status === 'Diproses' || o.status === 'Dikirim').length : 0;

    container.innerHTML = `
      <div class="row mb-4 animate-fade-in-up">
        <div class="col-12">
          <div style="background:linear-gradient(135deg,var(--primary),var(--primary-dark),#fff9c4);border-radius:var(--radius-lg);padding:2.5rem;color:white;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-60px;right:-60px;width:250px;height:250px;background:rgba(255,255,255,0.08);border-radius:50%;"></div>
            <div style="position:absolute;bottom:-40px;left:30%;width:180px;height:180px;background:rgba(255,255,255,0.06);border-radius:50%;"></div>
            <div class="row align-items-center" style="position:relative;z-index:1;">
              <div class="col-auto mb-3 mb-md-0">
                <div style="width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,#fbbf24,#f59e0b);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:800;color:white;box-shadow:0 10px 30px rgba(0,0,0,0.2);border:4px solid rgba(255,255,255,0.3);">
                  ${initials}
                </div>
              </div>
              <div class="col">
                <h1 style="font-size:1.75rem;font-weight:700;margin:0 0 0.25rem;">Halo, ${user.name.split(' ')[0]}! 👋</h1>
                <p style="opacity:0.9;margin:0 0 0.5rem;">📧 ${user.email}${user.phone ? ' • 📱 ' + user.phone : ''}</p>
                <div style="display:flex;gap:1.5rem;flex-wrap:wrap;">
                  <div><strong>${activeOrders}</strong> <span style="opacity:0.8;">Pesanan Aktif</span></div>
                  <div><strong>${orderCount}</strong> <span style="opacity:0.8;">Total Pesanan</span></div>
                  <div><strong>${wishlistCount}</strong> <span style="opacity:0.8;">Wishlist</span></div>
                  <div><strong>${cartCount}</strong> <span style="opacity:0.8;">Keranjang</span></div>
                  <div><span style="opacity:0.8;">Bergabung sejak ${joinDate}</span></div>
                </div>
              </div>
              <div class="col-auto mt-3 mt-md-0 d-flex flex-column gap-2">
                <button onclick="window.location.href='../cart/index.html'" style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3);color:white;padding:0.6rem 1.25rem;border-radius:50px;font-weight:600;cursor:pointer;transition:var(--transition);display:flex;align-items:center;gap:0.5rem;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
                  🛒 Ke Keranjang
                </button>
                <button onclick="ProfilePage.logout()" style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3);color:white;padding:0.6rem 1.25rem;border-radius:50px;font-weight:600;cursor:pointer;transition:var(--transition);display:flex;align-items:center;gap:0.5rem;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 mb-4 mb-lg-0">
          <div style="background:var(--white);border-radius:var(--radius);padding:0.75rem;border:1px solid #e2e8f0;box-shadow:var(--shadow-sm);">
            <button class="profile-tab active" onclick="ProfilePage.switchTab('overview', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:rgba(99,102,241,0.1);display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--primary);text-align:left;">
              <span style="font-size:1.1rem;">🏠</span> Ringkasan
            </button>
            <button class="profile-tab" onclick="ProfilePage.switchTab('orders', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--text-dark);text-align:left;position:relative;">
              <span style="font-size:1.1rem;">📦</span>
              <span>Riwayat Pesanan</span>
              ${activeOrders > 0 ? `<span style="position:absolute;right:1rem;top:50%;transform:translateY(-50%);background:var(--danger);color:white;font-size:0.7rem;padding:0.15rem 0.5rem;border-radius:50px;font-weight:700;">${activeOrders}</span>` : ''}
            </button>
            <button class="profile-tab" onclick="ProfilePage.switchTab('wishlist', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--text-dark);text-align:left;">
              <span style="font-size:1.1rem;">❤️</span> Wishlist
            </button>
            <button class="profile-tab" onclick="ProfilePage.switchTab('settings', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--text-dark);text-align:left;">
              <span style="font-size:1.1rem;">⚙️</span> Pengaturan Profil
            </button>
            <button class="profile-tab" onclick="ProfilePage.switchTab('password', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--text-dark);text-align:left;">
              <span style="font-size:1.1rem;">🔐</span> Ubah Password
            </button>
            <div style="height:1px;background:#f1f5f9;margin:0.5rem 0;"></div>
            <button onclick="ProfilePage.logout()" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--danger);text-align:left;" onmouseover="this.style.background='#fef2f2'" onmouseout="this.style.background='transparent'">
              <span style="font-size:1.1rem;">🚪</span> Keluar Akun
            </button>
          </div>
        </div>

        <div class="col-lg-9" id="profileTabContent"></div>
      </div>
    `;

    document.querySelectorAll('.profile-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.profile-tab').forEach(t => {
          t.classList.remove('active');
          t.style.background = 'transparent';
          t.style.color = 'var(--text-dark)';
        });
        this.classList.add('active');
        this.style.background = 'rgba(99,102,241,0.1)';
        this.style.color = 'var(--primary)';
      });
    });

    this.renderTabContent();
  },

  renderTabContent() {
    const user = Auth.getCurrentUser();
    const container = document.getElementById('profileTabContent');
    if (!user || !container) return;

    switch (this.currentTab) {
      case 'overview':
        container.innerHTML = this.renderOverview(user);
        break;
      case 'orders':
        container.innerHTML = this.renderOrders(user);
        break;
      case 'wishlist':
        container.innerHTML = this.renderWishlist();
        break;
      case 'settings':
        container.innerHTML = this.renderSettings(user);
        break;
      case 'password':
        container.innerHTML = this.renderPassword();
        break;
    }
  },

  renderOverview(user) {
    const orders = user.orders || [];
    const wishlistCount = Wishlist.getCount();
    const cartCount = Cart.getCount();
    const activeOrders = orders.filter(o => o.status === 'Diproses' || o.status === 'Dikirim');

    const quickActions = [
      { icon: '🛒', title: 'Keranjang', count: cartCount, link: '../cart/index.html', color: 'var(--primary)' },
      { icon: '❤️', title: 'Wishlist', count: wishlistCount, link: '../search/index.html', color: 'var(--danger)' },
      { icon: '📦', title: 'Pesanan', count: orders.length, link: '#', action: "ProfilePage.switchTab('orders',document.querySelector('.profile-tab:nth-child(2)'))", color: 'var(--secondary)' },
      { icon: '💎', title: 'Voucher', count: 3, link: '#', color: 'var(--accent)' },
    ];

    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">📋 Ringkasan Akun</h2>
        <div class="row g-3 mb-4">
          ${quickActions.map(qa => `
            <div class="col-6 col-md-3">
              <div style="background:var(--white);padding:1.5rem 1rem;border-radius:var(--radius);border:1px solid #e2e8f0;box-shadow:var(--shadow-sm);text-align:center;cursor:pointer;transition:var(--transition);" onclick="${qa.action ? qa.action : `window.location.href='${qa.link}'`}" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='var(--shadow-sm)'">
                <div style="width:50px;height:50px;margin:0 auto 0.75rem;border-radius:50%;background:${qa.color}22;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${qa.icon}</div>
                <div style="font-weight:700;font-size:1.5rem;color:${qa.color};margin-bottom:0.2rem;">${qa.count}</div>
                <div style="font-size:0.85rem;color:var(--text-muted);font-weight:500;">${qa.title}</div>
              </div>
            </div>
          `).join('')}
        </div>

        ${activeOrders.length > 0 ? `
          <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">🚚 Pesanan Sedang Diproses</h2>
          <div style="display:flex;flex-direction:column;gap:1rem;margin-bottom:3rem;">
            ${activeOrders.map(order => {
              const date = new Date(order.date).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });
              const total = order.total || 0;
              const items = order.items || [];
              const statusColor = order.status === 'Dikirim' ? 'var(--primary)' : 'var(--secondary-dark)';
              const statusBg = order.status === 'Dikirim' ? 'rgba(99,102,241,0.12)' : 'rgba(245,158,11,0.12)';
              const progressStep = order.status === 'Dikirim' ? 2 : 1;
              return `
                <div style="background:var(--white);border-radius:var(--radius);border:1px solid #e2e8f0;overflow:hidden;box-shadow:var(--shadow-sm);">
                  <div style="padding:1rem 1.25rem;background:#f8fafc;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;border-bottom:1px solid #f1f5f9;">
                    <div>
                      <div style="font-weight:700;font-size:0.95rem;">${order.id}</div>
                      <div style="font-size:0.8rem;color:var(--text-muted);">${date}</div>
                    </div>
                    <div style="display:flex;gap:0.75rem;align-items:center;flex-wrap:wrap;">
                      <span style="padding:0.35rem 0.85rem;border-radius:50px;background:${statusBg};color:${statusColor};font-weight:600;font-size:0.8rem;">
                        ${order.status === 'Dikirim' ? '🚚 ' : '⏳ '}${order.status}
                      </span>
                      <button onclick="ProfilePage.switchTab('orders',document.querySelector('.profile-tab:nth-child(2)'))" style="padding:0.35rem 0.85rem;border-radius:50px;background:rgba(99,102,241,0.08);color:var(--primary);border:none;font-weight:600;font-size:0.8rem;cursor:pointer;">
                        Detail →
                      </button>
                    </div>
                  </div>
                  <div style="padding:1.25rem;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:1rem;">
                      <div style="font-size:0.85rem;color:var(--text-muted);">Total: <strong style="color:var(--primary);font-size:1.05rem;">Rp ${total.toLocaleString('id-ID')}</strong></div>
                      <div style="display:flex;gap:1rem;align-items:center;font-size:0.75rem;">
                        <div style="display:flex;align-items:center;gap:0.35rem;"><div style="width:10px;height:10px;border-radius:50%;background:var(--accent);"></div><span style="${progressStep >= 1 ? 'color:var(--accent);font-weight:600;' : ''}">Diproses</span></div>
                        <div style="width:30px;height:2px;background:${progressStep >= 2 ? 'var(--primary)' : '#e2e8f0'};"></div>
                        <div style="display:flex;align-items:center;gap:0.35rem;"><div style="width:10px;height:10px;border-radius:50%;background:${progressStep >= 2 ? 'var(--primary)' : '#e2e8f0'};"></div><span style="${progressStep >= 2 ? 'color:var(--primary);font-weight:600;' : ''}">Dikirim</span></div>
                        <div style="width:30px;height:2px;background:#e2e8f0;"></div>
                        <div style="display:flex;align-items:center;gap:0.35rem;"><div style="width:10px;height:10px;border-radius:50%;background:#e2e8f0;"></div><span style="color:var(--text-muted);">Selesai</span></div>
                      </div>
                    </div>
                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                      ${items.slice(0, 4).map(it => {
                        const img = Array.isArray(it.image) ? it.image[0] : it.image;
                        return `<img src="${img}" style="width:60px;height:60px;border-radius:10px;object-fit:cover;border:1px solid #f1f5f9;" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200'" title="${it.name || 'Produk'}">`;
                      }).join('')}
                      ${items.length > 4 ? `<div style="width:60px;height:60px;border-radius:10px;background:var(--bg-light);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--text-muted);border:1px solid #f1f5f9;">+${items.length - 4}</div>` : ''}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}

        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">💡 Rekomendasi Untukmu</h2>
        <div class="row g-3">
          ${PRODUCTS.slice(0, 4).map(p => {
            const image = Array.isArray(p.images) ? p.images[0] : p.images;
            return `
              <div class="col-6 col-md-3">
                <div class="product-card h-100" onclick="window.location.href='../product/index.html?id=${p.id}'" style="cursor:pointer;">
                  <div class="product-image-wrapper">
                    <img src="${image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'">
                  </div>
                  <div class="product-body" style="padding:0.75rem;">
                    <span class="product-category" style="font-size:0.65rem;">${p.category}</span>
                    <h3 class="product-name" style="font-size:0.8rem;">${p.name.length > 30 ? p.name.slice(0,30)+'...' : p.name}</h3>
                    <div class="product-footer" style="flex-direction:column;align-items:flex-start;gap:0.5rem;">
                      <div style="font-weight:700;color:var(--primary);font-size:0.9rem;">Rp ${p.price.toLocaleString('id-ID')}</div>
                      <div style="display:flex;gap:0.4rem;width:100%;">
                        <button class="btn-add-cart" onclick="event.stopPropagation();Cart.add(${p.id},1,null,null);" style="flex:1;padding:0.4rem 0.6rem;font-size:0.75rem;justify-content:center;">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        </button>
                        <button onclick="event.stopPropagation();ProfilePage.buyNow(${p.id});" style="flex:1;padding:0.4rem 0.6rem;background:var(--secondary);color:white;border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.75rem;cursor:pointer;transition:var(--transition);display:flex;align-items:center;justify-content:center;gap:0.3rem;" onmouseover="this.style.background='var(--secondary-dark)'" onmouseout="this.style.background='var(--secondary)'">
                          ⚡ Beli
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div style="margin-top:3rem;">
          <a href="../search/index.html" style="display:block;text-align:center;padding:1rem;background:var(--white);border:2px dashed #e2e8f0;border-radius:var(--radius);color:var(--primary);font-weight:600;text-decoration:none;transition:var(--transition);" onmouseover="this.style.borderColor='var(--primary)';this.style.background='rgba(99,102,241,0.03)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.background='var(--white)'">
            🔍 Lihat Semua Produk →
          </a>
        </div>
      </div>
    `;
  },

  renderOrders(user) {
    const orders = user.orders || [];

    if (orders.length === 0) {
      return `
        <div class="animate-fade-in-up">
          <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">📦 Riwayat Pesanan</h2>
          <div style="background:var(--white);padding:4rem 2rem;text-align:center;border-radius:var(--radius);border:1px solid #e2e8f0;">
            <div style="font-size:5rem;margin-bottom:1rem;opacity:0.4;">📦</div>
            <h4 style="font-weight:600;margin-bottom:0.5rem;">Belum Ada Pesanan</h4>
            <p style="color:var(--text-muted);margin-bottom:1.5rem;">Yuk mulai belanja dan dapatkan penawaran terbaik!</p>
            <a href="../index.html" class="btn-hero-primary" style="text-decoration:none;display:inline-block;">Mulai Belanja</a>
          </div>
        </div>
      `;
    }

    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">📦 Riwayat Pesanan (${orders.length})</h2>
        <div style="display:flex;flex-direction:column;gap:1rem;">
          ${orders.map(order => {
            const date = new Date(order.date).toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' });
            const total = order.total || 0;
            const items = order.items || [];
            const statusColor = order.status === 'Selesai' ? 'var(--accent)' : order.status === 'Dikirim' ? 'var(--primary)' : 'var(--secondary-dark)';
            const statusBg = order.status === 'Selesai' ? 'rgba(16,185,129,0.12)' : order.status === 'Dikirim' ? 'rgba(99,102,241,0.12)' : 'rgba(245,158,11,0.12)';
            return `
              <div style="background:var(--white);border-radius:var(--radius);border:1px solid #e2e8f0;overflow:hidden;box-shadow:var(--shadow-sm);">
                <div style="padding:1rem 1.25rem;background:#f8fafc;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;border-bottom:1px solid #f1f5f9;">
                  <div>
                    <div style="font-weight:700;font-size:0.95rem;">${order.id}</div>
                    <div style="font-size:0.8rem;color:var(--text-muted);">${date}</div>
                  </div>
                  <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
                    <span style="padding:0.35rem 0.85rem;border-radius:50px;background:${statusBg};color:${statusColor};font-weight:600;font-size:0.8rem;">
                      ${order.status === 'Selesai' ? '✅ ' : order.status === 'Dikirim' ? '🚚 ' : '⏳ '}${order.status}
                    </span>
                  </div>
                </div>
                <div style="padding:1.25rem;">
                  ${items.length > 0 ? `
                    <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1rem;">
                      ${items.map(it => {
                        const img = Array.isArray(it.image) ? it.image[0] : it.image;
                        return `
                          <div style="display:flex;gap:0.75rem;align-items:center;">
                            <img src="${img}" style="width:56px;height:56px;border-radius:10px;object-fit:cover;flex-shrink:0;border:1px solid #f1f5f9;" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200'">
                            <div style="flex:1;min-width:0;">
                              <div style="font-size:0.88rem;font-weight:500;line-height:1.3;">${it.name || 'Produk'}</div>
                              <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">
                                ${it.qty || 1} item • Rp ${((it.price || 0) * (it.qty || 1)).toLocaleString('id-ID')}
                                ${it.color ? ' • Warna: ' + it.color : ''}${it.size ? ' • Ukuran: ' + it.size : ''}
                              </div>
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  ` : ''}
                  <div style="display:flex;justify-content:space-between;align-items:center;padding-top:1rem;border-top:1px dashed #e2e8f0;flex-wrap:wrap;gap:1rem;">
                    <div>
                      <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:2px;">Total Pesanan</div>
                      <div style="font-weight:800;font-size:1.25rem;color:var(--primary);">Rp ${total.toLocaleString('id-ID')}</div>
                      ${order.paymentMethod ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">💳 ${order.paymentMethod === 'transfer' ? 'Transfer Bank' : order.paymentMethod === 'ewallet' ? 'E-Wallet' : order.paymentMethod === 'cod' ? 'COD (Bayar di Tempat)' : order.paymentMethod}</div>` : ''}
                    </div>
                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                      ${items.length > 0 ? `
                        <button onclick="ProfilePage.reorder('${order.id}')" style="padding:0.6rem 1rem;background:linear-gradient(135deg,var(--secondary),var(--secondary-dark));color:white;border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.85rem;cursor:pointer;transition:var(--transition);display:flex;align-items:center;gap:0.4rem;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 15px rgba(245,158,11,0.35)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                          🔄 Ulang Pesanan
                        </button>
                      ` : ''}
                      ${order.status === 'Diproses' ? `
                        <button onclick="ProfilePage.trackOrder('${order.id}')" style="padding:0.6rem 1rem;background:rgba(99,102,241,0.08);color:var(--primary);border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.85rem;cursor:pointer;transition:var(--transition);">
                          📍 Lacak Pesanan
                        </button>
                      ` : ''}
                      ${order.status === 'Dikirim' ? `
                        <button onclick="ProfilePage.markAsDone('${order.id}')" style="padding:0.6rem 1rem;background:rgba(16,185,129,0.1);color:var(--accent);border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.85rem;cursor:pointer;transition:var(--transition);">
                          ✅ Pesanan Diterima
                        </button>
                      ` : ''}
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  renderWishlist() {
    const wishIds = Wishlist.getItems();
    const items = wishIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

    if (items.length === 0) {
      return `
        <div class="animate-fade-in-up">
          <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">❤️ Wishlist Saya</h2>
          <div style="background:var(--white);padding:4rem 2rem;text-align:center;border-radius:var(--radius);border:1px solid #e2e8f0;">
            <div style="font-size:5rem;margin-bottom:1rem;opacity:0.4;">💔</div>
            <h4 style="font-weight:600;margin-bottom:0.5rem;">Wishlist Masih Kosong</h4>
            <p style="color:var(--text-muted);margin-bottom:1.5rem;">Simpan produk favoritmu agar mudah ditemukan nanti!</p>
            <a href="../search/index.html" class="btn-hero-primary" style="text-decoration:none;display:inline-block;">Lihat Produk</a>
          </div>
        </div>
      `;
    }

    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">❤️ Wishlist Saya (${items.length})</h2>
        <div class="row g-3">
          ${items.map(p => {
            const image = Array.isArray(p.images) ? p.images[0] : p.images;
            return `
              <div class="col-6 col-md-4 col-lg-3">
                <div class="product-card h-100">
                  <div class="product-image-wrapper" onclick="window.location.href='../product/index.html?id=${p.id}'" style="cursor:pointer;">
                    <button class="product-wishlist active" onclick="event.stopPropagation();ProfilePage.removeFromWishlist(${p.id})" title="Hapus dari wishlist" style="z-index:5;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    <img src="${image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'">
                  </div>
                  <div class="product-body">
                    <span class="product-category">${p.category}</span>
                    <h3 class="product-name">${p.name.length > 45 ? p.name.slice(0,45)+'...' : p.name}</h3>
                    <div class="product-footer">
                      <div class="product-price">Rp ${p.price.toLocaleString('id-ID')}</div>
                    </div>
                    <div style="display:flex;gap:0.4rem;margin-top:0.75rem;">
                      <button class="btn-add-cart" style="flex:1;justify-content:center;" onclick="Cart.add(${p.id},1,null,null);">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        Keranjang
                      </button>
                      <button onclick="ProfilePage.buyNow(${p.id})" style="flex:1;padding:0.5rem 1rem;background:linear-gradient(135deg,var(--secondary),var(--secondary-dark));color:white;border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.85rem;cursor:pointer;transition:var(--transition);display:flex;align-items:center;justify-content:center;gap:0.4rem;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 15px rgba(245,158,11,0.35)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                        ⚡ Beli
                      </button>
                    </div>
                    <button class="btn-detail mt-2" onclick="window.location.href='../product/index.html?id=${p.id}'">Lihat Detail</button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  renderSettings(user) {
    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">⚙️ Pengaturan Profil</h2>
        <div style="background:var(--white);border-radius:var(--radius);padding:2rem;border:1px solid #e2e8f0;">
          <form onsubmit="return ProfilePage.saveProfile(event)">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Nama Lengkap</label>
                <input type="text" class="form-control" id="setName" value="${user.name}" required style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
              </div>
              <div class="col-md-6">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Email</label>
                <input type="email" class="form-control" value="${user.email}" disabled style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;background:var(--bg-light);">
              </div>
              <div class="col-md-6">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Nomor WhatsApp</label>
                <input type="tel" class="form-control" id="setPhone" value="${user.phone || ''}" placeholder="08xx-xxxx-xxxx" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
              </div>
              <div class="col-md-6">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Tanggal Lahir</label>
                <input type="date" class="form-control" id="setBod" value="${user.birthDate || ''}" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
              </div>
              <div class="col-12">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Alamat Lengkap</label>
                <textarea class="form-control" id="setAddress" rows="3" placeholder="Jl. Contoh No. 123, RT/RW, Kel, Kec, Kota" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">${user.address || ''}</textarea>
              </div>
            </div>
            <div style="display:flex;gap:0.75rem;margin-top:1.5rem;flex-wrap:wrap;">
              <button type="submit" class="btn-hero-primary" style="border:none;padding:0.85rem 2rem;font-weight:600;border-radius:50px;">💾 Simpan Perubahan</button>
              <button type="reset" class="btn-hero-secondary" style="border:none;padding:0.85rem 2rem;font-weight:600;border-radius:50px;">Reset</button>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  renderPassword() {
    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">🔐 Ubah Password</h2>
        <div style="background:var(--white);border-radius:var(--radius);padding:2rem;border:1px solid #e2e8f0;max-width:600px;">
          <form onsubmit="return ProfilePage.changePassword(event)">
            <div style="margin-bottom:1.25rem;">
              <label class="form-label" style="font-weight:600;font-size:0.85rem;">Password Saat Ini</label>
              <input type="password" class="form-control" id="curPass" required minlength="6" placeholder="Masukkan password lama" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
            </div>
            <div style="margin-bottom:1.25rem;">
              <label class="form-label" style="font-weight:600;font-size:0.85rem;">Password Baru</label>
              <input type="password" class="form-control" id="newPass" required minlength="6" placeholder="Minimal 6 karakter" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
            </div>
            <div style="margin-bottom:1.5rem;">
              <label class="form-label" style="font-weight:600;font-size:0.85rem;">Konfirmasi Password Baru</label>
              <input type="password" class="form-control" id="confPass" required minlength="6" placeholder="Ulangi password baru" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
            </div>
            <button type="submit" class="btn-hero-primary" style="border:none;padding:0.85rem 2rem;font-weight:600;border-radius:50px;">🔐 Ubah Password</button>
          </form>
        </div>
      </div>
    `;
  },

  buyNow(productId) {
    Cart.add(productId, 1, null, null);
    setTimeout(() => {
      if (!Auth.isLoggedIn()) {
        window.location.href = '../login/index.html?redirect=checkout';
      } else {
        window.location.href = '../purchase/index.html';
      }
    }, 300);
  },

  reorder(orderId) {
    const user = Auth.getCurrentUser();
    if (!user || !user.orders) return;
    const order = user.orders.find(o => o.id === orderId);
    if (!order || !order.items || order.items.length === 0) {
      Toast.show('Tidak dapat mengulang pesanan ini', 'error');
      return;
    }
    order.items.forEach(it => {
      if (it.productId) Cart.add(it.productId, it.qty || 1, it.color || null, it.size || null);
    });
    Toast.show('Produk ditambahkan ke keranjang!', 'success');
    setTimeout(() => {
      window.location.href = '../cart/index.html';
    }, 600);
  },

  markAsDone(orderId) {
    const user = Auth.getCurrentUser();
    if (!user || !user.orders) return;
    const users = Auth.getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx === -1) return;
    const orderIdx = users[idx].orders.findIndex(o => o.id === orderId);
    if (orderIdx === -1) return;
    if (confirm('Tandai pesanan ini sebagai selesai/diterima?')) {
      users[idx].orders[orderIdx].status = 'Selesai';
      Auth.saveUsers(users);
      Toast.show('Pesanan ditandai selesai! 🎉', 'success');
      this.render();
    }
  },

  trackOrder(orderId) {
    Toast.show(`Lacak pesanan ${orderId}: Pesanan sedang dipersiapkan gudang kami, segera dikirim! 📦`, 'info', 5000);
  },

  saveProfile(e) {
    e.preventDefault();
    const name = document.getElementById('setName').value.trim();
    const phone = document.getElementById('setPhone').value.trim();
    const birthDate = document.getElementById('setBod').value;
    const address = document.getElementById('setAddress').value.trim();
    Auth.updateProfile({ name, phone, birthDate, address });
    setTimeout(() => this.render(), 500);
    return false;
  },

  changePassword(e) {
    e.preventDefault();
    const user = Auth.getCurrentUser();
    const cur = document.getElementById('curPass').value;
    const nw = document.getElementById('newPass').value;
    const cf = document.getElementById('confPass').value;

    if (user.password !== cur) {
      Toast.show('Password lama salah!', 'error');
      return false;
    }
    if (nw !== cf) {
      Toast.show('Konfirmasi password tidak cocok!', 'error');
      return false;
    }
    Auth.updateProfile({ password: nw });
    e.target.reset();
    return false;
  },

  removeFromWishlist(id) {
    Wishlist.toggle(id);
    this.renderTabContent();
    this.render();
  },

  logout() {
    if (confirm('Yakin ingin keluar dari akun ini?')) {
      Auth.logout();
      setTimeout(() => {
        window.location.href = '../index.html';
      }, 500);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ProfilePage.init();
});
