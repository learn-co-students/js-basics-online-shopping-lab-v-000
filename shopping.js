'use strict';

var orderNumber = 0;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item) {
  var price = Math.floor(Math.random(0,100));
  var obj = {};
  obj[item] = price;
  cart.push(obj);
  total = price;

  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (Object.keys(cart).length) {
    cart.forEach(function(cart) {
      for(var key in cart) {
        console.log("In your cart you have: " + key + " $" + cart[key]);
      }
    })
  } else {
      console.log("Your shopping cart is empty");
  }
}

function addCreditCard(number) {
  cardNumber = number;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item) {
  cart.forEach(function(cartItem) {
    if(cartItem[item]) {
      total -= cartItem[item];
      cart.splice(cartItem);
    } else {
      console.log("That item is not in your cart");
    }
  })
}

function placeOrder() {
  if(cardNumber) {
    console.log("Your total cost is: $"
    + total + " and will be charged to the credit card on file ("
    + cardNumber + "). Your order number is " + orderNumber);
    total = 0;
    orderNumber++;
  } else {
    console.log("We don't have a credit card on file for you to place your order")
  }
}
