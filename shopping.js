'use strict';

var orderNumber = 1;
var total;
var cardNumber;
var cart = [];

function addToCart(item){
  var order_item = {}
  var price = Math.floor(Math.random() * (101));
  order_item[item] = price;
  cart.push(order_item);
  total += price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart(){
  if(cart.length === 0){
    console.log("Your shopping cart is empty");
  }
  else{
    cart.forEach(function(item){
      console.log("In your cart you have: " + Object.keys(item)[0] + " $" + item[Object.keys(item)[0]]);
    });
  }
}

function addCreditCard(creditCard){
  cardNumber = creditCard;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item_name){
  var output;
  cart.forEach(function(item,index){
    debugger;
    if (item[item_name] !== undefined){
      total -= item[item_name];
      cart.splice(index,1);
      output = item_name + " has been removed from your cart";
    }
  });
  if (output === undefined){
    output = "That item is not in your cart";
  }
  console.log(output);
  return cart;
}

function placeOrder(){
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order");
  }
  else{
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    orderNumber++;
    total = 0;
    cart = [];
  }
} 
