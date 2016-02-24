'use strict';

var orderNumber = 0, total, cardNumber, cart = [];

function addToCart(item) {
  var price = (Math.random() * 100);
  total += price;
  var itemToAdd = {};
  itemToAdd[item] = price;
  cart.push(itemToAdd);
  console.log(item + ' has been added to your cart');
  return cart;
}

function viewCart() {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      console.log('In your cart you have: ' + key + ' $' + cart[i][key]);
    }
  }
}

function addCreditCard(card) {
  cardNumber = card;
  console.log('Your credit card number has been saved.');
  return cardNumber;
}

function removeFromCart(item) {
  var bool = false;
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (item === key) {
        var price = cart[i][item];
        total -= price;
        cart.splice(i, 1);
        bool = true;
      }
    }
    if (bool == false) {
      console.log('That item is not in your cart');
    }
  }
}

function placeOrder() {
  if (typeof(cardNumber) == "undefined") {
    console.log("We don't have a credit card on file for you to place your order");
  }
  else {
    orderNumber++;
    console.log('Your total cost is: $' + total + ' and will be charged to the credit card on file (' + cardNumber +'). Your order number is ' + orderNumber);
    total = 0;
    cart = []
  }
}
