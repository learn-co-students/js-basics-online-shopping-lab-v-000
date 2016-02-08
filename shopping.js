'use strict';
var orderNumber;
var total=0;
var cardNumber="";
var cart=[];

function addToCart(item){
  var price = Math.floor((Math.random() * 100) + 1);
  var newObjItem = {};
  newObjItem[item]=price;
  cart.push(newObjItem);
  total+=price;
  console.log(item +" has been added to your cart");
  return cart;
}

function viewCart() {
  for (var i=0; i< Object.keys(cart).length; i++){
    for (var key in cart[i]){
    console.log("In your cart you have: " + key + " $" + cart[i][key]);
}
}
}

function addCreditCard(creditCardNumber) {
  cardNumber = creditCardNumber;
  console.log("Your credit card number has been saved.");
  return cardNumber;

}

function removeFromCart(item) {
  for( var i=0; i< cart.length; i++) {
    if (Object.keys(cart[i])[0] == item ){
      console.log("in the loop-found");
      //debugger;
      total -= cart[i][item];
    cart.splice(i,1);
    return cart;
  } else {
      console.log("That item is not in your cart");
    }
  }

}


function placeOrder() {
  if(cardNumber == undefined) {
    console.log("We don\'t have a credit card on file for you to place your order");
    return;
  } else {
    console.log("Your total cost is: $"+ total + " and will be charged to the credit card on file ("+cardNumber+"). Your order number is "+orderNumber);
    orderNumber++;
    total=0;
    cart=[];
  }

}
