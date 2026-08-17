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
        container.innerHTML = this.renderEmpty();
        return;
    }

    const subtotal = Cart.getTotal();
    const shipping = subtotal >= this.SHIPPING_THRESHOLD ? 0 : this.SHIPPING_COST;
    const total = subtotal + shipping;
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const progress = subtotal >= this.SHIPPING_THRESHOLD
        ? 100
        : Math.min(100, (subtotal / this.SHIPPING_THRESHOLD) * 100);
    const remaining = this.SHIPPING_THRESHOLD - subtotal;

    container.innerHTML = `
        <div class="col-lg-8">
            <div class="cart-items">
                ${items.map((item, idx) => this.renderItem(item, idx)).join('')}
            </div>
        </div>

        <div class="col-lg-4">
            <div class="summary-card">
                <h3 class="summary-title">Ringkasan Pesanan</h3>

                <div class="summary-row label">
                    <span>Subtotal (${totalItems} item)</span>
                    <span>Rp ${subtotal.toLocaleString('id-ID')}</span>
                </div>

                <div class="summary-row label">
                    <span>Ongkos Kirim</span>
                    <span>${shipping === 0
                        ? '<strong style="color: var(--accent);">GRATIS 🎉</strong>'
                        : `Rp ${shipping.toLocaleString('id-ID')}`}</span>
                </div>

                <div class="free-shipping-progress">
                    <div style="width: ${progress}%"></div>
                </div>

                <p class="free-shipping-text">
                    ${shipping === 0
                        ? 'Selamat! Kamu mendapat <strong>gratis ongkir</strong> 🎉'
                        : `Belanja <strong>Rp ${remaining.toLocaleString('id-ID')}</strong> lagi untuk gratis ongkir`}
                </p>

                <div class="summary-row total">
                    <span>Total</span>
                    <span>Rp ${total.toLocaleString('id-ID')}</span>
                </div>

                <button class="btn-checkout" onclick="CartPage.checkout()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                    Checkout Sekarang
                </button>

                <button class="btn-clear-cart" onclick="CartPage.clearCart()">
                    🗑️ Bersihkan Keranjang
                </button>
            </div>
        </div>
    `;
},

renderEmpty() {
    return `
        <div class="col-12">
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <h3 class="cart-empty-title">Keranjang Masih Kosong</h3>
                <p class="cart-empty-desc">Yuk mulai belanja dan temukan produk favoritmu!</p>
                <a href="../index.html" class="btn-hero-primary" style="display:inline-block;text-decoration:none;">
                    Mulai Belanja
                </a>
            </div>
        </div>
    `;
},

renderItem(item, idx) {
    const fallbackImage = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400';
    const image = Array.isArray(item.product.images)
        ? item.product.images[0]
        : item.product.images;

    const variants = [];
    if (item.size) variants.push(item.size);
    if (item.color) variants.push(item.color);
    const variantText = variants.length > 0 ? variants.join(' • ') : '';

    const productUrl = `../product/index.html?id=${item.product.id}`;
    const productName = item.product.name.length > 55
	        ? item.product.name.slice(0, 55) + '...'
	        : item.product.name;
	
	    return `
	        <div class="cart-item animate-fade-in-up" style="animation-delay:${idx * 50}ms;">
	            <div class="cart-item-img" onclick="window.location.href='${productUrl}'" role="button" tabindex="0">
	                <img src="${image || fallbackImage}" alt="${item.product.name}" onerror="this.src='${fallbackImage}'">
	            </div>
	
	            <div class="cart-item-info">
	                <div class="cart-item-top">
	                    <h3 class="cart-item-name" onclick="window.location.href='${productUrl}'" role="button" tabindex="0">
	                        ${productName}
	                    </h3>
	                    <div class="cart-item-price">Rp ${item.subtotal.toLocaleString('id-ID')}</div>
	                </div>
	
	                <p class="cart-item-variant">
	                    ${item.product.category || 'Umum'} • ${item.product.brand || 'NesoZio'}${variantText ? ' • ' + variantText : ''}
	                </p>
	
	                <div class="cart-item-bottom">
	                    <div class="quantity-control">
	                        <button type="button" class="quantity-btn" onclick="CartPage.updateQty(${item.product.id}, ${item.quantity - 1}, '${item.color || ''}', '${item.size || ''}')" aria-label="Kurangi">−</button>
	                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="CartPage.updateQty(${item.product.id}, parseInt(this.value) || 1, '${item.color || ''}', '${item.size || ''}')">
	                        <button type="button" class="quantity-btn" onclick="CartPage.updateQty(${item.product.id}, ${item.quantity + 1}, '${item.color || ''}', '${item.size || ''}')" aria-label="Tambah">+</button>
	                    </div>
	
	                    <button type="button" class="cart-item-remove" onclick="CartPage.removeItem(${item.product.id}, '${item.color || ''}', '${item.size || ''}')">
	                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
	                            <polyline points="3 6 5 6 21 6"></polyline>
	                            <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
	                        </svg>
	                        Hapus
	                    </button>
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
