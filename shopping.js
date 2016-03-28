'use strict';

var orderNumber = []
var total = 0
var cardNumber
var cart = []


function addToCart(goods){
var newItem = {};
  newItem[goods] = Math.random() * 100;
  cart.push(newItem);
  console.log(goods + " has been added to your cart");
  total += newItem[goods];
}

function viewCart(){
  for(var i = 0; i < cart.length; i++) {
    for (var key in cart[i]){
      console.log("In your cart you have: "+ key + "  + art[i][key]);
    }
  }
}


function addCreditCard(num){
        cardNumber = num;
        console.log "Your credit card number has been saved";
        return cardNumber;
      }

function removeFromCart(item) {
  var haveName = 0
  for(var i =0; i< cart.length; i++) {
    for (var name in cart[i]) {
      if(name == item){
        haveName = 1
        total -= cart[i][name];
        cart.splice(i,1);
      }
    }
  }
  if (!haveName) {
    console.log("That item is not in your cart");
  }
}
      
      function placeOrder() {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order");
  } else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber)
    total = 0;
    cart=[];
    orderNumber +=1;
  }
      }