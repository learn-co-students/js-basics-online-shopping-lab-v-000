'use strict';

var orderNumber;
var total;
var cardNumber;
var cart = [];

function addToCart(item){
  var object = {};
  object[item] = Math.floor(Math.random() * 100);
  cart.push(object);
  console.log(item + ' has been added to your cart');
  total += object[item];
  return cart;
}

function viewCart(){
  if (cart.length == 0){
    console.log("Your shopping cart is empty")
  }
  else{
    cart.forEach(function(item){
      for(var key in item){
        console.log('In your cart you have: ' + key + ' $'+ item[key])
      }
    });
  }
}

function addCreditCard(creditCardNum){
  cardNumber = creditCardNum;
  console.log("Your credit card number has been saved.")
  return cardNumber;
}

function removeFromCart(itemToRemove){
  cart.forEach(function(cartItem, index){
    for(var key in cartItem){
      if (itemToRemove == key){
        total -= cartItem[key];
        cart.splice(index, 1);
      }
      else {
        console.log("That item is not in your cart");
      }
    }
  });
}

function placeOrder(){
  if (cardNumber == undefined){
    console.log("We don't have a credit card on file for you to place your order");
  }
  else {
    orderNumber += 1;
    console.log("Your total cost is: $" + total + ' and will be charged to the credit card on file (' + cardNumber + '). Your order number is ' + (orderNumber - 1));
    total = 0;
    cart = [];
  }
}
