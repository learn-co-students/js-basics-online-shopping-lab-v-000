'use strict';

var orderNumber = 1, total = 0, cardNumber, cart = [];

function addToCart(item) {
  var itemInfo = {};
  itemInfo[item] = Math.floor((Math.random() * 100));
  cart.push(itemInfo);
  total += itemInfo[item];
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty");
  } else {
    cart.forEach(function(itemInfo) {
      var item = Object.keys(itemInfo)[0];
      var price = itemInfo[item];
      console.log("In your cart you have: " + item + " $" + price);
    });
  }
}

function addCreditCard(card) {
  cardNumber = card;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item) {
  var itemToRemove;
  //var itemToRemove = cart.find(function(cartItem) {
  //  return Object.keys(cartItem)[0] === item;
  //});
  cart.forEach(function(cartItem) {
    if (Object.keys(cartItem)[0] === item) {
      return itemToRemove = cartItem;
    }
  })

  if(! itemToRemove){
    console.log("That item is not in your cart");
  } else {
    total -= itemToRemove[item];
    cart.splice(cart.indexOf(itemToRemove), 1);
  }
}

function placeOrder() {
  if(! cardNumber){
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    cart = [];
    total = 0;
    orderNumber += 1;
  }
}
