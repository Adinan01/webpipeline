// Shopping cart count

let cartCount = 0;

function addToCart(productName, price) {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert(
        productName +
        " added to your cart!\nPrice: ₹" +
        price
    );
}


// Scroll to products

function scrollToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}
