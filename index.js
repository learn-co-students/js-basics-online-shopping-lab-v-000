var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var newObj = {}
  var price = (Math.floor(Math.random() * (100 - 1)) + 1)
  newObj[`${item}`] = price
  cart.push(newObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    return console.log('Your shopping cart is empty.')
  }
  var itemsArray = []
  for(var i = 0; i < cart.length; i++) {
    var itemAttrs = cart[i]
    var item = Object.keys(itemAttrs)[0]
    var price = itemAttrs[item]

    itemsArray.push(`${item} at $${price}`)
  }
  console.log(`In your cart, you have ${itemsArray.join(", ")}.`)
}

function total() {
  var cart_length = cart.length
  var total = 0
  for (var i = 0; i < cart_length; i++) {
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  let isInCart = false

  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      isInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if (!isInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
