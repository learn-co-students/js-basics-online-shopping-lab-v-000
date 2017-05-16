var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 0);
  cart.push({item: price})
  console.log(item + ' has been added to your cart.')
  return cart
}

function viewCart() {
  if (cart.length == 0){
    return "Your shopping cart is empty."
  } else {
    for (var i=0; i < cart.length; i++) {
      "In your cart you have " + Object.keys(cart[i]) + " at " + "$"
    }
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
