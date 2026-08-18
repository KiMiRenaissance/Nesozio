let currentCategory = 'all';
let currentSort = 'default';

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getBadge(product) {
    if (product.badge === 'new') return { type: 'new', text: '✨ NEW' };
    if (product.badge === 'hot') return { type: 'hot', text: '🔥 HOT' };
    if (product.badge === 'sale') return { type: 'sale', text: '💰 SALE' };
    return null;
}

function getProductImage(product) {
    const img = Array.isArray(product.images) ? product.images[0] : product.images;
    return img || 'https://i.ibb.co.com/FqYtjpLF/Proyek-Baru-B352-F56.png';
}

function createProductCard(product, index = 0) {
    const badge = getBadge(product);
    const image = getProductImage(product);
    const isWishlisted = Wishlist.contains(product.id);
    const badgeClass = badge ? (badge.type === 'new' ? 'new' : badge.type === 'hot' ? 'hot' : '') : '';
    
    return `
        <div class="col-6 col-md-4 col-lg-3 mb-4 animate-fade-in-up" style="animation-delay: ${index * 50}ms;">
		    <div class="product-card">
		        <div class="product-image-wrapper">
		            ${badge ? `<span class="product-badge ${badgeClass}">${badge.text}</span>` : ''}
		            <button class="product-wishlist ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); handleWishlistToggle(${product.id}, this)" aria-label="Wishlist">
		                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
		                </svg>
		            </button>
		            <img src="${image}" alt="${product.name}" loading="lazy" onerror="this.src='https://i.ibb.co.com/FqYtjpLF/Proyek-Baru-B352-F56.png'">
		        </div>
		        <div class="product-body">
		            <span class="product-category">${product.category}</span>
		            <h3 class="product-name" title="${product.name}">
		                ${product.name.length > 50 ? product.name.slice(0, 55) + '...' : product.name}
		            </h3>
		            <div class="product-brand">${product.brand}</div>
		            <div class="product-footer">
		                <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
		                <button class="btn-add-cart" onclick="event.stopPropagation(); handleAddToCart(${product.id})" title="Tambah ke Keranjang">
		                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
		                        <circle cx="9" cy="21" r="1"></circle>
		                        <circle cx="20" cy="21" r="1"></circle>
		                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
		                    </svg>
		                    <span>Tambah</span>
		                </button>
		            </div>
		            <button class="btn-detail" onclick="window.location.href='./product/index.html?id=${product.id}'">
		                Lihat Detail
		                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
		                    <path d="M5 12h14M12 5l7 7-7 7"></path>
		                </svg>
		            </button>
		        </div>
		    </div>
		</div>
    `;
}

function getFilteredAndSortedProducts() {
    let products = [...PRODUCTS];

    if (currentCategory !== 'all') {
        products = products.filter(p => p.category === currentCategory);
    }

    switch (currentSort) {
        case 'price-low':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            products.sort((a, b) => b.price - a.price);
            break;
        default:
            products = shuffleArray(products);
    }

    return products;
}

function renderProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;

    const products = getFilteredAndSortedProducts();

    if (products.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <div style="font-size:4rem;opacity:0.3;">🔍</div>
                <h4 class="mt-3 text-muted">Produk tidak ditemukan</h4>
                <p class="text-muted">Coba kategori lain ya!</p>
            </div>
        `;
        return;
    }

    let html = '';
    products.forEach((product, index) => {
        html += createProductCard(product, index);
    });

    container.innerHTML = html;
}

function filterCategory(category, btnElement) {
    currentCategory = category;

    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (btnElement) {
        btnElement.classList.add('active');
    } else {
        const targetBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
        if (targetBtn) targetBtn.classList.add('active');
    }

    const produkSection = document.getElementById('produk');
    if (produkSection) {
        produkSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    renderProducts();
}

function sortProducts() {
    const select = document.getElementById('sortSelect');
    currentSort = select ? select.value : 'default';
    renderProducts();
}

function handleAddToCart(productId) {
    Cart.add(productId, 1, null, null);
}

function handleWishlistToggle(productId, btnElement) {
    const isActive = Wishlist.toggle(productId);
    if (btnElement) {
        const svg = btnElement.querySelector('svg');
        if (svg) {
            svg.setAttribute('fill', isActive ? 'currentColor' : 'none');
        }
        btnElement.classList.toggle('active', isActive);
    }
}

document.addEventListener('DOMContentLoaded', renderProducts);
