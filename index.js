var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (true) {
    var view = [];
    cart.forEach( function (k, v) {
      view.push(k + " at $" + v);
    });
    console.log("In your cart, you have " + view.join(", ") + ".");
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  if (cart[item]) {
    delete cart[item];
    setCart(cart);
  } else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cc) {

}
