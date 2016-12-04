"use strict";

var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

  cart.push({[item]: price})

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  // sets variable for cart length
  const l = cart.length
  // if cart legnth is 0
  if(!l) {
 // prints that cart is empty
  return console.log(`Your shopping cart is empty.`)
}
 // sets variable for items & their price
  const itemsAndPrices = []
// looks through each item (by 1)
  for (let i = 0; i < l; i++) {
//each item = item in cart
    let itemAndPrice = cart[i]
//sets an index for each item starting from 0
    let item = Object.keys(itemAndPrice)[0]
// sets price = to item and price[of passed in item]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function total() {
  // sets total to 0
  let t = 0
  //count all items
  for (var i = 0, l = cart.length; i < l; i++) {
    // and add each item to total
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  // return new total
  return t
}

function removeFromCart(item) {
  let itemInCart = false
// go through each item
  for (let i = 0, l = cart.length; i < l; i++) {
    // if item is found
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      // remove item from cart:
      cart = cart.slice(0, i).concat(cart.slice(i + 1))

    }
  }
  //if not in cart then send message:
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
  //return the cart.
  return cart
}

function placeOrder(cardNumber) {
if (!cardNumber) {
  return console.log("We don't have a credit card on file for you to place your order.")
}

console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

cart = []
}
