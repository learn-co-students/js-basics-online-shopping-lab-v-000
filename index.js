var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var entry = {};
  var price = Math.random() * 100;
  price = Math.floor(price);
  entry[item] = price;
  cart.push(entry);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function cartString() {
  var ans = [];
  for (var i in cart) {
    var name = Object.keys(cart[i])[0];
    ans.push(`$${name} at $${cart[i][name]}`);
  }
  return ans.join(', ') + '.';
}

function viewCart() {
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.');
  } else {
    console.log("In your cart, you have " + cartString())
  }
}

function total() {
  var ans = 0;
  for (var i in cart) {
    ans += cart[i][Object.keys(cart[i])[0]]
  }
  return ans; 
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return;
    }
  }
  console.log("That item is not in your cart.");
}


function placeOrder(cc) {
  if (!cc) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${cc}.`);
    cart = [];
  }
}