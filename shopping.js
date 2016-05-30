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
  cart.push({item: price});
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

