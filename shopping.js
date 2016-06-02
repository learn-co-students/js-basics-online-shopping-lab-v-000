var cart = {}

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart () {
  returns cart;
}

function setCart(array) {
  var array = cart;
}

function addToCart(item, cart) {
  price = Math.floor(Math.random() * 101);
  cart[item] = price;
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart() {
  if (cart.length = 0) {return "Your shopping cart is empty."}
  else {for (let itemPrice in cart) console.log("In your cart you have ${cart} ${cart[itemPrice]}")}
}

function removeFromCart (item) {
  if (cart.hasOwnProperty(item)) {delete cart[item]; return cart;}
  else {console.log("That item is not in your cart";)}
}

function placeOrder (cardNumber = "We don't have a credit card on file for you to place your order.") {
  console.log("Your total cost is ${total()}, which will be charged to ${cardNumber}.");
  cart = {};
}
