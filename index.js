var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  getCart().push({[item]: Math.random()})
  console.log(`${item} has been added to your cart.`)
  return getCart()
}

function viewCart() {
  var cart_list = new Array
  for (var item = 0; item < getCart().length; item++) {
    for (var name in getCart()[item]){

    cart_list.push(` ${name} at $${getCart()[item][name]}`)
    }
  }
  if (cart_list.length > 0) {
    console.log(`In your cart, you have${cart_list.join(",")}.`)
  }
  else {
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
