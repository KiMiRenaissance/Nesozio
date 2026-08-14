const AuthPage = {
  currentTab: 'login',
  redirectUrl: null,

  init() {
    if (Auth.isLoggedIn()) {
      window.location.href = '../profile/index.html';
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect === 'checkout') {
      this.redirectUrl = '../purchase/index.html';
    } else if (redirect === 'profile') {
      this.redirectUrl = '../profile/index.html';
    }
  },

  _getRedirect() {
    return this.redirectUrl || '../index.html';
  },

  switchTab(tab, btnElement) {
    this.currentTab = tab;
    
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (tab === 'login') {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    } else {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    }
  },

  handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (Auth.login(email, password)) {
      setTimeout(() => {
        window.location.href = this._getRedirect();
      }, 600);
    }
    return false;
  },

  handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;

    if (password !== confirm) {
      Toast.show('Password konfirmasi tidak cocok!', 'error');
      return false;
    }

    if (Auth.register(name, email, password)) {
      const user = Auth.getCurrentUser();
      if (user && phone) {
        Auth.updateProfile({ phone });
      }
      setTimeout(() => {
        window.location.href = this._getRedirect();
      }, 800);
    }
    return false;
  },

  socialLogin(provider) {
    Toast.show(`Login dengan ${provider} akan segera hadir!`, 'info');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  AuthPage.init();
});
