var cart = [];

function getCart() {
  return cart;
}

function setCart(array) {
  cart = array;
}

function addToCart(item) {
  var lineItem = {};
  price = Math.floor(Math.random() * 100);
  lineItem[item] = price;
  cart.push(lineitem);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (Object.keys(cart).length > 0) {
    cart.forEach(function(c)) {
      for (var item in c) {
      console.log("In your cart you have: " + item + " $" + c[item]);
    });
  } else {
    console.log("Your shopping cart is empty");
  }
}

function removeFromCart(item) {
  cart.forEach(function(c)) {
    for (var name in c) {
      if (c.hasOwnProperty(name)) {
        delete c[item];
      } else {
        console.log("That item is not in your cart");
      }
    }
  }
  return cart;
}

function placeOrder(creditCardNumber) {
  if (creditCardNumber === null) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is ${total()}, which will be charged to ${creditCardNumber}.");
    cart = [];
  }
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
