# cart
simple shoping cart with a express and postgres as backend

# **Shopping Cart App**

A simple shopping cart application built using **Express**, **PostgreSQL**, and a lightweight **HTML + JavaScript frontend**. The app allows users to view products, add items to their cart, and check out.

---

## **Features**
- View a list of products with their prices.
- Increment product quantities by clicking the "Buy" button.
- View selected items in a checkout page.
- Backend built with Express.js and PostgreSQL.
- Frontend built with plain HTML and JavaScript.

---

## **Getting Started**

### **1. Prerequisites**
Ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **PostgreSQL** (v12 or higher)

---

### **2. Project Structure**
```plaintext
shopping-cart/
├── backend/
│   ├── server.js        # Backend server code
│   ├── db.js            # PostgreSQL connection setup (if split)
│   ├── schema.sql       # Database schema
├── frontend/
│   ├── index.html       # Homepage to view and buy products
│   ├── checkout.html    # Checkout page
│   ├── script.js        # Frontend JavaScript
├── package.json         # Node.js dependencies
├── README.md            # This file
```

---

### **3. Setting Up the Database**
1. Start PostgreSQL and create a database:
   ```bash
   psql -U postgres
   CREATE DATABASE shopping_cart;
   ```

2. Navigate to the `backend/` folder and execute the schema file:
   ```bash
   psql -U postgres -d shopping_cart -f schema.sql
   ```

3. Verify the tables and initial data:
   ```sql
   SELECT * FROM products;
   ```

---

### **4. Installing Dependencies**
1. Navigate to the `backend/` folder:
   ```bash
   cd backend
   ```

2. Install the required packages:
   ```bash
   npm install express pg cors
   ```

---

### **5. Running the Server**
Start the backend server:
```bash
node server.js
```
The server will start at [http://localhost:3000](http://localhost:3000).

---

### **6. Viewing the Frontend**
1. Open the `frontend/index.html` file in your browser.
2. Use the "Buy" buttons to add products to the cart.
3. Click "Go to Checkout" to view selected items.

---

## **API Endpoints**
### **Products**
- `GET /api/products`:
  - Fetch all products from the database.

- `POST /api/buy/:id`:
  - Increment the `count` for a product with the given ID.

### **Checkout**
- `GET /api/checkout`:
  - Fetch all products with `count > 0`.

---

## **Future Enhancements**
- Add user authentication and a `users` table.
- Implement a proper UI framework (e.g., React or Vue).
- Add a "Clear Cart" functionality.

---

## **License**
This project is licensed under the MIT License.

