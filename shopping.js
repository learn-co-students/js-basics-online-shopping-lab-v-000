'use strict';

var orderNumber;
var total;
var cardNumber;
var cart = [];

function total() {
  let t = 0
  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item) {
  var item_object = {};
  var price = Math.floor(Math.random() * 100);
  item_object[item] = price;
  cart.push(item_object);
  total += price;
  console.log(item + " has been added to your cart.");
  return cart;
};

function getCart(){
  return cart;
}

function setCart(cartArray){
  cart = cartArray;
  return cart;
}

function viewCart(){
  if (cart.length == 0) {
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

function addCreditCard(creditCardNum){
  cardNumber = creditCardNum;
  console.log("Your credit card number has been saved.")
  return cardNumber;
}

function removeFromCart(item) {
  var foundItem = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      foundItem = true;
      cart.splice(i);
    }
  }

  if (foundItem === false) {
    console.log("That item is not in your cart.");
  }
  
  return cart;
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    orderNumber ++;
    cart = [];
    total = 0;
  }
}