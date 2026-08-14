const CartPage = {
  SHIPPING_THRESHOLD: 500000,
  SHIPPING_COST: 25000,

  init() {
    this.render();
  },

  render() {
    const items = Cart.getDetailedItems();
    const subtitle = document.getElementById('cartSubtitle');
    if (subtitle) {
      subtitle.textContent = items.length > 0 
        ? `${items.length} item(s) di keranjangmu` 
        : 'Keranjangmu masih kosong';
    }

    const container = document.getElementById('cartContent');
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `
        <div class="col-12">
          <div class="cart-items">
            <div class="cart-empty">
              <div class="cart-empty-icon">🛒</div>
              <h3 class="cart-empty-title">Keranjang Masih Kosong</h3>
              <p class="cart-empty-desc">Yuk mulai belanja dan temukan produk favoritmu!</p>
              <a href="../index.html" class="btn-hero-primary" style="display:inline-block;text-decoration:none;">
                Mulai Belanja
              </a>
            </div>
          </div>
        </div>
      `;
      return;
    }

    const subtotal = Cart.getTotal();
    const shipping = subtotal >= this.SHIPPING_THRESHOLD ? 0 : this.SHIPPING_COST;
    const total = subtotal + shipping;

    container.innerHTML = `
      <div class="col-lg-8 mb-4 mb-lg-0">
        <div class="cart-items">
          ${items.map((item, idx) => this.renderItem(item, idx)).join('')}
        </div>
      </div>
      <div class="col-lg-4">
        <div class="summary-card">
          <h3 class="summary-title">Ringkasan Pesanan</h3>
          <div class="summary-row label">
            <span>Subtotal (${items.reduce((s, i) => s + i.quantity, 0)} item)</span>
            <span>Rp ${subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div class="summary-row label">
            <span>Ongkos Kirim</span>
            <span>${shipping === 0 
              ? '<strong style="color:var(--accent);">GRATIS 🎉</strong>' 
              : `Rp ${shipping.toLocaleString('id-ID')}`}</span>
          </div>
          ${shipping > 0 ? `
            <div style="background:rgba(245,158,11,0.1);color:var(--secondary-dark);padding:0.75rem 1rem;border-radius:var(--radius-sm);font-size:0.8rem;margin-top:0.75rem;">
              💡 Tambahkan <strong>Rp ${(this.SHIPPING_THRESHOLD - subtotal).toLocaleString('id-ID')}</strong> lagi untuk gratis ongkir!
            </div>
          ` : ''}
          <div class="summary-row total">
            <span>Total</span>
            <span style="color:var(--primary);">Rp ${total.toLocaleString('id-ID')}</span>
          </div>
          <button class="btn-checkout" onclick="CartPage.checkout()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:6px;">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            Checkout Sekarang
          </button>
          <button onclick="CartPage.clearCart()" style="width:100%;padding:0.6rem;background:transparent;border:none;color:var(--danger);cursor:pointer;font-weight:500;margin-top:0.5rem;border-radius:var(--radius-sm);transition:var(--transition);" onmouseover="this.style.background='#fef2f2'" onmouseout="this.style.background='transparent'">
            🗑️ Bersihkan Keranjang
          </button>
        </div>
      </div>
    `;
  },

  renderItem(item, idx) {
    const image = Array.isArray(item.product.images) ? item.product.images[0] : item.product.images;
    const variants = [];
    if (item.size) variants.push(item.size);
    if (item.color) variants.push(item.color);
    const variantText = variants.length > 0 ? variants.join(' • ') : '';

    return `
      <div class="cart-item animate-fade-in-up" style="animation-delay:${idx * 50}ms;">
        <div class="cart-item-img" onclick="window.location.href='../product/product.html?id=${item.product.id}'" style="cursor:pointer;">
          <img src="${image}" alt="${item.product.name}" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'">
        </div>
        <div class="cart-item-info">
          <h3 class="cart-item-name" onclick="window.location.href='../product/product.html?id=${item.product.id}'" style="cursor:pointer;">
            ${item.product.name.length > 55 ? item.product.name.slice(0, 55) + '...' : item.product.name}
          </h3>
          <p class="cart-item-variant">${item.product.category} • ${item.product.brand}${variantText ? ' • ' + variantText : ''}</p>
          <div class="cart-item-bottom">
            <div class="quantity-control">
              <button class="quantity-btn" onclick="CartPage.updateQty(${item.product.id}, ${item.quantity - 1}, '${item.color || ''}', '${item.size || ''}')">−</button>
              <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="CartPage.updateQty(${item.product.id}, parseInt(this.value) || 1, '${item.color || ''}', '${item.size || ''}')">
              <button class="quantity-btn" onclick="CartPage.updateQty(${item.product.id}, ${item.quantity + 1}, '${item.color || ''}', '${item.size || ''}')">+</button>
            </div>
            <div style="display:flex;align-items:center;gap:1rem;">
              <div class="cart-item-price">Rp ${item.subtotal.toLocaleString('id-ID')}</div>
              <button class="cart-item-remove" onclick="CartPage.removeItem(${item.product.id}, '${item.color || ''}', '${item.size || ''}')" title="Hapus">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  updateQty(productId, qty, color, size) {
    if (qty <= 0) {
      this.removeItem(productId, color, size);
      return;
    }
    Cart.update(productId, qty, color || null, size || null);
    this.render();
  },

  removeItem(productId, color, size) {
    Cart.remove(productId, color || null, size || null);
    this.render();
  },

  clearCart() {
    if (confirm('Yakin ingin menghapus semua item di keranjang?')) {
      Cart.clear();
      Toast.show('Keranjang dibersihkan', 'info');
      this.render();
    }
  },

  checkout() {
    const items = Cart.getDetailedItems();
    if (items.length === 0) {
      Toast.show('Keranjang masih kosong!', 'error');
      return;
    }
    if (!Auth.isLoggedIn()) {
      Toast.show('Silakan login terlebih dahulu untuk checkout', 'error');
      setTimeout(() => {
        window.location.href = '../login/index.html?redirect=checkout';
      }, 900);
      return;
    }
    window.location.href = '../purchase/index.html';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CartPage.init();
});
