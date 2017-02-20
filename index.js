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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }
  var combo = []
  for (var i = 0; i < cart.length; i++) {
    for (var itemName in cart[i]) {
      combo.push(`${itemName} at \$${cart[i][itemName]}`)
    }
  }

  console.log(`In your cart, you have ${combo.join(', ')}.`)

}

function removeFromCart(item) {
  let hasItem = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      hasItem = true
      cart.splice(i, 1)
    }
  }

  if (!hasItem) {
    console.log("That item is not in your cart.");
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = []
}
