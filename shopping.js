'use strict';

var orderNumber = 1;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item) {
  var price = Math.random(100);
  var newItem = {};
  newItem[item] = price;
  total =+ price;
  cart.push(newItem);
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty";
  }
  else {
    for (var x = 0; x < cart.length; x++) {
      for (var key in cart[x]) {
        console.log("In your cart you have: " + key + " $" + cart[x][key]);
      } 
    }
  }
}

function addCreditCard(num) {
  cardNumber = num;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item) {
  for (var x=0; x < cart.length; x++){
    for (var key in cart[x]) {
      if (key == item){
        var price = cart[x][item];
        cart.splice(x, 1);
        console.log(item + " has been removed from your cart");
        total -= price;
      }
      else {
        console.log("That item is not in your cart");
      }
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
    orderNumber += 1;
  }
}