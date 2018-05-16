"use strict";

var cart = [];

function getCart() {
  return cart;
}

function setCart(cartArray) {
  cart = cartArray;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100);

  cart.push({[item]: price});

  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var items = [];

  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    for (var i = 0; i < cart.length; i++) {
      let item  = Object.keys(cart[i]);
      let price = cart[i][item];
      
      items.push(item+" at $"+price);
    }
  }
var lastItem = items.pop();

console.log("In your cart, you have "+items.join(', ')+".");
 return "In your cart, you have "+items.join(', and ') + lastItem".";
}

function removeFromCart(item) {
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)){
        delete cart[i];
        cart = cart.slice(0, i).concat(cart.slice(i + 1))
      }
    }
  } else {
      return "That item is not in your cart.";
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  } else {
    let confirmation = "Your total cost is $"+total()+", which will be charged to the card "+cardNumber+".";
    setCart([]);
    return confirmation;
  }
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

