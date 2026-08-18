const SearchPage = {
  query: '',
  category: 'all',
  sortMode: 'default',

  init() {
    const params = new URLSearchParams(window.location.search);
    this.query = params.get('q') || params.get('category') || '';
    
    if (this.query) {
      const input = document.getElementById('mainSearchInput');
      if (input) input.value = this.query;
      
      const title = document.getElementById('searchTitle');
      if (title) title.textContent = `Hasil Pencarian: "${this.query}"`;

      this.category = 'all';
      const buttons = document.querySelectorAll('.category-btn');
      buttons.forEach(b => {
        b.classList.toggle('active', b.dataset.category === 'all');
      });
    }

    const mainInput = document.getElementById('mainSearchInput');
    if (mainInput) {
      let debounceTimer;
      mainInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          this.query = e.target.value.trim();
          const title = document.getElementById('searchTitle');
          if (title) {
            title.textContent = this.query ? `Hasil: "${this.query}"` : 'Semua Produk';
          }
          this.render();
        }, 300);
      });
    }

    this.render();
  },

  filterCat(category, btn) {
    this.category = category;
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.render();
  },

  sort() {
    const select = document.getElementById('sortSelect');
    this.sortMode = select ? select.value : 'default';
    this.render();
  },

  getProducts() {
    let products = [...PRODUCTS];

    if (this.query) {
      const q = this.query.toLowerCase();
      products = products.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    if (this.category !== 'all') {
      products = products.filter(p => p.category === this.category);
    }

    switch (this.sortMode) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
    }

    return products;
  },

  render() {
    const container = document.getElementById('product-container');
    if (!container) return;

    const products = this.getProducts();

    const countEl = document.getElementById('resultCount');
    if (countEl) {
      countEl.textContent = `${products.length} produk ditemukan`;
    }

    if (products.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <div style="font-size:5rem;opacity:0.3;">🔍</div>
          <h4 class="mt-3 fw-bold">Tidak Ada Produk</h4>
          <p class="text-muted">Coba kata kunci atau kategori lain!</p>
          <a href="../index.html" class="btn-hero-primary" style="display:inline-block;text-decoration:none;margin-top:1rem;">
            Kembali ke Beranda
          </a>
        </div>
      `;
      return;
    }

    const getBadge = (p) => {
      if (p.badge === 'new') return { type: 'new', text: '✨ NEW' };
	  if (p.badge === 'hot') return { type: 'hot', text: '🔥 HOT' };
	  if (p.badge === 'sale') return { type: 'sale', text: '💰 SALE' };;
      return null;
    };

    const getImage = (p) => {
      return Array.isArray(p.images) ? p.images[0] : p.images;
    };

    container.innerHTML = products.map((p, idx) => {
      const badge = getBadge(p);
      const image = getImage(p);
      const wishlisted = Wishlist.contains(p.id);
      const badgeClass = badge ? (badge.type === 'new' ? 'new' : 'hot') : '';

      return `
        <div class="col-6 col-md-4 col-lg-3 mb-4 animate-fade-in-up" style="animation-delay:${idx * 40}ms;">
          <div class="product-card">
            <div class="product-image-wrapper">
              ${badge ? `<span class="product-badge ${badgeClass}">${badge.text}</span>` : ''}
              <button class="product-wishlist ${wishlisted ? 'active' : ''}" onclick="SearchPage.toggleWishlist(${p.id}, this)" style="z-index:5;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${wishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <img src="${image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80'">
            </div>
            <div class="product-body">
              <span class="product-category">${p.category}</span>
              <h3 class="product-name" title="${p.name}">
                ${p.name.length > 50 ? p.name.slice(0, 50) + '...' : p.name}
              </h3>
              <div class="product-brand">${p.brand}</div>
              <div class="product-footer">
                <div class="product-price">Rp ${p.price.toLocaleString('id-ID')}</div>
                <button class="btn-add-cart" onclick="SearchPage.addToCart(${p.id})">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
				  <span>Tambah</span>
                </button>
              </div>
              <button class="btn-detail" onclick="window.location.href='../product/index.html?id=${p.id}'">
                Lihat Detail
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
		            <path d="M5 12h14M12 5l7 7-7 7"></path>
		        </svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  addToCart(productId) {
    Cart.add(productId, 1, null, null);
  },

  toggleWishlist(productId, btn) {
    const isActive = Wishlist.toggle(productId);
    if (btn) {
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isActive ? 'currentColor' : 'none');
      btn.classList.toggle('active', isActive);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  SearchPage.init();
});
