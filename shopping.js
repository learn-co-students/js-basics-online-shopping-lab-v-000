'use strict';

var cart = [];

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t;
}


function getCart() {
  return cart;
}


function setCart(array) {
  var cart = array;
}


function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var key = item;
  var obj = {};
  obj[key] = price;
  cart.push(obj);
  console.log(item + " has been added to your cart.");
  console.log(cart);
  return cart;
}

function viewCart() {
  var a = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (let item in cart) {
      a.push(item + " at $" + cart[item]);
    }
    console.log("In your cart you have " + a.join() + ".");
  }
  return getCart();
}

function removeFromCart(item) {

  for (var cartItem in cart) {
    if (cartItem.hasOwnProperty(item)) {
      delete cart[item];
    }
    else {
      console.log("That item is not in your cart.");
    }
  }
  return cart;
}

function placeOrder(cardNumber = null) {
  var a = [];
  if (cardNumber === null ) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is ${total()}, which will be charged to ${cardNumber}.");
    cart = [];
  }

}
addToCart("socks");
addToCart("puppy");
addToCart("iPhone");
console.log(total());
