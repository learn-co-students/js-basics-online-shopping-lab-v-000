'use strict';

var orderNumber = 1;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var itemToBuy = {};
  itemToBuy[item] = price;
  cart.push(itemToBuy);
  total += price;
  console.log(item + ' has been added to your cart');
}

function viewCart() {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      console.log("In your cart you have: " + key + " $" + cart[i][key]);
    }
  }
}

function addCreditCard(ccNumber) {
  cardNumber = ccNumber;
  console.log('Your credit card number has been saved.');
  return cardNumber;
}

function removeFromCart(itemToRemove) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key == itemToRemove) {
        total -= cart[i][key]
        cart.splice(i, 1);
      } else {
        console.log('That item is not in your cart');
      }
    }
  }
}

function placeOrder() {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    cart = [];
    total = 0;
    orderNumber ++;
  }
}
