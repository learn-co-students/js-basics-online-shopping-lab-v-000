'use strict';

var orderNumber = 1;
var total = 0;
var cardNumber;
var cart = new Array;

function addToCart(item){
  var price = Math.floor(Math.random() * 101);
  var itemPrice = new Object;
  itemPrice[item] = price;
  cart.push(itemPrice);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart(){
  if (cart.length == 0) {
    console.log("Your shopping cart is empty");
  } else {
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0];
      var price = cart[i][item];
      console.log("In your cart you have: " + item + " $" + price);
    }
  }
}

function addCreditCard(number){
  cardNumber = number;
  console.log("Your credit card number has been saved.")
  return cardNumber;
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++) {
    var cartItem = Object.keys(cart[i])[0];
    if (item === cartItem) {
      total -= cart[i][cartItem];
      cart.splice(i, 1);
      return;
    }
  }
  console.log("That item is not in your cart");
}

function placeOrder(){
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order")
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file " + "(" + cardNumber + "). Your order number is " + orderNumber);
    orderNumber += 1;
    cart = new Array;
    total = 0;
  }
}
