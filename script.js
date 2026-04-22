const products = [
  { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: 20000, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 2000, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Shoes", price: 3000, image: "https://via.placeholder.com/150" }
];

let cart = 0;

// Display Products
function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
    `;
  });
}

// Add to Cart
function addToCart() {
  cart++;
  document.getElementById("cart-count").innerText = cart;
}

// Search Function
function searchProduct() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
}

// Initial Load
displayProducts(products);
