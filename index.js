var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100));
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var l = cart.length;
  if (l === 0) {
    return console.log("Your shopping cart is empty.");
  }

  var itemsWithPrices = [];

  for (var i = 0; i < l; i++) {
    var obj = cart[i];
    for (var item in obj) {
      itemsWithPrices.push(`${item} at $${obj[item]}`)
    }
  }
  return console.log(`In your cart, you have ${itemsWithPrices.join(", ")}.`)
}

function removeFromCart(item) {
  var l = cart.length;
  var itemNotPresent = true;
  for (var i = 0; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      itemNotPresent = false;
    }
  }

  if (itemNotPresent === true) {
    return console.log("That item is not in your cart.");
  } else {
    return cart;
  }
}

function placeOrder(cc) {
  if (!cc) {
    return console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
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

function getCart() {
  return cart;
}
