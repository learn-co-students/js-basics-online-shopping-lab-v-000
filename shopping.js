'use strict';
var orderNumber = 1;
var cardNumber;
var total = 0;
var cart = [];
var itemInCart = {};

function addToCart(item){
  var ran = Math.floor((Math.random() * 100) + 1);
  itemInCart[item] = ran;
  cart.push(itemInCart) 
  total += ran;
  console.log(item + " has been added to your cart")
  return cart;
}

function viewCart(){
  if(itemInCart.length == 0){
    console.log("Your cart is empty");
  } else {
    for (var i = 0; i < cart.length; i++){
      for (var key in cart[i]){
        if(key !== "pizza"){
        console.log("In your cart you have: " + key + " $" + cart[i][key] );
       }
      }
    }
  }
}

function addCreditCard(creditCardNumber){
  cardNumber = creditCardNumber;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item){
  var flag = false;

  for(var i = 0; i < cart.length; i++){
    for(var key in cart[i]){
      if(key === item){
        total -= cart[i][key];
        cart.splice(i,1);
        flag = true;
      }
    }
  }
  if(!flag){
    console.log("That item is not in your cart")
  }
}

function placeOrder(){
  if(cardNumber == undefined){
    console.log("We don't have a credit card on file for you to place your order")
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (0). Your order number is " + orderNumber);
    total = 0;
    cardNumber = 0;
    cart = [];
    orderNumber++;
  }
}