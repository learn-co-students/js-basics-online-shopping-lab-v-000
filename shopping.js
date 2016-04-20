'use strict';

var cart = [],
    total = 0,
    orderNumber,
    cardNumber;

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  var itemToAdd = {};
  itemToAdd[item] = price;
  cart.push(itemToAdd);
  total += price;
  console.log(item + ' has been added to your cart');
  return cart;
}

function viewCart(){
  if (cart.length > 0){
    for (var i = 0; i < cart.length; i++){
      for (var key in cart[i]){
        console.log('In your cart you have: ' + key + ' $' + cart[i][key]);
      }
    }
  } else {
    console.log('Your shopping cart is empty');
  }
}

function addCreditCard(creditCard){
  var cardNumber = creditCard;
  console.log('Your credit card number has been saved.');
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      if (key === item){
        total -= cart[i][key];
        cart.splice(i, 1);
      } else {
        console.log('That item is not in your cart');
      }
    }
  }
}

function placeOrder(){
  if (typeof cardNumber == 'undefined'){
    console.log('We don\'t have a credit card on file for you to place your order');
  } else {
    console.log('Your total cost is: $' + total + ' and will be charged to the credit card on file (' + cardNumber + '). Your order number is ' + orderNumber);
    orderNumber++;
    total = 0;
  }
}