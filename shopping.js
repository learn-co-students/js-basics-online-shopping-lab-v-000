'use strict';
var orderNumber = 1;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item) {
  var new_item = {}
  var new_price = Math.floor( Math.random() * 100 );
  new_item[item] = new_price
  cart.push(new_item);
  console.log(item + " has been added to your cart");
  total += new_price;
}

function viewCart() {
  if (Object.keys(cart).length > 0) {
    cart.forEach(function(item) {
      for (var name in item) {
        console.log("In your cart you have: " + name + " $" + item[name]);
      }
    });
  }
  else {
    console.log("Your shopping cart is empty");
  }
}

function addCreditCard(number) {
  cardNumber = number;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(cart_item) {
  var found = false;
  var priceToRemove = 0;
  cart.forEach(function(item, index) {
    for ( var name in item ) {
      if ( name === cart_item ) {
        priceToRemove = item[name];
        total -= priceToRemove;
        cart.splice(index, 1);
        found = true;
      }
    }
  });
  if (!found) {
    console.log("That item is not in your cart");
  }
}

function placeOrder() {
  if (cardNumber) {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    total = 0;
    cart = [];
    orderNumber ++;
  } else {
    console.log("We don't have a credit card on file for you to place your order");
  }
}

