'use strict';


var orderNumber = 1;
var total = 0;
var cardNumber;
var cart = []





function addToCart(item){
  var price = Math.floor((Math.random() * 100));
  cart.push({ [item]: price });
    total += price

  return console.log(item + " has been added to your cart");
}


function viewCart(){

  var price = Math.floor((Math.random() * 100));
for (var i = 0; i < cart.length; i++){
  for(var key in cart[i]){

    console.log("In your cart you have: "+ key + " $" + cart[i][key]);
    }
  }
}

function addCreditCard(number){
  cardNumber = number;
  console.log('Your credit card number has been saved.');
  return cardNumber
}

function removeFromCart(item){

  cart.forEach(function(lineItem, index){
    if(lineItem[item]){
      total -= lineItem[item];
      cart.splice(index, 1)
    }else {
      console.log('That item is not in your cart');
    }
  })
  return cart;
}

function placeOrder(){


  if(cardNumber == undefined){
    console.log("We don't have a credit card on file for you to place your order");
  }else{

    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber  + "). Your order number is " + (orderNumber));
    cart = [];
    total = 0;

    orderNumber ++;
  }

}
