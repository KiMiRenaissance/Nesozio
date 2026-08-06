/* ==========================================================================
   AURA LUXE - NAVBAR INTERACTION & AUTO-COMPLETE SEARCH
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  Navbar.init();
});

const Navbar = {
  init() {
    this.initStickyScroll();
    this.initMobileMenu();
    this.initLiveSearch();
  },

  initStickyScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  },

  initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        }
      });
    }
  },

  initLiveSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    // Create dropdown container dynamically if not exists
    let dropdown = document.querySelector('.search-results-dropdown');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'search-results-dropdown';
      searchInput.parentElement.appendChild(dropdown);
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
        dropdown.innerHTML = `<div style="padding: 1rem; text-align: center; color: var(--text-muted);">No products found for "${query}"</div>`;
      } else {
        dropdown.innerHTML = matches.map(p => `
          <div class="search-item d-flex mt-3" onclick="window.location.href='./product/product-detail/product.html?id=${p.id}'">
            <img src="${p.images[0]}" alt="${p.name}" class="col-2 m-1">
            <div>
              <h6>${p.name}</h6>
              <span style="font-size: 75%">$${(p.price * (1 - p.discount/100)).toFixed(2)}</span>
            </div>
          </div>
        `).join('');
      }

      dropdown.classList.add('active');
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.parentElement.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  },
};
