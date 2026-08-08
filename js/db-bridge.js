/* ==========================================================================
   AURA LUXE - DATABASE BRIDGE & SQL INTEGRATION LAYER
   ==========================================================================
   
   SQL DATABASE SCHEMA REFERENCE FOR BACKEND MIGRATION:
   ----------------------------------------------------
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password_hash VARCHAR(255) NOT NULL,
       role VARCHAR(50) DEFAULT 'customer',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   CREATE TABLE products (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       price DECIMAL(10, 2) NOT NULL,
       discount INT DEFAULT 0,
       brand VARCHAR(100),
       category VARCHAR(100),
       description TEXT,
       rating DECIMAL(3,2) DEFAULT 0,
       reviews_count INT DEFAULT 0,
       stock INT DEFAULT 0,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   CREATE TABLE orders (
       id VARCHAR(50) PRIMARY KEY,
       user_id INT,
       total_amount DECIMAL(10,2) NOT NULL,
       status VARCHAR(50) DEFAULT 'Pending',
       shipping_address TEXT,
       payment_method VARCHAR(50),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (user_id) REFERENCES users(id)
   );

   CREATE TABLE order_items (
       id INT AUTO_INCREMENT PRIMARY KEY,
       order_id VARCHAR(50),
       product_id INT,
       quantity INT NOT NULL,
       price DECIMAL(10,2) NOT NULL,
       FOREIGN KEY (order_id) REFERENCES orders(id),
       FOREIGN KEY (product_id) REFERENCES products(id)
   );
   ========================================================================== */

const DBBridge = {
  // Simulates API delay to replicate network fetch
  async _simulateNetworkDelay(ms = 100) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  /**
   * Fetch all products or filter products
   * SQL Future Equivalent: `SELECT * FROM products WHERE ...`
   */
  async getProducts() {
    await this._simulateNetworkDelay(50);
    return PRODUCTS;
  },

  /**
   * Fetch single product by ID
   * SQL Future Equivalent: `SELECT * FROM products WHERE id = ?`
   */
  async getProductById(id) {
    await this._simulateNetworkDelay(30);
    return PRODUCTS.find(p => p.id === parseInt(id)) || null;
  },

  /**
   * Authenticate user credentials
   * SQL Future Equivalent: `SELECT * FROM users WHERE email = ? AND password_hash = ?`
   */
};
