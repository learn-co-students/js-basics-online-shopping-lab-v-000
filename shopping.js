'use strict';

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


function getCart() {
  return cart;
}

function setCart(cartArray) {
  cart = cartArray;
  return cart;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  var newItem =  {};
  newItem[item] = getRandomInt(1, 100);
  cart.push(newItem);
  console.log(Object.keys(newItem) + ' has been added to your cart.');
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var itemList = [];
    for (var i = 0; i < cart.length; i++) {
      for (var itemName in cart[i]) {
        itemList.push(itemName + ' at $' + cart[i][itemName]);
      }
    }
    console.log('In your cart, you have ' + itemList.join(', ') + '.');
  }
}

function removeFromCart(itemToRemove) {
  var keys = [];
  for (var i = 0; i < cart.length; i++) {
    for (var itemName in cart[i]) {
      if (itemName === itemToRemove) {
        debugger;
        keys.push(cart[i])
        delete cart[i];
      }
    }
  }
  if (keys.length === 0) {
    console.log('That item is not in your cart.');
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === 'number') {
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  } else {
    console.log(`We don't have a credit card on file for you to place your order.`);
  }
}
