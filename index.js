var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 cart.push({[item]: Math.random()})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var item_list = new Array
  for (var item = 0; item < cart.length; item++) {
    for (var name in cart[item]){

    item_list.push(` ${name} at $${cart[item][name]}`)
    }
  }
  if (item_list.length > 0) {
    console.log(`In your cart, you have${item_list.join(",")}.`)
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var total = 0
  for (var item in cart) {
    for (var name in cart[item]) {
      total += cart[item][name]
    }
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
    } else {
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined ) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  return cart.length = 0
}
