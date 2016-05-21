'use strict';
var cart = [];

function setCart(cartArray){
  cart = cartArray;
  return;
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

function getCart(){
  return cart;
}



function addToCart(item){
  var price = Math.floor((Math.random() * 100));
  cart.push({ [item]: price });
    total += price

  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (Object.keys(cart).length > 0) {
    cart.forEach(function(c) {
      for (var item in c)
        console.log("In your cart you have: " + item + " $" + c[item]);
      })
    }
  else
    console.log("Your shopping cart is empty");
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