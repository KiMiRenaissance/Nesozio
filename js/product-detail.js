/* ==========================================================================
   NesoZio - PRODUCT DETAIL PAGE CONTROLLER (Dynamic Render)
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
      window.location.href = '../404/index.html';
      return;
    }

    this.trackRecentlyViewed(productId);
    document.title = `${this.currentProduct.name} - Neso Zio`;
    this.render();
  },

  render() {
    const p = this.currentProduct;
    if (!p) return;

    const mainContainer = document.getElementById('detailProduct');
    mainContainer.className = 'container py-5';

    mainContainer.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <img id="productMainImage" src="${p.images[0]}" class="img-fluid mb-3" alt="${p.name}">
          <div class="d-flex gap-2 flex-wrap" id="productThumbnails">
            ${p.images.map((img, idx) => `
              <div class="thumb-item ${idx === 0 ? 'active' : ''}" 
                   onclick="ProductDetail.switchImage('${img}', this)" 
                   style="width: 70px; height: 70px; border-radius: 8px; overflow: hidden; border: 2px solid ${idx === 0 ? 'var(--primary-color, #0d6efd)' : 'transparent'}; cursor: pointer;">
                <img src="${img}" alt="Thumbnail" style="width:100%; height:100%; object-fit: cover;">
              </div>
            `).join('')}
          </div>
        </div>

        <div class="col-md-6">
          <h3 id="pdTitle">${p.name}</h3>
          <p id="pdCategory" class="text-muted">${p.category} • ${p.brand}</p>
          <p id="pdDescription">${p.description}</p>

          <div id="pdSizes" class="mb-3">
            ${p.sizes ? p.sizes.map((s, i) => `
              <button class="btn btn-outline btn-sm size-option-btn ${i === 0 ? 'btn-primary' : ''}" 
                      onclick="ProductDetail.selectSize('${s}', this)">${s}</button>
            `).join('') : ''}
          </div>

          <h4 class="text-primary">~Rp ${p.price.toLocaleString('id-ID')}</h4>

          <div class="d-flex gap-2 mt-3">
            <a href="${p.link}" target="_blank" class="btn btn-success">Beli di Tokopedia</a>
          </div>
        </div>
      </div>

      ${p.specifications ? `
      <div class="row mt-5">
        <div class="col-12">
          <h4>Spesifikasi</h4>
          <table class="table" id="pdSpecsTable">
            ${Object.entries(p.specifications).map(([key, val]) => `
              <tr>
                <td style="font-weight: 600;">${key}</td>
                <td>${val}</td>
              </tr>
            `).join('')}
          </table>
        </div>
      </div>
      ` : ''}

      <div class="row mt-5">
        <div class="col-12">
          <h4>Produk Terkait</h4>
          <div id="relatedProductsGrid" class="row"></div>
        </div>
      </div>
    `;

    this.renderRelatedProducts();
  },

  switchImage(src, element) {
    const mainImg = document.getElementById('productMainImage');
    if (mainImg) mainImg.src = src;

    document.querySelectorAll('.thumb-item').forEach(t => t.style.borderColor = 'transparent');
    if (element) element.style.borderColor = 'var(--primary-color, #0d6efd)';
  },

  addToCart() {
    const qtyInput = document.getElementById('pdQuantity');
    const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
    // Pastikan Cart tersedia, jika tidak, abaikan
    if (typeof Cart !== 'undefined') {
      Cart.add(this.currentProduct.id, qty, this.selectedColor, this.selectedSize);
    }
  },

  buyNow() {
    this.addToCart();
    window.location.href = 'cart.html';
  },

  async renderRelatedProducts() {
    const container = document.getElementById('relatedProductsGrid');
    if (!container) return;

    const related = PRODUCTS.filter(
      p => p.category === this.currentProduct.category && p.id !== this.currentProduct.id
    ).slice(0, 4);

    container.innerHTML = related.map(p => `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.images[0]}" class="card-img-top" alt="${p.name}" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title">${p.name}</h6>
            <p class="card-text text-muted">~Rp ${p.price.toLocaleString('id-ID')}</p>
            <a href="product.html?id=${p.id}" class="btn btn-sm btn-outline-primary mt-auto">Lihat Detail</a>
          </div>
        </div>
      </div>
    `).join('');
  },
  
  trackRecentlyViewed(id) {}
};

document.addEventListener('DOMContentLoaded', () => {
  ProductDetail.init();
});