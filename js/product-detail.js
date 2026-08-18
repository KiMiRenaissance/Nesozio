const ProductDetail = {
  currentProduct: null,
  selectedColor: null,
  selectedSize: null,
  quantity: 1,

  async init() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 1;
    this.currentProduct = await DBBridge.getProductById(productId);

    if (!this.currentProduct) {
      window.location.href = '../404/index.html';
      return;
    }

    if (this.currentProduct.sizes && this.currentProduct.sizes.length > 0) {
      this.selectedSize = this.currentProduct.sizes[0];
    }
    if (this.currentProduct.colors && this.currentProduct.colors.length > 0) {
      this.selectedColor = this.currentProduct.colors[0];
    }
    this.quantity = 1;

    document.title = `${this.currentProduct.name} - NesoZio`;
    this.render();
  },

	render() {
	    const p = this.currentProduct;
	    if (!p) return;
	
	    const mainContainer = document.getElementById('detailProduct');
	    mainContainer.className = 'container detail-page px-lg-4';
	
	    const images = Array.isArray(p.images) ? p.images : [p.images];
	    const isWishlisted = Wishlist.contains(p.id);

	    mainContainer.innerHTML = `
	      <nav aria-label="breadcrumb">
	        <ol class="breadcrumb">
	          <li class="breadcrumb-item"><a href="../index.html">Beranda</a></li>
	          <li class="breadcrumb-item"><a href="../search/index.html?q=${encodeURIComponent(p.category)}">${p.category}</a></li>
	          <li class="breadcrumb-item active" aria-current="page">${p.name.length > 35 ? p.name.slice(0, 35) + '...' : p.name}</li>
	        </ol>
	      </nav>
	
	      <div class="product-detail-wrapper animate-fade-in-up">
	        <!-- Gallery -->
	        <div class="product-gallery">
	          <div class="product-detail-images">
	            <div class="main-image-container">
	              <img id="productMainImage" src="${images[0]}" alt="${p.name}" onerror="this.src='https://i.ibb.co.com/FqYtjpLF/Proyek-Baru-B352-F56.png'">
	            </div>
	            ${images.length > 1 ? `
	            <div class="thumbnails" id="productThumbnails">
	              ${images.map((img, idx) => `
	                <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="ProductDetail.switchImage('${img}', this)">
	                  <img src="${img}" alt="Thumbnail ${idx + 1}" onerror="this.src='https://i.ibb.co.com/FqYtjpLF/Proyek-Baru-B352-F56.png'">
	                </div>
	              `).join('')}
	            </div>
	            ` : ''}
	          </div>
	        </div>

	        <!-- Info -->
	        <div class="product-info">
	          <span class="detail-category">${p.category}</span>
	          <h1 class="detail-title">${p.name}</h1>
	          <p class="detail-brand">Brand: <strong>${p.brand}</strong></p>
	          <div class="detail-price">Rp ${p.price.toLocaleString('id-ID')}</div>
	          <p class="detail-description">${p.description}</p>
	
	          ${p.colors && p.colors.length > 0 ? `
	          <div class="option-group">
	            <label class="option-label">Pilih Warna:</label>
	            <div class="color-options" id="colorOptions">
	              ${p.colors.map((color, idx) => `
					  <button class="color-option-btn ${this.selectedColor === color ? 'active' : ''}" 
					          onclick="ProductDetail.selectColor('${color}', this)"
					          title="Warna ${color}">
					    <span class="color-swatch" style="background:${color};"></span>
					    <span class="color-name">${color}</span>
					  </button>
					`).join('')}
	            </div>
	          </div>
	          ` : ''}
	
	          ${p.sizes && p.sizes.length > 0 ? `
	          <div class="option-group">
	            <label class="option-label">Pilih Ukuran:</label>
	            <div class="size-options" id="sizeOptions">
	              ${p.sizes.map(size => `
	                <button class="size-btn ${this.selectedSize === size ? 'active' : ''}" 
	                        onclick="ProductDetail.selectSize('${size}', this)">${size}</button>
	              `).join('')}
	            </div>
	          </div>
	          ` : ''}
	
	          <div class="option-group">
	            <label class="option-label">Jumlah:</label>
	            <div class="quantity-wrapper">
	              <div class="quantity-control">
	                <button class="quantity-btn" onclick="ProductDetail.changeQuantity(-1)">−</button>
	                <input type="number" class="quantity-input" id="quantityInput" value="1" min="1" onchange="ProductDetail.setQuantity(this.value)">
	                <button class="quantity-btn" onclick="ProductDetail.changeQuantity(1)">+</button>
	              </div>
	              <div style="color:var(--text-muted);font-size:0.85rem;">
	                Stok: <strong style="color:var(--accent);">Tersedia ✓</strong>
	              </div>
	            </div>
	          </div>
	
	          <div class="action-buttons">
	            <button class="btn-wishlist-large ${isWishlisted ? 'active' : ''}" onclick="ProductDetail.toggleWishlist(this)" title="Wishlist">
	              <svg width="22" height="22" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
	              </svg>
	            </button>
	            <button class="btn-primary-large" onclick="ProductDetail.addToCart()">
	              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
	                <circle cx="9" cy="21" r="1"></circle>
	                <circle cx="20" cy="21" r="1"></circle>
	                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
	              </svg>
	              Tambah Keranjang
	            </button>
	            <button class="btn-secondary-large" onclick="ProductDetail.buyNow()">
	              Beli Sekarang
	            </button>
	          </div>

	          ${p.link ? `
	          <a href="${p.link}" target="_blank" class="btn-shopee">
	            Beli di tempat lain
	          </a>
	          ` : ''}
	
	          <div class="trust-badges">
	            <div class="trust-badge">
	              <div class="trust-badge-icon" style="background:rgba(16,185,129,0.15);color:var(--accent);">🚚</div>
	              <div>
	                <div class="trust-badge-text-title">Gratis Ongkir</div>
	                <div class="trust-badge-text-desc">Min. belanja Rp 500.000</div>
	              </div>
	            </div>
	            <div class="trust-badge">
	              <div class="trust-badge-icon" style="background:rgba(99,102,241,0.15);color:var(--primary);">🛡️</div>
	              <div>
	                <div class="trust-badge-text-title">Garansi Resmi</div>
	                <div class="trust-badge-text-desc">100% Produk Original</div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	
	      ${p.specifications ? `
	      <div class="specs-section animate-fade-in-up" style="animation-delay:200ms;">
	        <h3 class="specs-title">📋 Spesifikasi Produk</h3>
	        <table class="specs-table">
	          ${Object.entries(p.specifications).map(([key, val]) => `
	            <tr>
	              <td>${key}</td>
	              <td>${val}</td>
	            </tr>
	          `).join('')}
	        </table>
	      </div>
	      ` : ''}
	
	      <div class="related-section">
	        <h2 class="section-title" style="margin-bottom:1.5rem;">Produk Terkait</h2>
	        <div class="row" id="relatedProductsGrid"></div>
	      </div>
	    `;
	
	    this.renderRelatedProducts();
	},

  switchImage(src, element) {
    const mainImg = document.getElementById('productMainImage');
    if (mainImg) mainImg.src = src;

    document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
    if (element) element.classList.add('active');
  },

  selectSize(size, element) {
    this.selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    if (element) element.classList.add('active');
  },

  selectColor(color, element) {
    this.selectedColor = color;
    document.querySelectorAll('.color-option-btn').forEach(b => b.classList.remove('active'));
    if (element) element.classList.add('active');
  },

  changeQuantity(delta) {
    const newQty = Math.max(1, this.quantity + delta);
    this.setQuantity(newQty);
  },

  setQuantity(value) {
    const newQty = Math.max(1, parseInt(value) || 1);
    this.quantity = newQty;
    const input = document.getElementById('quantityInput');
    if (input) input.value = newQty;
  },

  toggleWishlist(btnElement) {
    if (!this.currentProduct) return;
    const isActive = Wishlist.toggle(this.currentProduct.id);
    if (btnElement) {
      const svg = btnElement.querySelector('svg');
      if (svg) {
        svg.setAttribute('fill', isActive ? 'currentColor' : 'none');
      }
      btnElement.classList.toggle('active', isActive);
    }
  },

  addToCart() {
    if (!this.currentProduct) return;
    Cart.add(this.currentProduct.id, this.quantity, this.selectedColor, this.selectedSize);
  },

  buyNow() {
    if (!this.currentProduct) return;
    Cart.add(this.currentProduct.id, this.quantity, this.selectedColor, this.selectedSize);
    setTimeout(() => {
      window.location.href = '../cart/index.html';
    }, 500);
  },

  renderRelatedProducts() {
    const container = document.getElementById('relatedProductsGrid');
    if (!container) return;

    const related = PRODUCTS.filter(
      p => p.category === this.currentProduct.category && p.id !== this.currentProduct.id
    ).slice(0, 4);

    if (related.length === 0) {
      container.innerHTML = '<p class="text-muted">Tidak ada produk terkait.</p>';
      return;
    }

    container.innerHTML = related.map((p, idx) => {
      const image = Array.isArray(p.images) ? p.images[0] : p.images;
      return `
        <div class="col-6 col-md-4 col-lg-3 mb-4 animate-fade-in-up" style="animation-delay:${idx * 100}ms;">
          <div class="product-card h-100">
            <div class="product-image-wrapper">
              <img src="${image}" alt="${p.name}" loading="lazy" onerror="this.src='https://i.ibb.co.com/FqYtjpLF/Proyek-Baru-B352-F56.png'" style="object-fit:cover;">
            </div>
            <div class="product-body">
              <span class="product-category">${p.category}</span>
              <h3 class="product-name">${p.name.length > 45 ? p.name.slice(0, 45) + '...' : p.name}</h3>
              <div class="product-footer" style="padding-top:0.75rem;">
                <div class="product-price" style="font-size:0.95rem;">Rp ${p.price.toLocaleString('id-ID')}</div>
              </div>
              <button class="btn-detail mt-2" onclick="window.location.href='index.html?id=${p.id}'">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ProductDetail.init();
});
