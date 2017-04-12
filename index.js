var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  cart.push({ [item]: Math.floor(Math.random() * 100) })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const humanCart = cart.map(item => {
    const itemName = Object.keys(item)[0]
    const itemPrice = item[itemName]
    return `${itemName} at $${itemPrice}`
  })

  if (humanCart.length) {
    console.log(`In your cart, you have ${humanCart.join(", ")}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  const prices = cart.map(item => Object.values(item)[0])
  return prices.reduce((acc, price) => acc + price, 0)
}

function removeFromCart(itemName) {
  const itemIndex = cart.findIndex(item => item.hasOwnProperty(itemName))
  if (itemIndex == -1) {
    console.log("That item is not in your cart.")
  } else {
    cart.splice(itemIndex, 1)
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
