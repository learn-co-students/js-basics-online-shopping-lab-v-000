'use strict';

var orderNumber;
var total = 0;
var cardNumber;
var cart = [];

function addToCart (item) {
  var price = Math.floor(Math.random() * 100);


  cart.push( { [item]: price } );

  total += price;
  console.log(item + " has been added to your cart");

  return item;
}

function viewCart () {
  if (cart.length === 0) {
    console.log("your cart is empty")
  }
  else {

    // For each item hash inside the cart array, get the item and the price and print it out
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]);
      var price = cart[i][item];

      console.log("In your cart you have: " + item + " $" + price);
    }
  }
}

function addCreditCard (creditCardNumber) {
  cardNumber = creditCardNumber;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart (item) {
  cart.forEach(function (lineItem, index){
    // If the line item hash has the item as a key, it will return the price which is a truthy. Remove that from the cart
    if (lineItem[item]) {
      total -= lineItem[item];
      cart.splice(index, 1);
    } 
    // Else alert the user that the item is not in their cart
    else {
      console.log("That item is not in your cart");
    }

  });

  return cart;
}

function placeOrder () {
  if (isNaN(cardNumber) === true) {
    console.log("We don't have a credit card on file for you to place your order");
  }
  else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber );
    cart = [];
    orderNumber++;
    total = 0;
  }
}







