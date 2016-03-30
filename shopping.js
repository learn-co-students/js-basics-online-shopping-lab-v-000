'use strict';

var orderNumber = 0;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item, price) {
  price = price || Math.floor(Math.random() * 100)
  var hash = {};
  hash[item] = price;
  cart.push(hash);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        console.log("In your cart you have: " + item + " $" + cart[i][item]);
      }
    }
  } else {
    console.log("Your shopping cart is empty");
  }
}

function addCreditCard(num) {
  cardNumber = num;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key === item) {
        total -= cart[i][key];
        cart.splice(i, 1);
      } else {
        console.log("That item is not in your cart");
      }
    }
  }
}

function placeOrder() {
  if (isNaN(cardNumber)) {
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file " 
      + "(" + cardNumber + ")" + ". Your order number is " + orderNumber);
    total = 0;
    orderNumber++;
  }
}