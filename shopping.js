'use strict';

var orderNumber = 0;
var total = 0;
var cardNumber = 0;
var cart = [];

function addToCart(item){
  var object = {};
  var num = (Math.random()*100).toFixed(2)
  var price = parseInt(num)
  object[item] = price;
  cart.push(object);
  total = total + price;
  console.log(item + " has been added to your cart");
}

function viewCart(){
  if (Object.keys(cart).length == 0){
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

function addCreditCard(custNum){
  cardNumber = custNum;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    if (item in cart[i]){
      total -= cart[i][item];
      cart.splice(i, 1);
    }
    else {
      console.log("That item is not in your cart");
    }
  }
}

function placeOrder(){
  if (typeof cardNumber !== 'undefined'){
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    total = 0;
    cart = [];
    orderNumber += 1;
  }
  else {
    console.log("We don't have a credit card on file for you to place your order");
  }
}
