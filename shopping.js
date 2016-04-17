'use strict';
var orderNumber
var total = 0
var cardNumber
var cart = []

function addToCart(item) {
  var price = Math.floor((Math.random() * 100));
  var newitem = {};
  newitem[item] = price;
  cart.push(newitem);
  total += price;
  console.log(item + " has been added to your cart")
  return cart;
}

function viewCart() {
  if (Object.keys(cart).length === 0) {
    console.log("Your shopping cart is empty")
  } else {
      for(var i = 0; i < cart.length; i++){
        var items = cart[i] 
        for(var key in items){
          console.log("In your cart you have: " + key + " $" + items[key]);
      }
    }
  }
}
function addCreditCard(num) {
  cardNumber = num;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}


function removeFromCart(item){
  for (var i = 0; i < cart.length; i ++){
    for (var key in cart[i]) {
      if (key == item){
        var price = cart[i][item];
        cart.splice(i, 1);
        total -= price;
        console.log(item + " has been removed from your cart");
        break;
      }
    }
  }
  console.log("That item is not in your cart");
}

function placeOrder(){
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order");
  } else{
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber)
    orderNumber += 1
    total = 0
  }
}