'use strict';

var orderNumber = 0;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item) {
    var price = Math.random(0, 100);
    total += price;
    var cartItem = {};
    cartItem[item] = price;
    cart.push(cartItem);
    console.log(item + " has been added to your cart");
    return cart;
}

function viewCart() {
  if (cart.length <= 0) {
    console.log("Your shopping cart is empty");
  } else {
    for (var i=0; i <= cart.length; i++) {
      for (var item in cart[i])
      console.log("In your cart you have: " + item + " $" + cart[i][item]);
    }
  }
}

function addCreditCard(num) {
  cardNumber = num;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item) {
    for (var i=0; i <= cart.length; i++) {
      for (var key in cart[i]) {
        if (key === item) {
            total -= cart[i][item];
            cart.splice(i, 1);
            return cart;
        } else {
            console.log("That item is not in your cart");
        }
      }
    }
}

function placeOrder() {
    if (cardNumber === undefined) {
        console.log("We don't have a credit card on file for you to place your order");
    } else {
        console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber +"). Your order number is " + orderNumber);
        orderNumber++;
        total = 0;
        cart = [];
    }
}
