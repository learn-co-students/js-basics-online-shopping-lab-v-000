'use strict';

var orderNumber = 1;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var item_object = {};
  item_object[item] = price;
  cart.push(item_object);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (cart.length !== 0) {
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        console.log("In your cart you have: " + key + " $" + cart[i][key]);
      }
    }
  }
  else {
    console.log("Your shopping cart is empty")
  }
}

function addCreditCard(number) {
  cardNumber = number;
  console.log("Your credit card number has been saved.")
  return cardNumber
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item in cart[i]) {
      total -= cart[i][item];
      cart.splice(i, 1);
      console.log(item + " has been removed from your cart");
    }
    else {
      console.log("That item is not in your cart");
    }
  }
}

function placeOrder() {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order");
  }
  else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    total = 0;
    cart = [];
    orderNumber ++;
  }
}
