'use strict';

var orderNumber = 1;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item) {
  var lineitem = {}
  var price = Math.floor(Math.random() * 100);
  lineitem[item] = price;
  cart.push(lineitem);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}


function viewCart() {
  if (Object.keys(cart).length > 0) {
    cart.forEach(function(c) {
      for (var name in c)
        console.log("In your cart you have: " + name + " $" + c[name]);
      })
    }
  else
    console.log("Your shopping cart is empty");
  }

function addCreditCard(number) {
  cardNumber = number;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}



function removeFromCart(item) {
  cart.forEach(function(cartitem, index) {
    if (item in cartitem) {
      total -= cartitem[item];
      cart.splice(index, 2);
    }
    else {
      console.log("That item is not in your cart");
    }
  });
}
