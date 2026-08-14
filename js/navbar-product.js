document.addEventListener('DOMContentLoaded', () => {
  Navbar.init();
});

const Navbar = {
  init() {
    this.initStickyScroll();
    this.initLiveSearch();
  },

  initStickyScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  },

  initLiveSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    const form = searchInput.closest('form, .search-wrapper');
    if (!form) return;

    let dropdown = document.querySelector('.search-results-dropdown');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'search-results-dropdown';
      form.appendChild(dropdown);
    }

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length < 2) {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        return;
      }

      const matches = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
      ).slice(0, 6);

      if (matches.length === 0) {
        dropdown.innerHTML = `<div style="padding: 1.5rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">😕 Tidak ada produk untuk "${query}"</div>`;
      } else {
        dropdown.innerHTML = matches.map(p => {
          const img = Array.isArray(p.images) ? p.images[0] : p.images;
          return `
            <div class="search-item d-flex" onclick="window.location.href='../product/product.html?id=${p.id}'">
              <img src="${img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200'">
              <div class="flex-grow-1">
                <h6>${p.name.length > 45 ? p.name.slice(0, 45) + '...' : p.name}</h6>
                <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.25rem;">${p.category} • ${p.brand}</div>
                <span>Rp ${p.price.toLocaleString('id-ID')}</span>
              </div>
            </div>
          `;
        }).join('');
      }

      dropdown.classList.add('active');
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `../search/index.html?q=${encodeURIComponent(query)}`;
        }
      }
    });

    document.addEventListener('click', (e) => {
      if (!form.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  },
};
