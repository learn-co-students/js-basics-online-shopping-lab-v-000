'use strict';

var orderNumber, total = 0, cardNumber, cart = [];


function addToCart(item){
  var newItem = {};
  newItem[item] = Math.floor(Math.random() * 100);
  cart.push(newItem);
  total = total + newItem[item];
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart(){
  cart.forEach(function(item){
    for(var key in item){
      console.log('In your cart you have: ' + key + ' $' + item[key]);
    }
  });
}

function addCreditCard(number){
  console.log('Your credit card number has been saved.');
  return cardNumber = number;
}

// function removeFromCart(item){
//   var foundItem = cart.find(function(object){
//     return Object.keys(object) == item
//   });
//   if (foundItem) {
//     total = total - foundItem[item];
//     cart = cart.filter(function(object){
//       return object != foundItem;
//     });
//     return cart;
//   } else {
//     console.log("That item is not in your cart");
//   }
// }

function removeFromCart(item){

  for (var i = 0; i < cart.length; i ++){
    for (var key in cart[i]) {
      if (key == item){
        var price = cart[i][item];
        cart.splice(i, 1);
        console.log(item + " has been removed from your cart")
        total -= price;
      }
      else{
        console.log("That item is not in your cart");
      }
    }
  } 
}


function placeOrder(){
  if (cardNumber) {
    console.log('Your total cost is: $'+ total +' and will be charged to the credit card on file ('+ cardNumber +'). Your order number is ' + orderNumber);
    orderNumber++
    total = 0
  } else {
    console.log('We don\'t have a credit card on file for you to place your order');
  }
}


