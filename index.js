"use strict"; 
var cart;

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

function addToCart(item) {
  var object = {}; 
  var price = Math.floor(Math.random() * 100); 
  object[item] = price; 
  getCart().push(object); 
  console.log(item + " has been added to your cart."); 
  console.log("Price is " + getCart()[getCart().length - 1][item]); 
  return getCart(); 
}

function viewCart() {
  if (getCart().length === 0) {
    console.log("Your shopping cart is empty.");  
    return; 
  } else {
    var message = "In your cart, you have "; 
    for (var i = 0; i < getCart().length; i++) {
      for (var item in getCart()[i]) {
        message = message +  item + " at $" + getCart()[i][item]; 
        if (i < (getCart().length - 1)){
          message = message + ", ";  
        } 
      }
    }
    console.log(message + "."); 
    return message; 
  }
}

function getCart() {
  return cart; 
}

function hasItem(c, item) {
  for (let i = 0, l = c.length; i < l; i++) {
    if (c[i].hasOwnProperty(item)) {
      return i;  
    }
  }

  return false
}

function removeFromCart(item) {
  var index = hasItem(getCart(), item); 
  debugger; 
  if (index !== false) {
    debugger; 
    getCart().splice(index, 1);  
    return; 
  } else {
    console.log("That item is not in your cart."); 
    return; 
  }
}

function placeOrder(creditCard) {
  if (! creditCard) {
    console.log("We don't have a credit card on file for you to place your order."); 
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");   
    emptyCart(); 
  }
  return; 
}

function emptyCart() {
  var freshCart = []; 
  setCart(freshCart); 
}
