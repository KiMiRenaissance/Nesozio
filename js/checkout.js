const CheckoutPage = {
  SHIPPING_THRESHOLD: 500000,
  SHIPPING_COST: 25000,
  orderPlaced: false,
  savedOrderId: null,

  init() {
    if (!Auth.isLoggedIn()) {
      Toast.show('Silakan login terlebih dahulu', 'error');
      setTimeout(() => {
        window.location.href = '../login/index.html?redirect=checkout';
      }, 900);
      return;
    }
    this.render();
  },

  render() {
    const items = Cart.getDetailedItems();
    const container = document.getElementById('checkoutContent');
    if (!container) return;

    if (items.length === 0 && !this.orderPlaced) {
      container.innerHTML = `
        <div class="col-12">
          <div class="cart-items">
            <div class="cart-empty">
              <div class="cart-empty-icon">🛒</div>
              <h3 class="cart-empty-title">Keranjang Kosong</h3>
              <p class="cart-empty-desc">Silakan tambahkan produk sebelum checkout.</p>
              <a href="../index.html" class="btn-hero-primary" style="display:inline-block;text-decoration:none;">Mulai Belanja</a>
            </div>
          </div>
        </div>
      `;
      return;
    }

    if (this.orderPlaced) {
      const user = Auth.getCurrentUser();
      const order = user && user.orders && user.orders[0] ? user.orders[0] : null;
      const orderId = this.savedOrderId || (order ? order.id : 'NZO-' + Date.now().toString().slice(-10));
      const totalItem = (order && order.items) ? order.items.reduce((s, i) => s + (i.qty || 1), 0) : 0;
      const totalBayar = order ? order.total : 0;

      container.innerHTML = `
        <div class="col-12">
          <div class="cart-items animate-fade-in-up" style="text-align:center;padding:4rem 2rem;">
            <div style="font-size:5rem;margin-bottom:1rem;">🎉</div>
            <h2 style="font-weight:700;color:var(--accent);margin-bottom:0.5rem;">Pesanan Berhasil Ditempatkan!</h2>
            <p style="color:var(--text-muted);margin-bottom:1rem;">Terima kasih telah berbelanja di NesoZio. Pesanan Anda akan segera diproses.</p>
            <div style="background:var(--bg-light);padding:1.5rem;border-radius:var(--radius);max-width:450px;margin:2rem auto;text-align:left;">
              <h5 style="font-weight:600;margin-bottom:1rem;">📋 Detail Pesanan</h5>
              <div style="margin-bottom:0.5rem;"><strong>Order ID:</strong> <span style="color:var(--primary);">${orderId}</span></div>
              <div style="margin-bottom:0.5rem;"><strong>Total Item:</strong> ${totalItem} produk</div>
              <div style="margin-bottom:0.5rem;"><strong>Total Bayar:</strong> <span style="color:var(--primary);font-weight:700;">Rp ${totalBayar.toLocaleString('id-ID')}</span></div>
              <div style="margin-bottom:1rem;"><strong>Status:</strong> <span style="padding:0.25rem 0.75rem;background:rgba(245,158,11,0.15);color:var(--secondary-dark);border-radius:50px;font-weight:600;font-size:0.8rem;">Menunggu Pembayaran</span></div>
              <div style="font-size:0.8rem;color:var(--text-muted);padding-top:0.75rem;border-top:1px dashed #e2e8f0;">
                💡 Silakan cek halaman <strong>Pesanan Saya</strong> untuk melihat status pesanan secara berkala.
              </div>
            </div>
            <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
              <a href="../profile/index.html" class="btn-hero-primary" style="display:inline-block;text-decoration:none;">
                📦 Lihat Pesanan Saya
              </a>
              <a href="../index.html" class="btn-hero-secondary" style="display:inline-block;text-decoration:none;">
                🏠 Kembali Belanja
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
    const uniqueCode = Math.floor(Math.random() * 900) + 100;
    const finalTotal = total + uniqueCode;

    const user = Auth.getCurrentUser() || {};
    container.innerHTML = `
      <div class="col-lg-8 mb-4 mb-lg-0">
        <div class="checkout-form" style="background:var(--white);padding:2rem;border-radius:var(--radius);border:1px solid #e2e8f0;box-shadow:var(--shadow-sm);">
          <h3 style="font-weight:700;font-size:1.25rem;margin-bottom:1.5rem;">📍 Data Pengiriman</h3>
          <form id="checkoutForm" onsubmit="return CheckoutPage.placeOrder(event)">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Nama Lengkap <span style="color:var(--danger);">*</span></label>
                <input type="text" name="customer_name" class="form-control" placeholder="Contoh: Budi Santoso" value="${user.name ? user.name.replace(/"/g, '&quot;') : ''}" required>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Nomor WhatsApp <span style="color:var(--danger);">*</span></label>
                <input type="tel" name="customer_phone" class="form-control" placeholder="08xx-xxxx-xxxx" value="${user.phone ? user.phone.replace(/"/g, '&quot;') : ''}" required>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Email</label>
                <input type="email" name="customer_email" class="form-control" placeholder="email@contoh.com" value="${user.email ? user.email.replace(/"/g, '&quot;') : ''}">
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Provinsi <span style="color:var(--danger);">*</span></label>
                <select class="form-select" name="customer_province" required>
                  <option value="">Pilih Provinsi</option>
                  <option>DKI Jakarta</option>
                  <option>Jawa Barat</option>
                  <option>Jawa Tengah</option>
                  <option>Jawa Timur</option>
                  <option>Banten</option>
                  <option>DI Yogyakarta</option>
                  <option>Sumatera Utara</option>
                  <option>Sulawesi Selatan</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Kota / Kabupaten <span style="color:var(--danger);">*</span></label>
                <input type="text" name="customer_city" class="form-control" placeholder="Nama Kota" required>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Kode Pos</label>
                <input type="text" name="customer_postal" class="form-control" placeholder="12xxx">
              </div>
              <div class="col-12 mb-4">
                <label class="form-label">Alamat Lengkap <span style="color:var(--danger);">*</span></label>
                <textarea class="form-control" name="customer_address" rows="3" placeholder="Jl. Contoh No. 123, RT/RW, Kelurahan, Kecamatan..." required>${user.address ? user.address : ''}</textarea>
              </div>
            </div>

            <h3 style="font-weight:700;font-size:1.25rem;margin-bottom:1.25rem;">🚚 Metode Pengiriman</h3>
            <div class="mb-4">
              <label style="display:flex;align-items:center;gap:0.75rem;padding:1rem;border:2px solid var(--primary);border-radius:var(--radius-sm);background:rgba(99,102,241,0.05);cursor:pointer;margin-bottom:0.75rem;">
                <input type="radio" name="shipping" value="reguler" checked style="accent-color:var(--primary);width:18px;height:18px;">
                <div style="flex:1;">
                  <div style="font-weight:600;">📦 JNE Reguler</div>
                  <div style="font-size:0.8rem;color:var(--text-muted);">Estimasi tiba 2-4 hari kerja</div>
                </div>
                <div style="font-weight:700;color:${shipping === 0 ? 'var(--accent)' : 'var(--text-dark)'};">
                  ${shipping === 0 ? 'GRATIS' : `Rp ${shipping.toLocaleString('id-ID')}`}
                </div>
              </label>
              <label style="display:flex;align-items:center;gap:0.75rem;padding:1rem;border:2px solid #e2e8f0;border-radius:var(--radius-sm);cursor:pointer;margin-bottom:0.75rem;transition:var(--transition);" onmouseover="this.style.borderColor='var(--primary-light)'" onmouseout="this.style.borderColor='#e2e8f0'">
                <input type="radio" name="shipping" value="express" style="accent-color:var(--primary);width:18px;height:18px;">
                <div style="flex:1;">
                  <div style="font-weight:600;">⚡ JNE Express</div>
                  <div style="font-size:0.8rem;color:var(--text-muted);">Estimasi tiba 1 hari kerja</div>
                </div>
                <div style="font-weight:700;">Rp ${(shipping + 15000).toLocaleString('id-ID')}</div>
              </label>
            </div>

            <h3 style="font-weight:700;font-size:1.25rem;margin-bottom:1.25rem;">💰 Metode Pembayaran</h3>
            <div class="mb-4">
              <label style="display:flex;align-items:center;gap:0.75rem;padding:1rem;border:2px solid var(--primary);border-radius:var(--radius-sm);background:rgba(99,102,241,0.05);cursor:pointer;margin-bottom:0.75rem;">
                <input type="radio" name="payment" value="transfer" checked style="accent-color:var(--primary);width:18px;height:18px;">
                <div style="display:flex;gap:0.25rem;font-weight:600;">
                  🏦 Transfer Bank (BCA, BNI, BRI, Mandiri)
                </div>
              </label>
              <label style="display:flex;align-items:center;gap:0.75rem;padding:1rem;border:2px solid #e2e8f0;border-radius:var(--radius-sm);cursor:pointer;margin-bottom:0.75rem;transition:var(--transition);" onmouseover="this.style.borderColor='var(--primary-light)'" onmouseout="this.style.borderColor='#e2e8f0'">
                <input type="radio" name="payment" value="ewallet" style="accent-color:var(--primary);width:18px;height:18px;">
                <div style="display:flex;gap:0.25rem;font-weight:600;">💳 E-Wallet (GoPay, OVO, DANA)</div>
              </label>
              <label style="display:flex;align-items:center;gap:0.75rem;padding:1rem;border:2px solid #e2e8f0;border-radius:var(--radius-sm);cursor:pointer;transition:var(--transition);" onmouseover="this.style.borderColor='var(--primary-light)'" onmouseout="this.style.borderColor='#e2e8f0'">
                <input type="radio" name="payment" value="cod" style="accent-color:var(--primary);width:18px;height:18px;">
                <div style="display:flex;gap:0.25rem;font-weight:600;">👨 COD - Bayar di Tempat</div>
              </label>
            </div>

            <button type="submit" class="btn-checkout" style="width:100%;font-size:1.05rem;padding:1.1rem;">
              ✨ Bayar Sekarang - Rp ${finalTotal.toLocaleString('id-ID')}
            </button>
            <p style="text-align:center;font-size:0.75rem;color:var(--text-muted);margin-top:1rem;">
              🔒 Pembayaran Anda dijamin 100% aman oleh NesoZio
            </p>
          </form>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="summary-card">
          <h3 class="summary-title">Ringkasan Pesanan</h3>
          
          <div style="max-height:300px;overflow-y:auto;margin-bottom:1rem;border-bottom:1px solid #f1f5f9;padding-bottom:1rem;">
            ${items.map(item => {
              const image = Array.isArray(item.product.images) ? item.product.images[0] : item.product.images;
              return `
                <div style="display:flex;gap:0.75rem;margin-bottom:0.75rem;">
                  <img src="${image}" alt="${item.product.name}" style="width:50px;height:50px;border-radius:8px;object-fit:cover;flex-shrink:0;" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200'">
                  <div style="flex:1;min-width:0;">
                    <div style="font-size:0.85rem;font-weight:500;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
                      ${item.product.name}
                    </div>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">${item.quantity} x Rp ${item.product.price.toLocaleString('id-ID')}</div>
                  </div>
                  <div style="font-weight:600;font-size:0.85rem;white-space:nowrap;">Rp ${item.subtotal.toLocaleString('id-ID')}</div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="summary-row label">
            <span>Subtotal (${items.reduce((s, i) => s + i.quantity, 0)} item)</span>
            <span>Rp ${subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div class="summary-row label">
            <span>Ongkos Kirim</span>
            <span>${shipping === 0 ? '<strong style="color:var(--accent);">GRATIS</strong>' : `Rp ${shipping.toLocaleString('id-ID')}`}</span>
          </div>
          <div class="summary-row label">
            <span>Kode Unik</span>
            <span>Rp ${uniqueCode}</span>
          </div>
          <div class="summary-row total">
            <span>Total Bayar</span>
            <span style="color:var(--primary);">Rp ${finalTotal.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>
    `;
  },

  getTotal() {
    const subtotal = Cart.getTotal();
    const shipping = subtotal >= this.SHIPPING_THRESHOLD ? 0 : this.SHIPPING_COST;
    const uniqueCode = Math.floor(Math.random() * 900) + 100;
    return subtotal + shipping + uniqueCode;
  },

  placeOrder(e) {
    e.preventDefault();
    const form = document.getElementById('checkoutForm');
    if (!form) return false;

    const val = (name) => form.querySelector(`[name="${name}"]`)?.value || '';
    const shippingMethod = form.querySelector('input[name="shipping"]:checked')?.value || 'reguler';
    const paymentMethod = form.querySelector('input[name="payment"]:checked')?.value || 'transfer';

    const items = Cart.getDetailedItems();
    const subtotal = Cart.getTotal();
    const shipping = subtotal >= this.SHIPPING_THRESHOLD ? 0 : this.SHIPPING_COST;
    const uniqueCode = Math.floor(Math.random() * 900) + 100;
    const total = subtotal + shipping + uniqueCode;

    const orderItems = items.map(it => ({
      productId: it.productId,
      name: it.product ? it.product.name : 'Produk',
      image: it.product ? (Array.isArray(it.product.images) ? it.product.images[0] : it.product.images) : null,
      price: it.product ? it.product.price : 0,
      qty: it.quantity,
      color: it.color || null,
      size: it.size || null,
      subtotal: it.subtotal
    }));

    const orderData = {
      items: orderItems,
      subtotal,
      shipping,
      uniqueCode,
      total,
      shippingMethod,
      paymentMethod,
      customer: {
        nama: val('customer_name') || Auth.getCurrentUser()?.name || '',
        wa: val('customer_phone') || Auth.getCurrentUser()?.phone || '',
        email: val('customer_email') || Auth.getCurrentUser()?.email || '',
        provinsi: val('customer_province') || '',
        kota: val('customer_city') || '',
        kodepos: val('customer_postal') || '',
        alamat: val('customer_address') || Auth.getCurrentUser()?.address || ''
      }
    };

    const savedOrder = Auth.addOrder(orderData);
    if (savedOrder) {
      this.savedOrderId = savedOrder.id;
    }

    this.orderPlaced = true;
    this.render();
    setTimeout(() => {
      Cart.clear();
    }, 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CheckoutPage.init();
});
