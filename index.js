var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100)
  // key names are assigned in this statement and not declared variables
  var newItem = { itemName: itemName,  itemPrice: itemPrice }
  getCart().push(newItem)
  return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  var cartItems = new Array()
  for (var item in cart ) {
    cartItems.push(`${cart[item].itemName} at $${cart[item].itemPrice}`)
  }
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  if (cart.length == 1) {
    return `In your cart, you have ${cartItems}.`
  }
  if (cart.length > 1) {
    var lastItem = cartItems.splice(cart.length - 1, 1)
    var midItems = cartItems.join(', ')
    return `In your cart, you have ${midItems}, and ${lastItem}.`
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
