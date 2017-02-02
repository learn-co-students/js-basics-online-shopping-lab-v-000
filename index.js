'use strict';

var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.random();
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var cartItems = Object.keys(cart)
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }

  var itemsWithPrices = []

    for (var i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i])[0]
      var price = cart[i][item]
      itemsWithPrices.push(item + " at " + "$"+price)
    }
    console.log ("In your cart, you have " + itemsWithPrices.join(', ') +".")
}

// empty array
// for loop - length of cart
//   var item = Object.keys(cart[i])[0]
//   var price cart[i][item]
//   array.push("item at $price")
// end
// console.log (In... + array.join(', '))



function removeFromCart(item){

  var iteminCart = false;

  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      iteminCart = true
      cart = cart.slice(0, i)
    }
  }

  if (!iteminCart){
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(ccnumber){
  if (!ccnumber){
    return console.log("We don't have a credit card on file for you to place your order.")    
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${ccnumber}.`)

  cart = []
}
