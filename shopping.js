'use strict';

var orderNumber = 1;
var total = 0;
var cardNumber;
var cart = [];

function addToCart(item){
  var price = Math.random(100);
  var addedItem = {};
  addedItem[item] = price;
  total += price;
  cart.push(addedItem);
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart(){
  if (cart.length == 0) {
    return "Your shopping cart is empty";
  }
  else {
    for (var i = 0; i < cart.length; i++){
      for (var key in cart[i]){
        console.log("In your cart you have: " + key + " $" + cart[i][key]);
      }
    }
  }
}

function addCreditCard(number){
  cardNumber = number;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item){
  var itemInCart = false;
  for (var i = 0; i < cart.length; i ++){
    for (var key in cart[i]){
      if (key == item){
        itemInCart = true;
        total -= cart[i][item];
        cart.splice(i, 1);
      }
    }
  }
  if (itemInCart == false){
    console.log("That item is not in your cart");
  }
}

function placeOrder(){
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    orderNumber += 1;
    cart = [];
    total = 0;
  }
}