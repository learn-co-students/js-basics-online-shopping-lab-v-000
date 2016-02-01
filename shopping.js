'use strict';

var orderNumber = 0;
var total = 0;
var cardNumber = undefined;
var cart = new Array();

function addToCart(item) {
  var item_price = {}
  var price = Math.floor(Math.random()*100);

  item_price[item] = price
  cart.push( item_price );
  total += price;
  console.log( item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if(Object.keys(cart).length > 0) {
    cart.forEach(function(item) {
      var name = Object.keys(item)[0];
      var price = item[name];
      console.log("In your cart you have: " + name + " $" + price)
    });
  }
  else {
    console.log("Your shopping cart is empty")
  }
}

function addCreditCard(number) {
  cardNumber = number;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (name == key) {
        total -= cart[i][name];
        cart.splice(i,1);
      }
      else {
        console.log("That item is not in your cart")
      }
    }
  }
  return cart;
}

function placeOrder() {
    debugger;
  if( cardNumber != undefined) {
    console.log(
      "Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + (orderNumber - 1))
  }
  else {
    console.log("We don't have a credit card on file for you to place your order")
  }
}


