'use strict';

var orderNumber = 1, total = 0, cardNumber, cart = [];

function addToCart(item){
  var price = Math.floor((Math.random() * 100) + 1);
  var selection = {};
  selection[item] = price;
  cart.push(selection);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty");
  } else {
    for (var i = 0; i < cart.length; i++){
      for (var key in cart[i]){
        console.log("In your cart you have: " + key + " $" + cart[i][key]);
      }
    }
  }
}

function addCreditCard(card_num){
  cardNumber = card_num;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){ 
      if (key === item){
        var index = i;
      }
      if (index >= 0){
        total -= cart[index][item];
        cart.splice(index, 1);
      } else {
        console.log("That item is not in your cart");
      }
    }
  }
}

function placeOrder(){
  if (cardNumber == null){
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    total = 0;
    cart.length = 0;
    orderNumber++;
  }
}