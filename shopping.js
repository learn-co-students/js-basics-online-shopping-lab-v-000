'use strict';

var orderNumber;
var total;
var cardNumber;
var cart=[];

function addToCart (str) {
  
  var price = Math.floor((Math.random() * 100));;
  itemToBuy={}
  itemToBuy[item]=price
  cart.push(itemToBuy);
  total+=price;
  console.log( item + " has been added to your cart.");

  console.log(cart.length);
  return cart;
}