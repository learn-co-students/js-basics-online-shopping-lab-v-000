'use strict';

var total = 0,
    cart =[];


function getCart(){
  return cart;
}

function setCart(cartArray){
  cart = cartArray;
}

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
  var new_item = {};
  var new_item[item] = Math.floor(Math.random()*100);
  cart.push(new_item);
  total += new_item[item];
  console.log(item + " has been added to your cart");
  return cart;
}


