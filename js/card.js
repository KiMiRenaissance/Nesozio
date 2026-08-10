function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function renderProducts() {
    const container = document.getElementById('product-container');
    const shuffled = shuffleArray([...PRODUCTS]);
    let html = '';
    shuffled.forEach(product => {
        html += `
            <div class="col-12 col-md-4 mb-4">
                <!-- 1. WAJIB pakai h-100 agar mengisi penuh kolom -->
                <div class="card h-100 shadow-sm d-flex flex-column">
                    <!-- 2. Gambar dibuat seragam dengan ratio, agar tidak menyebabkan perbedaan tinggi -->
                    <div class="ratio ratio-4x3">
                        <img src="${product.images}" class="card-img-top" alt="${product.name}" loading="lazy" style="object-fit: cover;">
                    </div>
                    
                    <!-- 3. card-body juga flex column -->
                    <div class="card-body d-flex flex-column">
                        <!-- 4. Judul pakai flex-grow-1, ini kuncinya! -->
                        <h5 class="card-title flex-grow-1">
                            ${product.name.length > 40 ? product.name.slice(0, 40) + '...' : product.name}
                        </h5>
                        <p class="card-text text-primary fw-bold">~Rp ${product.price.toLocaleString('id-ID')}</p>
                        <button class="btn btn-outline-primary mt-2 w-100" onclick="window.location.href='./product/product.html?id=${product.id}'">Beli</button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderProducts);