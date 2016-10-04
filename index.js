"use strict";
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
  var price = Math.floor(Math.random()*(10));
  var hash = {};
  hash[item] = price;
  cart.push(hash);
  console.log(item + " has been added to your cart.")
  return cart;
}

function viewCart() {
  var clause = [];
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      clause.push(`${item} at $${cart[i][item]}`);
    }
  }
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var string = clause.join(", ");
    console.log("In your cart, you have " + string + ".");
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key === item) {
        cart.splice(i, 1);
        return cart;
      } else {
      }
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(card) {
  if (card == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
    cart = [];
  }
}
