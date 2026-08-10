const DBBridge = {
  async _simulateNetworkDelay(ms = 100) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  async getProducts() {
    await this._simulateNetworkDelay(50);
    return PRODUCTS;
  },

  async getProductById(id) {
    await this._simulateNetworkDelay(30);
    return PRODUCTS.find(p => p.id === parseInt(id)) || null;
  },
};
