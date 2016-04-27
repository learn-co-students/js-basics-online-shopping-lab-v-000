'use strict';

var orderNumber;
var total;
var cardNumber;
var cart = [];

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  var itemHash = {};
  itemHash[item] = price;
  cart.push(itemHash);
  total = total + price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
      console.log("Your shopping cart is empty");
    }
  else {
    cart.forEach(function(itemPair) {
      for (var item in itemPair) {
        console.log("In your cart you have: " + item + " $" + itemPair[item]);
      }
    });
  }
}

function addCreditCard(creditCardNumber) {
  cardNumber = creditCardNumber;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}


function removeFromCart(item) {
  function findItem(element) {
    return Object.keys(element).toString() === item;
  }

  var foundItemCost;
  var foundItemIndex;
  cart.forEach(function(element, index) {
    if (findItem(element)) {
      foundItemCost = element[item];
      foundItemIndex = index;
    }
  });

  if (foundItemIndex === undefined) {
    console.log("That item is not in your cart");
  }
  else {
    cart.splice(foundItemIndex, 1);
    total = total - foundItemCost;
  }
}


function placeOrder() {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order");
  }
  else {
    console.log("Your total cost is: $" + total +" and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber)
    orderNumber++
    total = 0
  }
}


