'use strict';

var orderNumber, total, cardNumber;
var cart = [];

function addToCart(item){
  var price = Math.round(Math.random(0,100) * 100);
  var object = {};
  object[item] = price;
  cart.push(object);
  total = total + price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart(){
  for(var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      console.log("In your cart you have: " + item + " $" + cart[i][item]);
    }
  }
}

function addCreditCard(creditCard){
  cardNumber = creditCard;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      if (key == item){
        total = total - cart[i][key];
        cart.splice(i, 1);
      } else {
        console.log("That item is not in your cart");
      }
    }
  }
}

function placeOrder(){
  if (cardNumber > 0){
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    total = 0;
    cart = [];
    orderNumber++;
  } else {
    console.log("We don't have a credit card on file for you to place your order");
  }
}