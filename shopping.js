'use strict';

var orderNumber
var total 
var cardNumber 
var cart = []

function addToCart (item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var newItem = {};
  newItem[item] = price; 
  cart.push(newItem);
  console.log(item + " has been added to your cart");
  total += price;
  return cart;
}

function viewCart () {
  if(cart.length === 0){
    console.log("Your shopping cart is empty");
  }else{
    for (var i = 0; i < cart.length; i++){
      for(var key in cart[i]){
        console.log("In your cart you have: " + key + " $" + cart[i][key]);
      }   
    }    
  }
}

function addCreditCard (number) {
  cardNumber = number
  console.log("Your credit card number has been saved.")
  return cardNumber
}

function removeFromCart (item) {
  for(var i = 0; i < cart.length; i++){
    for(var key in cart[i]){
      if (key === item){
        total -= cart[i][key];
        cart.splice(i, 1)
      }else{
        console.log("That item is not in your cart")
      }
    }
  } 
}

function placeOrder () {
  if (cardNumber > 0){
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file ("
                + cardNumber + "). Your order number is " + orderNumber);
    orderNumber += 1
    total = 0;
    cart = [];
  }else{
    console.log("We don't have a credit card on file for you to place your order");
  }
}
