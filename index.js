var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 cart[item] = Math.floor(Math.random() * 10)
 // cart.push( {item:(Math.floor(Math.random())) } );
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  // write your code here
  var cartArray = []
  if (getCart().length > 0) {
    for (var cartItem in cart) {
      cartArray.push(`${cartItem} at ${cart[cartItem]}`)
    }
    console.log("In your cart, you have " + cartArray.join(', '))
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

