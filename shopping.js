'use strict';
var orderNumber = 0
var total 
var cardNumber
var cart = []

function addToCart(item) {
  var obj = {}
  obj[item] = (Math.random() * (100 - 1) + 1);
  cart.push(obj)
  total += obj[item]
  console.log(item + " has been added to your cart")
  return cart
}

function viewCart() {
  cart.forEach(function(entry) {
    console.log("In your cart you have: " + Object.keys(entry)[0] + " $" + entry[Object.keys(entry)[0]])
  })
}
// above seems like an odd way to do it.  check solution after submitting
// really wish it asked for the cart to be an object(hash), i don't see why it is an array
function addCreditCard(number) {
  cardNumber = number
  console.log("Your credit card number has been saved.")
  return cardNumber
}

function removeFromCart(item) {
  var removed
  cart.forEach(function(entry, index) {
    if (entry[item]) {
      cart.splice(index, 1)
      total -= entry[item]
      var removed = true
    } 
  })
  if (removed != true) {
    console.log("That item is not in your cart")
  }
}

function placeOrder() {
  if (cardNumber) {
    console.log("Your total cost is: $" + total + 
      " and will be charged to the credit card on file ("
       + cardNumber + "). Your order number is " + orderNumber);
    total = 0
    orderNumber++
  } else {
    console.log("We don't have a credit card on file for you to place your order");
  }
}