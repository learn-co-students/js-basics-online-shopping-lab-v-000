'use strict';

var orderNumber = 1;

var total = 0;

var cardNumber;

var cart = [];

function addToCart(item){
  var random = Math.random();
  var price = Math.floor(random * 100);
  var itemToPurchase = {};
  itemToPurchase[item] = price;
  cart.push(itemToPurchase);
  total += price;
  console.log(item + " has been added to your cart")
  return cart;
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

function addCreditCard (creditCardNumber) {
  cardNumber = creditCardNumber;
  console.log("Your credit card number has been saved.");
  return cardNumber;
};

function removeFromCart (item) {
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      if (key == item){
        var price = cart[i][key];
        total -= price;
        cart.splice(i, 1);
        console.log(item + " have been removed from your cart")
      } else {
        console.log("That item is not in your cart");
      }
    }
  }
};

function placeOrder () {
  if (cardNumber) {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    total = 0;
    cart = [];
    orderNumber ++;
  } else {
    console.log("We don't have a credit card on file for you to place your order");
  }
}

