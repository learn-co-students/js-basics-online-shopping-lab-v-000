'use strict';

var orderNumber = 0;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item) {
  var itemObject = {};
  var price = Math.floor(Math.random()*101);
  itemObject[item] = price;
  cart.push(itemObject);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty");
  } else {
    var nameOfItem = '';
    cart.forEach(function(itemInCart) {
      nameOfItem = Object.keys(itemInCart)[0];
      console.log("In your cart you have: " + nameOfItem + " $" + itemInCart[nameOfItem]);
    });
  }
}

function addCreditCard(card) {
  cardNumber = card;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item) {
  var isInCart = false;
  cart.forEach(function(itemObj) {
    if (itemObj[item]) { isInCart = true;}
  });
  if (!isInCart) {
    console.log("That item is not in your cart");
  } else {
    var locationInCart;
    cart.forEach(function(itemObj, index) {
      if (itemObj[item]) {
        locationInCart = index;
        total -= itemObj[item];
      }
    });
    cart.splice(locationInCart,1);

  }
}

function placeOrder() {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    total = 0;
    cart.length = 0;
    orderNumber++;
  }
}















