'use strict';

var orderNumber;
var total = 0;
var cardNumber;
var cart = [];


function addToCart(item) {
  var price = getRandomArbitrary(0, 100);
  var itemObject = {};
  itemObject[item] = price;
  cart.push(itemObject);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function viewCart() {
  if (Object.keys(cart).length > 0) {
    cart.forEach(function(item) {
      for (var key in item) {
        console.log("In your cart you have: " + key + " $" + item[key]);
      };
    })
  } else {
    console.log("Your shopping cart is empty");
  }
}

function addCreditCard(cNumber) {
  cardNumber = cNumber;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(itemName) {
  var items = [];
  cart.forEach(function(item) {
    for (var name in item) {
      items.push(name);
      if (name === itemName) {
        total -= item[name]
        cart.splice(0, 1);
      };
    };
  });
  if (include(items, itemName) == false) {
    console.log("That item is not in your cart");
  };
}

function include(arr, obj) {
  return (arr.indexOf(obj) != -1);
}

function placeOrder() {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" +
      cardNumber + "). Your order number is " + orderNumber);
  }
  orderNumber++;
  total = 0;
  cart = [];
}
