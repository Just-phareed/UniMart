const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {

let value = searchInput.value.toLowerCase();

products.forEach(product => {

let name = product.getAttribute("data-name").toLowerCase();

if (name.includes(value)) {
product.style.display = "block";
} else {
product.style.display = "none";
}

});

});

// Button click effect
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
btn.addEventListener("click", () => {
alert("Chat feature coming soon 🔥");
});
});