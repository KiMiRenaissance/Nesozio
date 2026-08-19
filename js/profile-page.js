const ProfilePage = {
  currentTab: 'overview',

  init() {
    if (!Auth.isLoggedIn()) {
      Toast.show('Silakan login terlebih dahulu', 'error');
      setTimeout(() => {
        window.location.href = '../login/index.html?redirect=profile';
      }, 800);
      return;
    }
    this.render();
    this._handleHash();
    window.addEventListener('hashchange', () => this._handleHash());
  },

  _handleHash() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    let targetTab = null;
    if (hash === 'orders' || hash === 'pesanan') targetTab = 'orders';
    else if (hash === 'wishlist' || hash === 'favorit') targetTab = 'wishlist';
    else if (hash === 'settings' || hash === 'pengaturan') targetTab = 'settings';
    else if (hash === 'password') targetTab = 'password';
    else if (hash === 'overview' || hash === '') targetTab = 'overview';

    if (targetTab) {
      const tabs = document.querySelectorAll('.profile-tab');
      const tabMap = { overview: 0, orders: 1, wishlist: 2, settings: 3, password: 4 };
      const idx = tabMap[targetTab];
      const el = tabs[idx] || null;
      setTimeout(() => this.switchTab(targetTab, el), 50);
    }
  },

  switchTab(tab, el) {
    this.currentTab = tab;
    document.querySelectorAll('.profile-tab').forEach(t => {
      t.classList.remove('active');
      t.style.background = 'transparent';
      t.style.color = 'var(--text-dark)';
    });
    if (el) {
      el.classList.add('active');
      el.style.background = 'rgba(99,102,241,0.1)';
      el.style.color = 'var(--primary)';
    }
    this.renderTabContent();
  },

  render() {
    const user = Auth.getCurrentUser();
    const container = document.getElementById('profileContent');
    if (!user || !container) return;

    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const joinDate = new Date(user.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const orderCount = user.orders ? user.orders.length : 0;
    const wishlistCount = Wishlist.getCount();
    const cartCount = Cart.getCount();
    const activeOrders = user.orders ? user.orders.filter(o => o.status === 'Diproses' || o.status === 'Dikirim').length : 0;

    container.innerHTML = `
      <div class="row mb-4 animate-fade-in-up">
        <div class="col-12">
          <div style="background:linear-gradient(135deg,var(--primary),var(--primary-dark),#fff9c4);border-radius:var(--radius-lg);padding:2.5rem;color:white;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-60px;right:-60px;width:250px;height:250px;background:rgba(255,255,255,0.08);border-radius:50%;"></div>
            <div style="position:absolute;bottom:-40px;left:30%;width:180px;height:180px;background:rgba(255,255,255,0.06);border-radius:50%;"></div>
            <div class="row align-items-center" style="position:relative;z-index:1;">
              <div class="col-auto mb-3 mb-md-0">
                <div style="width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,#fbbf24,#f59e0b);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:800;color:white;box-shadow:0 10px 30px rgba(0,0,0,0.2);border:4px solid rgba(255,255,255,0.3);">
                  ${initials}
                </div>
              </div>
              <div class="col">
                <h1 style="font-size:1.75rem;font-weight:700;margin:0 0 0.25rem;">Halo, ${user.name.split(' ')[0]}! 👋</h1>
                <p style="opacity:0.9;margin:0 0 0.5rem;"><svg fill="#ffeb3b" width="28px" height="28px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path> </g></svg> ${user.email}${user.phone ? ' • <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#ffeb3b"></path> <path d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z" fill="#ffeb3b"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z" fill="#ffeb3b"></path> </g></svg> ' + user.phone : ''}</p>
                <div style="display:flex;gap:1.5rem;flex-wrap:wrap;">
                  <div><strong>${activeOrders}</strong> <span style="opacity:0.8;">Pesanan Aktif</span></div>
                  <div><strong>${orderCount}</strong> <span style="opacity:0.8;">Total Pesanan</span></div>
                  <div><strong>${wishlistCount}</strong> <span style="opacity:0.8;">Wishlist</span></div>
                  <div><strong>${cartCount}</strong> <span style="opacity:0.8;">Keranjang</span></div>
                  <div><span style="opacity:0.8;">Bergabung sejak ${joinDate}</span></div>
                </div>
              </div>
              <div class="col-auto mt-3 mt-md-0 d-flex flex-column gap-2">
                <button onclick="window.location.href='../cart/index.html'" style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3);color:white;padding:0.6rem 1.25rem;border-radius:50px;font-weight:600;cursor:pointer;transition:var(--transition);display:flex;align-items:center;gap:0.5rem;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
                  🛒 Ke Keranjang
                </button>
                <button onclick="ProfilePage.logout()" style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3);color:white;padding:0.6rem 1.25rem;border-radius:50px;font-weight:600;cursor:pointer;transition:var(--transition);display:flex;align-items:center;gap:0.5rem;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 mb-4 mb-lg-0">
          <div style="background:var(--white);border-radius:var(--radius);padding:0.75rem;border:1px solid #e2e8f0;box-shadow:var(--shadow-sm);">
            <button class="profile-tab active" onclick="ProfilePage.switchTab('overview', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:rgba(99,102,241,0.1);display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--primary);text-align:left;">
              <span style="font-size:1.1rem;"><svg width="29px" height="29px" viewBox="0 0 16 16" fill="#ffeb3b" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill="#ffeb3b"></path> </g></svg></span> Ringkasan
            </button>
            <button class="profile-tab" onclick="ProfilePage.switchTab('orders', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--text-dark);text-align:left;position:relative;">
              <span style="font-size:1.1rem;"><svg fill="#ffeb3b" width="29px" height="29px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.276,2.553,22,6H2L3.724,2.553A1,1,0,0,1,4.618,2H19.382A1,1,0,0,1,20.276,2.553ZM2,8H22V21a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1ZM5,18a1,1,0,0,0,1,1h4a1,1,0,0,0,0-2H6A1,1,0,0,0,5,18Z"></path></g></svg></span>
              <span>Riwayat Pesanan</span>
              ${activeOrders > 0 ? `<span style="position:absolute;right:1rem;top:50%;transform:translateY(-50%);background:var(--danger);color:white;font-size:0.7rem;padding:0.15rem 0.5rem;border-radius:50px;font-weight:700;">${activeOrders}</span>` : ''}
            </button>
            <button class="profile-tab" onclick="ProfilePage.switchTab('wishlist', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--text-dark);text-align:left;">
              <span style="font-size:1.1rem;"><svg fill="#ffeb3b" width="29px" height="29px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg></span> Wishlist
            </button>
            <button class="profile-tab" onclick="ProfilePage.switchTab('settings', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--text-dark);text-align:left;">
              <span style="font-size:1.1rem;"><svg width="29px" height="29px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="#ffeb3b"></path> </g></svg></span> Pengaturan Profil
            </button>
            <button class="profile-tab" onclick="ProfilePage.switchTab('password', this)" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--text-dark);text-align:left;">
              <span style="font-size:1.1rem;"><svg width="29px" height="29px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffeb3b" stroke="#ffeb3b" stroke-width="0.00048000000000000007"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Layer_7" data-name="Layer 7"> <path d="M39,18H35V13A11,11,0,0,0,24,2H22A11,11,0,0,0,11,13v5H7a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V20A2,2,0,0,0,39,18ZM15,13a7,7,0,0,1,7-7h2a7,7,0,0,1,7,7v5H15ZM14,35a3,3,0,1,1,3-3A2.9,2.9,0,0,1,14,35Zm9,0a3,3,0,1,1,3-3A2.9,2.9,0,0,1,23,35Zm9,0a3,3,0,1,1,3-3A2.9,2.9,0,0,1,32,35Z"></path> </g> </g> </g></svg></span> Ubah Password
            </button>
            <div style="height:1px;background:#f1f5f9;margin:0.5rem 0;"></div>
            <button onclick="ProfilePage.logout()" style="width:100%;padding:0.85rem 1rem;border:none;background:transparent;display:flex;align-items:center;gap:0.75rem;border-radius:var(--radius-sm);font-weight:500;cursor:pointer;transition:var(--transition);color:var(--danger);text-align:left;" onmouseover="this.style.background='#fef2f2'" onmouseout="this.style.background='transparent'">
              <span style="font-size:1.1rem;"><svg fill="#e22a2a" width="29px" height="29px" viewBox="-9 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>door</title> <path d="M13.28 5.88c-0.12-0.080-0.28-0.12-0.44-0.12 0 0 0 0-0.040 0h-12c-0.44 0-0.84 0.36-0.84 0.84v15.080c0 0.44 0.36 0.84 0.84 0.84h2.4v2.92c0 0.28 0.12 0.52 0.36 0.68 0.12 0.080 0.28 0.12 0.44 0.12 0.12 0 0.24-0.040 0.32-0.080l8.84-3.76c0.32-0.12 0.52-0.44 0.52-0.76v-15.040c-0.040-0.28-0.16-0.56-0.4-0.72zM1.64 20.8v-13.4h7.16l-5.080 2.2c-0.32 0.12-0.52 0.44-0.52 0.76v10.44h-1.56zM12 21.12l-7.12 3.040v-13.28l7.12-3.040v13.28zM7.64 16.84c0 0.464-0.376 0.84-0.84 0.84s-0.84-0.376-0.84-0.84c0-0.464 0.376-0.84 0.84-0.84s0.84 0.376 0.84 0.84z"></path> </g></svg></span> Keluar Akun
            </button>
          </div>
        </div>

        <div class="col-lg-9" id="profileTabContent"></div>
      </div>
    `;

    document.querySelectorAll('.profile-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.profile-tab').forEach(t => {
          t.classList.remove('active');
          t.style.background = 'transparent';
          t.style.color = 'var(--text-dark)';
        });
        this.classList.add('active');
        this.style.background = 'rgba(99,102,241,0.1)';
        this.style.color = 'var(--primary)';
      });
    });

    this.renderTabContent();
  },

  renderTabContent() {
    const user = Auth.getCurrentUser();
    const container = document.getElementById('profileTabContent');
    if (!user || !container) return;

    switch (this.currentTab) {
      case 'overview':
        container.innerHTML = this.renderOverview(user);
        break;
      case 'orders':
        container.innerHTML = this.renderOrders(user);
        break;
      case 'wishlist':
        container.innerHTML = this.renderWishlist();
        break;
      case 'settings':
        container.innerHTML = this.renderSettings(user);
        break;
      case 'password':
        container.innerHTML = this.renderPassword();
        break;
    }
  },

  renderOverview(user) {
    const orders = user.orders || [];
    const wishlistCount = Wishlist.getCount();
    const cartCount = Cart.getCount();
    const activeOrders = orders.filter(o => o.status === 'Diproses' || o.status === 'Dikirim');

    const quickActions = [
      { icon: '<svg fill="#ffeb3b" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 287.755 287.755" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M134.16,279.13c-15.24,0-26.715-12.31-26.715-27.544c0-15.162,11.475-26.638,26.715-26.638 c15.162,0,27.472,11.476,27.472,26.638C161.626,266.821,149.316,279.13,134.16,279.13z"></path> <path d="M265.515,176.575c-1.682,7.085-2.275,19.503-6.762,25.244c-2.708,3.465-6.773,5.626-11.943,5.626H92.21 c-9.962,0-18.056-8.022-18.056-18.003c0-6.461-18.507-98.199-25.497-132.633c-1.453-7.146-8.551-12.995-15.834-13.061 l-14.711-0.141c-19.786,0-18.075-18.774-18.075-18.774c0.384-6.626,2.642-10.581,5.434-12.911 c5.597-4.668,18.231-3.008,25.347-3.02l12.874-0.024c22.146,0,30.883,12.661,34.317,22.929c2.312,6.917,3.495,18.735,5.05,25.857 l22.104,100.829c1.561,7.122,8.737,12.893,16.021,12.893H222.31c7.29,0,14.412-5.771,15.907-12.91l16.507-78.486 c2.132-9.217,5.566-13.627,9.086-15.501c6.425-3.444,19.882,1.63,22.416,8.455c3.759,10.157-0.595,27.37-0.595,27.37 S272.691,146.484,265.515,176.575z"></path> <path d="M224.382,279.13c-15.18,0-26.649-12.31-26.649-27.544c0-15.162,11.47-26.638,26.649-26.638 c15.162,0,27.525,11.476,27.525,26.638C251.908,266.821,239.544,279.13,224.382,279.13z"></path> <path d="M135.085,153.335c-4.984,0-9.025-4.053-9.025-9.043c0-4.978,4.042-9.031,9.025-9.031c4.996,0,9.031,4.053,9.031,9.031 C144.116,149.283,140.087,153.335,135.085,153.335z"></path> <path d="M171.209,153.335c-4.983,0-9.024-4.053-9.024-9.043c0-4.978,4.041-9.031,9.024-9.031c4.979,0,9.031,4.053,9.031,9.031 C180.241,149.283,176.188,153.335,171.209,153.335z"></path> <path d="M207.323,153.335c-4.99,0-9.031-4.053-9.031-9.043c0-4.978,4.041-9.031,9.031-9.031c4.978,0,9.025,4.053,9.025,9.031 C216.348,149.283,212.3,153.335,207.323,153.335z"></path> <path d="M117.022,117.21c-4.972,0-9.037-4.035-9.037-9.021c0-4.981,4.065-9.035,9.037-9.035c5.008,0,9.043,4.053,9.043,9.035 C126.06,113.175,122.024,117.21,117.022,117.21z"></path> <path d="M153.147,99.161c4.984,0,9.025,4.044,9.025,9.028c0,4.986-4.041,9.028-9.025,9.028c-4.989,0-9.031-4.042-9.031-9.028 C144.116,103.205,148.158,99.161,153.147,99.161z"></path> <path d="M189.266,99.161c4.984,0,9.025,4.044,9.025,9.028c0,4.986-4.041,9.028-9.025,9.028c-4.99,0-9.031-4.042-9.031-9.028 C180.235,103.205,184.276,99.161,189.266,99.161z"></path> <path d="M225.379,99.161c4.983,0,9.024,4.044,9.024,9.028c0,4.986-4.041,9.028-9.024,9.028c-4.99,0-9.031-4.042-9.031-9.028 C216.348,103.205,220.389,99.161,225.379,99.161z"></path> <path d="M207.323,81.104c-4.99,0-9.031-4.053-9.031-9.022c0-4.993,4.041-9.031,9.031-9.031c4.978,0,9.025,4.032,9.025,9.031 C216.348,77.051,212.3,81.104,207.323,81.104z"></path> <path d="M171.209,81.104c-4.983,0-9.024-4.053-9.024-9.022c0-4.993,4.041-9.031,9.024-9.031c4.979,0,9.031,4.032,9.031,9.031 C180.241,77.051,176.188,81.104,171.209,81.104z"></path> <path d="M135.085,81.104c-4.984,0-9.025-4.053-9.025-9.022c0-4.993,4.042-9.031,9.025-9.031c4.996,0,9.031,4.032,9.031,9.031 C144.116,77.051,140.087,81.104,135.085,81.104z"></path> </g> </g></svg>', title: 'Keranjang', count: cartCount, link: '../cart/index.html', color: 'var(--primary)' },
      { icon: '<svg fill="#ffeb3b" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>', title: 'Wishlist', count: wishlistCount, link: '../search/index.html', color: 'var(--danger)' },
      { icon: '<svg fill="#ffeb3b" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.276,2.553,22,6H2L3.724,2.553A1,1,0,0,1,4.618,2H19.382A1,1,0,0,1,20.276,2.553ZM2,8H22V21a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1ZM5,18a1,1,0,0,0,1,1h4a1,1,0,0,0,0-2H6A1,1,0,0,0,5,18Z"></path></g></svg>', title: 'Pesanan', count: orders.length, link: '#', action: "ProfilePage.switchTab('orders',document.querySelector('.profile-tab:nth-child(2)'))", color: 'var(--secondary)' },
      { icon: '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="#ffeb3b" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.23607 1C5.09976 1 4.06097 1.64201 3.55279 2.65836L1.14806 7.46782C0.647975 8.46799 0.745665 9.66329 1.40152 10.569L9.57018 21.8495C10.7679 23.5035 13.2321 23.5035 14.4298 21.8495L22.5985 10.569C23.2543 9.66329 23.352 8.468 22.852 7.46782L20.4472 2.65836C19.939 1.64201 18.9003 1 17.7639 1H6.23607ZM5.34165 3.55279C5.51104 3.214 5.8573 3 6.23607 3H8.67428L7.24571 8H3.11804L5.34165 3.55279ZM9.32574 8L10.7543 3H13.2457L14.6743 8H9.32574ZM14.646 10H9.35397L12 18.5996L14.646 10ZM13.929 19.1312L16.7386 10H20.5412L13.929 19.1312ZM16.7543 8L15.3257 3H17.7639C18.1427 3 18.489 3.214 18.6584 3.55279L20.882 8H16.7543ZM3.4588 10H7.26143L10.071 19.1312L3.4588 10Z" fill="#ffeb3b"></path> </g></svg>', title: 'Voucher', count: 0, link: '#', color: 'var(--accent)' },
    ];

    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">📋 Ringkasan Akun</h2>
        <div class="row g-3 mb-4">
          ${quickActions.map(qa => `
            <div class="col-6 col-md-3">
              <div style="background:var(--white);padding:1.5rem 1rem;border-radius:var(--radius);border:1px solid #e2e8f0;box-shadow:var(--shadow-sm);text-align:center;cursor:pointer;transition:var(--transition);" onclick="${qa.action ? qa.action : `window.location.href='${qa.link}'`}" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='var(--shadow-sm)'">
                <div style="width:50px;height:50px;margin:0 auto 0.75rem;border-radius:50%;background:${qa.color}22;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${qa.icon}</div>
                <div style="font-weight:700;font-size:1.5rem;color:${qa.color};margin-bottom:0.2rem;">${qa.count}</div>
                <div style="font-size:0.85rem;color:var(--text-muted);font-weight:500;">${qa.title}</div>
              </div>
            </div>
          `).join('')}
        </div>

        ${activeOrders.length > 0 ? `
          <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">🚚 Pesanan Sedang Diproses</h2>
          <div style="display:flex;flex-direction:column;gap:1rem;margin-bottom:3rem;">
            ${activeOrders.map(order => {
              const date = new Date(order.date).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });
              const total = order.total || 0;
              const items = order.items || [];
              const statusColor = order.status === 'Dikirim' ? 'var(--primary)' : 'var(--secondary-dark)';
              const statusBg = order.status === 'Dikirim' ? 'rgba(99,102,241,0.12)' : 'rgba(245,158,11,0.12)';
              const progressStep = order.status === 'Dikirim' ? 2 : 1;
              return `
                <div style="background:var(--white);border-radius:var(--radius);border:1px solid #e2e8f0;overflow:hidden;box-shadow:var(--shadow-sm);">
                  <div style="padding:1rem 1.25rem;background:#f8fafc;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;border-bottom:1px solid #f1f5f9;">
                    <div>
                      <div style="font-weight:700;font-size:0.95rem;">${order.id}</div>
                      <div style="font-size:0.8rem;color:var(--text-muted);">${date}</div>
                    </div>
                    <div style="display:flex;gap:0.75rem;align-items:center;flex-wrap:wrap;">
                      <span style="padding:0.35rem 0.85rem;border-radius:50px;background:${statusBg};color:${statusColor};font-weight:600;font-size:0.8rem;">
                        ${order.status === 'Dikirim' ? '🚚 ' : '⏳ '}${order.status}
                      </span>
                      <button onclick="ProfilePage.switchTab('orders',document.querySelector('.profile-tab:nth-child(2)'))" style="padding:0.35rem 0.85rem;border-radius:50px;background:rgba(99,102,241,0.08);color:var(--primary);border:none;font-weight:600;font-size:0.8rem;cursor:pointer;">
                        Detail →
                      </button>
                    </div>
                  </div>
                  <div style="padding:1.25rem;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:1rem;">
                      <div style="font-size:0.85rem;color:var(--text-muted);">Total: <strong style="color:var(--primary);font-size:1.05rem;">Rp ${total.toLocaleString('id-ID')}</strong></div>
                      <div style="display:flex;gap:1rem;align-items:center;font-size:0.75rem;">
                        <div style="display:flex;align-items:center;gap:0.35rem;"><div style="width:10px;height:10px;border-radius:50%;background:var(--accent);"></div><span style="${progressStep >= 1 ? 'color:var(--accent);font-weight:600;' : ''}">Diproses</span></div>
                        <div style="width:30px;height:2px;background:${progressStep >= 2 ? 'var(--primary)' : '#e2e8f0'};"></div>
                        <div style="display:flex;align-items:center;gap:0.35rem;"><div style="width:10px;height:10px;border-radius:50%;background:${progressStep >= 2 ? 'var(--primary)' : '#e2e8f0'};"></div><span style="${progressStep >= 2 ? 'color:var(--primary);font-weight:600;' : ''}">Dikirim</span></div>
                        <div style="width:30px;height:2px;background:#e2e8f0;"></div>
                        <div style="display:flex;align-items:center;gap:0.35rem;"><div style="width:10px;height:10px;border-radius:50%;background:#e2e8f0;"></div><span style="color:var(--text-muted);">Selesai</span></div>
                      </div>
                    </div>
                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                      ${items.slice(0, 4).map(it => {
                        const img = Array.isArray(it.image) ? it.image[0] : it.image;
                        return `<img src="${img}" style="width:60px;height:60px;border-radius:10px;object-fit:cover;border:1px solid #f1f5f9;" onerror="this.src='https://i.ibb.co.com/FqYtjpLF/Proyek-Baru-B352-F56.png'" title="${it.name || 'Produk'}">`;
                      }).join('')}
                      ${items.length > 4 ? `<div style="width:60px;height:60px;border-radius:10px;background:var(--bg-light);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--text-muted);border:1px solid #f1f5f9;">+${items.length - 4}</div>` : ''}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}

        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">💡 Rekomendasi Untukmu</h2>
        <div class="row g-3">
          ${PRODUCTS.slice(0, 4).map(p => {
            const image = Array.isArray(p.images) ? p.images[0] : p.images;
            return `
              <div class="col-6 col-md-3">
                <div class="product-card h-100" onclick="window.location.href='../product/index.html?id=${p.id}'" style="cursor:pointer;">
                  <div class="product-image-wrapper">
                    <img src="${image}" alt="${p.name}" loading="lazy" onerror="this.src='https://i.ibb.co.com/FqYtjpLF/Proyek-Baru-B352-F56.png'">
                  </div>
                  <div class="product-body" style="padding:0.75rem;">
                    <span class="product-category" style="font-size:0.65rem;">${p.category}</span>
                    <h3 class="product-name" style="font-size:0.8rem;">${p.name.length > 30 ? p.name.slice(0,30)+'...' : p.name}</h3>
                    <div class="product-footer" style="flex-direction:column;align-items:flex-start;gap:0.5rem;">
                      <div style="font-weight:700;color:var(--primary);font-size:0.9rem;">Rp ${p.price.toLocaleString('id-ID')}</div>
                      <div style="display:flex;gap:0.4rem;width:100%;">
                        <button class="btn-add-cart" onclick="event.stopPropagation();Cart.add(${p.id},1,null,null);" style="flex:1;padding:0.4rem 0.6rem;font-size:0.75rem;justify-content:center;">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        </button>
                        <button onclick="event.stopPropagation();ProfilePage.buyNow(${p.id});" style="flex:1;padding:0.4rem 0.6rem;background:var(--secondary);color:white;border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.75rem;cursor:pointer;transition:var(--transition);display:flex;align-items:center;justify-content:center;gap:0.3rem;" onmouseover="this.style.background='var(--secondary-dark)'" onmouseout="this.style.background='var(--secondary)'">
                          ⚡ Beli
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div style="margin-top:3rem;">
          <a href="../search/index.html" style="display:block;text-align:center;padding:1rem;background:var(--white);border:2px dashed #e2e8f0;border-radius:var(--radius);color:var(--primary);font-weight:600;text-decoration:none;transition:var(--transition);" onmouseover="this.style.borderColor='var(--primary)';this.style.background='rgba(99,102,241,0.03)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.background='var(--white)'">
            🔍 Lihat Semua Produk →
          </a>
        </div>
      </div>
    `;
  },

  renderOrders(user) {
    const orders = user.orders || [];

    if (orders.length === 0) {
      return `
        <div class="animate-fade-in-up">
          <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">📦 Riwayat Pesanan</h2>
          <div style="background:var(--white);padding:4rem 2rem;text-align:center;border-radius:var(--radius);border:1px solid #e2e8f0;">
            <div style="font-size:5rem;margin-bottom:1rem;opacity:0.4;">📦</div>
            <h4 style="font-weight:600;margin-bottom:0.5rem;">Belum Ada Pesanan</h4>
            <p style="color:var(--text-muted);margin-bottom:1.5rem;">Yuk mulai belanja dan dapatkan penawaran terbaik!</p>
            <a href="../index.html" class="btn-hero-primary" style="text-decoration:none;display:inline-block;">Mulai Belanja</a>
          </div>
        </div>
      `;
    }

    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">📦 Riwayat Pesanan (${orders.length})</h2>
        <div style="display:flex;flex-direction:column;gap:1rem;">
          ${orders.map(order => {
            const date = new Date(order.date).toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' });
            const total = order.total || 0;
            const items = order.items || [];
            const statusColor = order.status === 'Selesai' ? 'var(--accent)' : order.status === 'Dikirim' ? 'var(--primary)' : 'var(--secondary-dark)';
            const statusBg = order.status === 'Selesai' ? 'rgba(16,185,129,0.12)' : order.status === 'Dikirim' ? 'rgba(99,102,241,0.12)' : 'rgba(245,158,11,0.12)';
            return `
              <div style="background:var(--white);border-radius:var(--radius);border:1px solid #e2e8f0;overflow:hidden;box-shadow:var(--shadow-sm);">
                <div style="padding:1rem 1.25rem;background:#f8fafc;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;border-bottom:1px solid #f1f5f9;">
                  <div>
                    <div style="font-weight:700;font-size:0.95rem;">${order.id}</div>
                    <div style="font-size:0.8rem;color:var(--text-muted);">${date}</div>
                  </div>
                  <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
                    <span style="padding:0.35rem 0.85rem;border-radius:50px;background:${statusBg};color:${statusColor};font-weight:600;font-size:0.8rem;">
                      ${order.status === 'Selesai' ? '✅ ' : order.status === 'Dikirim' ? '🚚 ' : '⏳ '}${order.status}
                    </span>
                  </div>
                </div>
                <div style="padding:1.25rem;">
                  ${items.length > 0 ? `
                    <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1rem;">
                      ${items.map(it => {
                        const img = Array.isArray(it.image) ? it.image[0] : it.image;
                        return `
                          <div style="display:flex;gap:0.75rem;align-items:center;">
                            <img src="${img}" style="width:56px;height:56px;border-radius:10px;object-fit:cover;flex-shrink:0;border:1px solid #f1f5f9;" onerror="this.src='https://i.ibb.co.com/FqYtjpLF/Proyek-Baru-B352-F56.png'">
                            <div style="flex:1;min-width:0;">
                              <div style="font-size:0.88rem;font-weight:500;line-height:1.3;">${it.name || 'Produk'}</div>
                              <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">
                                ${it.qty || 1} item • Rp ${((it.price || 0) * (it.qty || 1)).toLocaleString('id-ID')}
                                ${it.color ? ' • Warna: ' + it.color : ''}${it.size ? ' • Ukuran: ' + it.size : ''}
                              </div>
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  ` : ''}
                  <div style="display:flex;justify-content:space-between;align-items:center;padding-top:1rem;border-top:1px dashed #e2e8f0;flex-wrap:wrap;gap:1rem;">
                    <div>
                      <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:2px;">Total Pesanan</div>
                      <div style="font-weight:800;font-size:1.25rem;color:var(--primary);">Rp ${total.toLocaleString('id-ID')}</div>
                      ${order.paymentMethod ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">💳 ${order.paymentMethod === 'transfer' ? 'Transfer Bank' : order.paymentMethod === 'ewallet' ? 'E-Wallet' : order.paymentMethod === 'cod' ? 'COD (Bayar di Tempat)' : order.paymentMethod}</div>` : ''}
                    </div>
                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                      ${items.length > 0 ? `
                        <button onclick="ProfilePage.reorder('${order.id}')" style="padding:0.6rem 1rem;background:linear-gradient(135deg,var(--secondary),var(--secondary-dark));color:white;border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.85rem;cursor:pointer;transition:var(--transition);display:flex;align-items:center;gap:0.4rem;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 15px rgba(245,158,11,0.35)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                          🔄 Ulang Pesanan
                        </button>
                      ` : ''}
                      ${order.status === 'Diproses' ? `
                        <button onclick="ProfilePage.trackOrder('${order.id}')" style="padding:0.6rem 1rem;background:rgba(99,102,241,0.08);color:var(--primary);border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.85rem;cursor:pointer;transition:var(--transition);">
                          📍 Lacak Pesanan
                        </button>
                      ` : ''}
                      ${order.status === 'Dikirim' ? `
                        <button onclick="ProfilePage.markAsDone('${order.id}')" style="padding:0.6rem 1rem;background:rgba(16,185,129,0.1);color:var(--accent);border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.85rem;cursor:pointer;transition:var(--transition);">
                          ✅ Pesanan Diterima
                        </button>
                      ` : ''}
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  renderWishlist() {
    const wishIds = Wishlist.getItems();
    const items = wishIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

    if (items.length === 0) {
      return `
        <div class="animate-fade-in-up">
          <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">❤️ Wishlist Saya</h2>
          <div style="background:var(--white);padding:4rem 2rem;text-align:center;border-radius:var(--radius);border:1px solid #e2e8f0;">
            <div style="font-size:5rem;margin-bottom:1rem;opacity:0.4;">💔</div>
            <h4 style="font-weight:600;margin-bottom:0.5rem;">Wishlist Masih Kosong</h4>
            <p style="color:var(--text-muted);margin-bottom:1.5rem;">Simpan produk favoritmu agar mudah ditemukan nanti!</p>
            <a href="../search/index.html" class="btn-hero-primary" style="text-decoration:none;display:inline-block;">Lihat Produk</a>
          </div>
        </div>
      `;
    }

    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">❤️ Wishlist Saya (${items.length})</h2>
        <div class="row g-3">
          ${items.map(p => {
            const image = Array.isArray(p.images) ? p.images[0] : p.images;
            return `
              <div class="col-6 col-md-4 col-lg-3">
                <div class="product-card h-100">
                  <div class="product-image-wrapper" onclick="window.location.href='../product/index.html?id=${p.id}'" style="cursor:pointer;">
                    <button class="product-wishlist active" onclick="event.stopPropagation();ProfilePage.removeFromWishlist(${p.id})" title="Hapus dari wishlist" style="z-index:5;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    <img src="${image}" alt="${p.name}" loading="lazy" onerror="this.src='https://i.ibb.co.com/FqYtjpLF/Proyek-Baru-B352-F56.png'">
                  </div>
                  <div class="product-body">
                    <span class="product-category">${p.category}</span>
                    <h3 class="product-name">${p.name.length > 45 ? p.name.slice(0,45)+'...' : p.name}</h3>
                    <div class="product-footer">
                      <div class="product-price">Rp ${p.price.toLocaleString('id-ID')}</div>
                    </div>
                    <div style="display:flex;gap:0.4rem;margin-top:0.75rem;">
                      <button class="btn-add-cart" style="flex:1;justify-content:center;" onclick="Cart.add(${p.id},1,null,null);">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        Keranjang
                      </button>
                      <button onclick="ProfilePage.buyNow(${p.id})" style="flex:1;padding:0.5rem 1rem;background:linear-gradient(135deg,var(--secondary),var(--secondary-dark));color:white;border:none;border-radius:var(--radius-sm);font-weight:600;font-size:0.85rem;cursor:pointer;transition:var(--transition);display:flex;align-items:center;justify-content:center;gap:0.4rem;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 15px rgba(245,158,11,0.35)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                        ⚡ Beli
                      </button>
                    </div>
                    <button class="btn-detail mt-2" onclick="window.location.href='../product/index.html?id=${p.id}'">Lihat Detail</button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  renderSettings(user) {
    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">⚙️ Pengaturan Profil</h2>
        <div style="background:var(--white);border-radius:var(--radius);padding:2rem;border:1px solid #e2e8f0;">
          <form onsubmit="return ProfilePage.saveProfile(event)">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Nama Lengkap</label>
                <input type="text" class="form-control" id="setName" value="${user.name}" required style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
              </div>
              <div class="col-md-6">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Email</label>
                <input type="email" class="form-control" value="${user.email}" disabled style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;background:var(--bg-light);">
              </div>
              <div class="col-md-6">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Nomor WhatsApp</label>
                <input type="tel" class="form-control" id="setPhone" value="${user.phone || ''}" placeholder="08xx-xxxx-xxxx" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
              </div>
              <div class="col-md-6">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Tanggal Lahir</label>
                <input type="date" class="form-control" id="setBod" value="${user.birthDate || ''}" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
              </div>
              <div class="col-12">
                <label class="form-label" style="font-weight:600;font-size:0.85rem;">Alamat Lengkap</label>
                <textarea class="form-control" id="setAddress" rows="3" placeholder="Jl. Contoh No. 123, RT/RW, Kel, Kec, Kota" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">${user.address || ''}</textarea>
              </div>
            </div>
            <div style="display:flex;gap:0.75rem;margin-top:1.5rem;flex-wrap:wrap;">
              <button type="submit" class="btn-hero-primary" style="border:none;padding:0.85rem 2rem;font-weight:600;border-radius:50px;">💾 Simpan Perubahan</button>
              <button type="reset" class="btn-hero-secondary" style="border:none;padding:0.85rem 2rem;font-weight:600;border-radius:50px;">Reset</button>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  renderPassword() {
    return `
      <div class="animate-fade-in-up">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1.25rem;">🔐 Ubah Password</h2>
        <div style="background:var(--white);border-radius:var(--radius);padding:2rem;border:1px solid #e2e8f0;max-width:600px;">
          <form onsubmit="return ProfilePage.changePassword(event)">
            <div style="margin-bottom:1.25rem;">
              <label class="form-label" style="font-weight:600;font-size:0.85rem;">Password Saat Ini</label>
              <input type="password" class="form-control" id="curPass" required minlength="6" placeholder="Masukkan password lama" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
            </div>
            <div style="margin-bottom:1.25rem;">
              <label class="form-label" style="font-weight:600;font-size:0.85rem;">Password Baru</label>
              <input type="password" class="form-control" id="newPass" required minlength="6" placeholder="Minimal 6 karakter" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
            </div>
            <div style="margin-bottom:1.5rem;">
              <label class="form-label" style="font-weight:600;font-size:0.85rem;">Konfirmasi Password Baru</label>
              <input type="password" class="form-control" id="confPass" required minlength="6" placeholder="Ulangi password baru" style="padding:0.7rem 1rem;border:2px solid #e2e8f0;border-radius:10px;">
            </div>
            <button type="submit" class="btn-hero-primary" style="border:none;padding:0.85rem 2rem;font-weight:600;border-radius:50px;">🔐 Ubah Password</button>
          </form>
        </div>
      </div>
    `;
  },

  buyNow(productId) {
    Cart.add(productId, 1, null, null);
    setTimeout(() => {
      if (!Auth.isLoggedIn()) {
        window.location.href = '../login/index.html?redirect=checkout';
      } else {
        window.location.href = '../purchase/index.html';
      }
    }, 300);
  },

  reorder(orderId) {
    const user = Auth.getCurrentUser();
    if (!user || !user.orders) return;
    const order = user.orders.find(o => o.id === orderId);
    if (!order || !order.items || order.items.length === 0) {
      Toast.show('Tidak dapat mengulang pesanan ini', 'error');
      return;
    }
    order.items.forEach(it => {
      if (it.productId) Cart.add(it.productId, it.qty || 1, it.color || null, it.size || null);
    });
    Toast.show('Produk ditambahkan ke keranjang!', 'success');
    setTimeout(() => {
      window.location.href = '../cart/index.html';
    }, 600);
  },

  markAsDone(orderId) {
    const user = Auth.getCurrentUser();
    if (!user || !user.orders) return;
    const users = Auth.getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx === -1) return;
    const orderIdx = users[idx].orders.findIndex(o => o.id === orderId);
    if (orderIdx === -1) return;
    if (confirm('Tandai pesanan ini sebagai selesai/diterima?')) {
      users[idx].orders[orderIdx].status = 'Selesai';
      Auth.saveUsers(users);
      Toast.show('Pesanan ditandai selesai! 🎉', 'success');
      this.render();
    }
  },

  trackOrder(orderId) {
    Toast.show(`Lacak pesanan ${orderId}: Pesanan sedang dipersiapkan gudang kami, segera dikirim! 📦`, 'info', 5000);
  },

  saveProfile(e) {
    e.preventDefault();
    const name = document.getElementById('setName').value.trim();
    const phone = document.getElementById('setPhone').value.trim();
    const birthDate = document.getElementById('setBod').value;
    const address = document.getElementById('setAddress').value.trim();
    Auth.updateProfile({ name, phone, birthDate, address });
    setTimeout(() => this.render(), 500);
    return false;
  },

  changePassword(e) {
    e.preventDefault();
    const user = Auth.getCurrentUser();
    const cur = document.getElementById('curPass').value;
    const nw = document.getElementById('newPass').value;
    const cf = document.getElementById('confPass').value;

    if (user.password !== cur) {
      Toast.show('Password lama salah!', 'error');
      return false;
    }
    if (nw !== cf) {
      Toast.show('Konfirmasi password tidak cocok!', 'error');
      return false;
    }
    Auth.updateProfile({ password: nw });
    e.target.reset();
    return false;
  },

  removeFromWishlist(id) {
    Wishlist.toggle(id);
    this.renderTabContent();
    this.render();
  },

  logout() {
    if (confirm('Yakin ingin keluar dari akun ini?')) {
      Auth.logout();
      setTimeout(() => {
        window.location.href = '../index.html';
      }, 500);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ProfilePage.init();
});
