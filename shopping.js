'use strict';
var orderNumber, total, cardNumber, cart;

function addToCart(product){
  var price = Math.floor((Math.random()*100));
  var item = {};
  item[product] = price;
  total += price;
  cart.push(item);
  console.log(product + " has been added to your cart");
};

function removeFromCart(product){
};

function viewCart(){
  cart.forEach(function(item){
    for (var key in item){
      console.log("In your cart you have: " + key + " $" + item[key]);
    }
  });
};

function addCreditCard(ccn){
  cardNumber = ccn;
  console.log("Your credit card number has been saved.");
  return cardNumber;
};

function removeFromCart(product){
  var keys;
  cart.forEach(function(cartItem){
    keys = Object.keys(cartItem);
    if(keys.indexOf(product) !== -1){
      total -= cartItem[product];
      cart.splice(0,1);
    } else {
      console.log("That item is not in your cart");
    }
  });
};

function placeOrder(){
  if (cardNumber){
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
  } else {
    console.log("We don't have a credit card on file for you to place your order");
  }
  cart = [];
  total = 0;
  orderNumber++;
  return;
};
