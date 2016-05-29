'use strict';

var orderNumber = 0
var total = 0
var cardNumber = null
var cart = []

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var item_object = {};
  item_object[item] = price;
  cart.push(item_object);
  total += price;
  console.log(item + " has been added to your cart")
  return cart;
}

function getCart(){
  return cart;
}

function setCart(cartArray){
  cart = cartArray;
}

function viewCart(){
  if (cart.length == 0){
    console.log("Your shopping cart is empty");
  }
  else {
    for (var i = 0; i < cart.length; i++){ 
      for (var key in cart[i]) {
        console.log("In your cart you have: " + key + " $" + cart[i][key]);
      }
    }
  }
}

function addCreditCard(number){
  cardNumber = number;
  console.log("Your credit card number has been saved.")
  return cardNumber;
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){ 
      for (var key in cart[i]) {
         if (key === item){
            var price = cart[i][item];
            cart.splice(i, 1);
            total -= price;
          }
          else {
            console.log("That item is not in your cart")
            }
        } 
      }
}

function placeOrder(number){
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order");
  }
  else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    orderNumber ++;
    cart = [];
    total = 0;
  }
}












