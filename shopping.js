var cart = [];

function getCart() {
  return cart;
}

function setCart(array) {
  cart = array;
  return cart;
}

function addToCart(item, cart) {
  var obj = {};
  obj[item] = Math.floor(100 *Math.random());
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart() {
  if (cart.length = 0) { return 'Your shopping cart is empty.'}
  else {for (let itemPrice in cart) console.log("In your cart you have ${cart} ${cart[itemPrice]}")}
}

function removeFromCart(item) {
  if (cart.hasOwnProperty(item)) { delete cart[item]; return cart}
  else {console.log("That item is not in your cart";)}
}

function placeOrder(cardNumber) {
  console.log(`Your total cost is ${total()}, which will be charged to ${cardNumber}.`)
  cart = [];
}

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
