/* ==========================================================================
   NESO ZIO - PRODUCT DETAIL PAGE CONTROLLER
   ========================================================================== */

const ProductDetail = {
  currentProduct: null,
  selectedColor: null,
  selectedSize: null,

  async init() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 1;
    this.currentProduct = await DBBridge.getProductById(productId);

    if (!this.currentProduct) {
      window.location.href = '404.html';
      return;
    }

    this.trackRecentlyViewed(productId);
    this.render();
  },

  trackRecentlyViewed(productId) {
    let recent = JSON.parse(localStorage.getItem('neso_recently_viewed') || '[]');
    recent = recent.filter(id => id !== parseInt(productId));
    recent.unshift(parseInt(productId));
    if (recent.length > 8) recent.pop();
    localStorage.setItem('neso_recently_viewed', JSON.stringify(recent));
  },

  render() {
    const p = this.currentProduct;
    const discountedPrice = (p.price * (1 - p.discount / 100)).toFixed(2);

    // Update document title
    document.title = `${p.name} - Neso Zio`;

    // Main Gallery Image
    const mainImg = document.getElementById('productMainImage');
    if (mainImg) mainImg.src = p.images[0];

    // Thumbnail List
    const thumbContainer = document.getElementById('productThumbnails');
    if (thumbContainer) {
      thumbContainer.innerHTML = p.images.map((img, idx) => `
        <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="ProductDetail.switchImage('${img}', this)" style="width: 70px; height: 70px; border-radius: var(--radius-sm); overflow: hidden; border: 2px solid ${idx === 0 ? 'var(--primary-color)' : 'transparent'}; cursor: pointer;">
          <img src="${img}" alt="Thumbnail" style="width:100%; height:100%; object-fit: cover;">
        </div>
      `).join('');
    }

    // Title, Category, Price
    const titleEl = document.getElementById('pdTitle');
    const categoryEl = document.getElementById('pdCategory');
    const priceEl = document.getElementById('pdPrice');
    const oldPriceEl = document.getElementById('pdOldPrice');
    const ratingEl = document.getElementById('pdRating');
    const descEl = document.getElementById('pdDescription');

    if (titleEl) titleEl.textContent = p.name;
    if (categoryEl) categoryEl.textContent = `${p.category} • ${p.brand}`;
    if (priceEl) priceEl.textContent = `$${discountedPrice}`;
    if (oldPriceEl) oldPriceEl.textContent = p.discount > 0 ? `$${p.price.toFixed(2)}` : '';
    if (ratingEl) ratingEl.innerHTML = `<span style="color: var(--accent-color);">${'★'.repeat(Math.floor(p.rating))}</span> (${p.reviews} customer reviews)`;
    if (descEl) descEl.textContent = p.description;

    // Color Selector
    const colorContainer = document.getElementById('pdColors');
    if (colorContainer && p.colors) {
      colorContainer.innerHTML = p.colors.map((c, i) => `
        <button class="color-option-btn ${i === 0 ? 'active' : ''}" style="width: 32px; height: 32px; border-radius: 50%; background: ${c}; border: 2px solid var(--border-color); cursor: pointer;" onclick="ProductDetail.selectColor('${c}', this)"></button>
      `).join('');
      this.selectedColor = p.colors[0];
    }

    // Size Selector
    const sizeContainer = document.getElementById('pdSizes');
    if (sizeContainer && p.sizes) {
      sizeContainer.innerHTML = p.sizes.map((s, i) => `
        <button class="btn btn-outline btn-sm size-option-btn ${i === 0 ? 'btn-primary' : ''}" onclick="ProductDetail.selectSize('${s}', this)">${s}</button>
      `).join('');
      this.selectedSize = p.sizes[0];
    }

    // Render Specs Table
    const specsContainer = document.getElementById('pdSpecsTable');
    if (specsContainer && p.specifications) {
      specsContainer.innerHTML = Object.entries(p.specifications).map(([key, val]) => `
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 0.75rem; font-weight: 600; color: var(--text-muted);">${key}</td>
          <td style="padding: 0.75rem;">${val}</td>
        </tr>
      `).join('');
    }

    this.renderRelatedProducts();
  },

  switchImage(src, element) {
    const mainImg = document.getElementById('productMainImage');
    if (mainImg) mainImg.src = src;

    document.querySelectorAll('.thumb-item').forEach(t => t.style.borderColor = 'transparent');
    if (element) element.style.borderColor = 'var(--primary-color)';
  },

  selectColor(color, btn) {
    this.selectedColor = color;
    document.querySelectorAll('.color-option-btn').forEach(b => b.style.outline = 'none');
    if (btn) btn.style.outline = '3px solid var(--primary-color)';
  },

  selectSize(size, btn) {
    this.selectedSize = size;
    document.querySelectorAll('.size-option-btn').forEach(b => b.classList.remove('btn-primary'));
    if (btn) btn.classList.add('btn-primary');
  },

  addToCart() {
    const qtyInput = document.getElementById('pdQuantity');
    const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
    Cart.add(this.currentProduct.id, qty, this.selectedColor, this.selectedSize);
  },

  buyNow() {
    this.addToCart();
    window.location.href = 'cart.html';
  },

  async renderRelatedProducts() {
    const container = document.getElementById('relatedProductsGrid');
    if (!container) return;

    const related = PRODUCTS.filter(p => p.category === this.currentProduct.category && p.id !== this.currentProduct.id).slice(0, 4);
    container.innerHTML = related.map(p => ShopFilter.createProductCardHTML(p)).join('');
  }
};
