'use strict';

var orderNumber;
var total;
var cardNumber;
var cart = [];

function addToCart(item){
  var amt = Math.floor((Math.random() * 100) + 1);
  var add = {};
  add[item] = amt;
  total = total + amt;
  cart.push(add);
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart(){
  if (cart.length > 0){
    for (var i = 0; i < cart.length; i++){
      var key = Object.keys(cart[i])[0];
      console.log("In your cart you have: " + key + " $" + cart[i][key]);
    }
  } else {
    console.log("Your shopping cart is empty");
  }
}

function addCreditCard(cardNum){
  cardNumber = cardNum;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item){
  var found;
  var index;
  for (var i = 0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0];
    if (key == item){
      found = key;
      index = i;
    }
  }
  if (found != undefined){
    total = total - cart[index][found];
    cart.splice(index, 1);
  } else {
    console.log("That item is not in your cart");
  }
}

function placeOrder(){
  if (!!cardNumber){
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    total = 0;
    cart = [];
    orderNumber++;
  } else{
    console.log("We don't have a credit card on file for you to place your order");
  }
}






