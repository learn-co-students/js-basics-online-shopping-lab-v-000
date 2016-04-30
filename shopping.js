'use strict';
var orderNumber = 0;
var total = 0;
var cardNumber = 0;
var cart = [];

function addToCart(item){
  var price = Math.floor(Math.random()*101);
  var new_item = {};
  new_item[item] = price;
  cart.push(new_item);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart(){
  if (cart.length > 0){
  cart.forEach(function(entry){
    for(var key in entry){
      console.log("In your cart you have: " + key + " $" + entry[key]);
    }
  });
} else {
  console.log("Your shopping cart is empty");
}
}

function addCreditCard(creditCardNum){
  cardNumber = creditCardNum;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    for(var key in cart[i]){
      if (item == key){
        total = total - cart[i][key];
        cart.splice(i,1);
        break;
      }
    }
  }
    console.log("That item is not in your cart");
}

function placeOrder(){
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    cart = [];
    total = 0;
    orderNumber++;
  }
}
