'use strict';

var cardNumber,
    orderNumber = 1,
    total = 0,
    cart = [];

function addToCart(item) {
  var itemHash = {},
      price = Math.floor(Math.random() * 100);
  itemHash[item] = price;
  cart.push(itemHash);
  total += price;
  console.log(item + " has been added to your cart");
}

function viewCart() {
  var i,
      k;
  if (cart.length === 0) {
    console.log("Your shopping cart is empty");
  } else {
    for (i = 0; i < cart.length; i++) {
      for (var k in cart[i]) {
        console.log("In your cart you have: " + k + " $" + cart[i][k]);
      }
    }
  }
}

function addCreditCard(cc) {
  cardNumber = cc;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item) {
  var i,
      k,
      price;
  for (i = 0; i < cart.length; i++) {
    for (k in cart[i]) {
      if (k === item) {
        price = cart[i][k];
        total -= price;
        cart.splice(i, 1);
        console.log(item + " has been removed from your cart");
      } else {
        console.log("That item is not in your cart");
      }
    }
  }
}

function placeOrder() {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    orderNumber ++;
    cart = [];
    total = 0;
  }
}
