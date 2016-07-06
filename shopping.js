'use strict';

var cart = [];

function getCart() {
  return cart;
}

function setCart(arr) {
  cart = arr;
  return cart;
}

function addToCart(item) {
  var lineItem = {};
  var price = Math.floor(Math.random([0,1])*100);
  lineItem[item] = price ;

  cart.push(lineItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function removeFromCart(itemName) {
  var find = cart.find((hash) => hash.hasOwnProperty(itemName));
  if(typeof(find) == 'undefined') {
    console.log("That item is not in your cart.")
  } else {
    cart = cart.filter((itemHash) => !itemHash.hasOwnProperty(itemName));
  }
}

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else {
    var lineItems = [];

    for (var i=0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0];
      var price = cart[i][item];

      lineItems.push(`${item} at $${price}`);
    }

    console.log(`In your cart, you have ${lineItems.join(", ")}.`)
  }
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) == 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
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
