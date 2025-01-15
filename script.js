const apiBase = 'http://localhost:3000';

// load products
async function loadProducts() {
    try {
        const response =await fetch('http://localhost:3000/api/products');
        const products = await response.json();

        const productList = document.getElementById('product-list');
        productList.innerHTML = products.map(product => 
            `
                <div>
                    <h3> ${product.name} </h3>
                    <p> Price: $${product.price} </p>
                    <button onclick="buyProduct(${product.id})">Buy</button>
                </div>
            `
        ).join('');
    }
    catch (error) {
        console.error('Error:', error);
    }
}

// loadProducts();

// buy a product
async function buyProduct(productId) {
    try {
        await fetch(`${apiBase}/api/buy/${productId}`, {method: 'POST'});
        // alert('Product added to cart!');
        loadProducts()
    } catch (error) {
        console.error('Error:', error);
        
    }
}

// load checkout items
async function loadCheck() {
    try {
        const response = await fetch(`${apiBase}/api/checkout`);
        const products = await response.json();

        const checkList = document.getElementById('checkout-list')
        checkList.innerHTML = products.map(product => 
            `
                <div>
                    <h3> ${product.name} </h3>
                    <p> Price: $${product.price} </p>
                    <p> Quantity: ${product.count} </p>
                </div>
            `
        ).join('');
    } catch (error) {
        console.error('Error:', error);   
    }
}

// loadCheck();

// Detect page and load data
if (window.location.pathname.includes('index.html')) {
    loadProducts();
  } else if (window.location.pathname.includes('checkout.html')) {
    loadCheck();
  }