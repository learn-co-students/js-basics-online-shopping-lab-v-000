'use strict';

var orderNumber = 0;
var total = 0;
var cardNumber;
var cart = [];


function addToCart(item) {
  var newObject = {};
  var price = Math.floor(Math.random() * 101);
  newObject[item] = price;
  cart.push(newObject);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}


function viewCart(){
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      console.log("In your cart you have: " + key + " $" + cart[i][key]);
    }
  }
}


function addCreditCard(creditCard) {
  cardNumber = creditCard;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]) {
      // debugger;
      if (key == item) {
        total -= cart[i][key];
        cart.splice(i, 1);
      } else {
        console.log("That item is not in your cart");
      }
    }
  }
}

function tester() {
  console.log();
}


function placeOrder() {
  //tester();
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    orderNumber++;
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + (orderNumber - 1));
    total = 0;
    cart = [];
  }
}

// debugger;
