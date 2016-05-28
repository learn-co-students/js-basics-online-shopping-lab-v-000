var cart = []

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100));
  item_object = {item: price};
  cart.push(item_object);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("You shopping cart is empty.")
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        console.log("In your cart you have: " + key + "at $" + cart[i][key]);
      }
    }
  }
}

function removeFromCart(item) {

}

function placeOrder(number) {

}