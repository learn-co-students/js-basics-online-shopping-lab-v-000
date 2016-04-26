'use strict';

var orderNumber = 1;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item) {
  var price = Math.random(100);
  var itemToPurchase = {};
  itemToPurchase[item] = price;
  total += price;
  cart.push(itemToPurchase);
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]) {
      console.log("In your cart you have: " + key + " $" + cart[i][key]);
    }
  }
}

function addCreditCard(card) {
  cardNumber = card;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item) {
  var itemPresent = false;
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]) {
      if (key == item) {
        total -= cart[i][item];
        itemPresent = true;
        cart.splice(i, 1);
      }
    }
  }
  if (itemPresent == false) {
    console.log("That item is not in your cart");
  }
}

function placeOrder() {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    orderNumber++;
    cart = [];
    total = 0;
  }
}


