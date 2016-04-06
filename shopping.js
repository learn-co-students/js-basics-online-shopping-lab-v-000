'use strict';

var orderNumber;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item){
  var newItem = {};
  newItem[item] = Math.floor(Math.random() * 100);
  cart.push(newItem);
  total = total + newItem[item];
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart(){
  cart.forEach(function(item) {
    for (var key in item) {
      console.log('In your cart you have: ' + key + ' $' + item[key]);
    }
  });
}

function addCreditCard(num){
  console.log("Your credit card number has been saved.")
  return cardNumber = num
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
       if (key == item) {
        var cost = cart[i][item];
        cart.splice(i, 1);
        console.log(item + " has been removed from your cart")
        total -= cost;
       }
       else {
         console.log("That item is not in your cart");
       }
    }
  }
}

function placeOrder(){
  if (cardNumber) {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file " + "(" + cardNumber + ")." + " Your order number is " + orderNumber);
    orderNumber++;
    total = 0
  }
  else {
    console.log("We don't have a credit card on file for you to place your order");
  }
}