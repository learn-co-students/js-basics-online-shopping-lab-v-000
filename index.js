var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random * 100)
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
    }
  else {
    var cart_items = []
    for (var i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])[0]
      let price = cart[i][item]
      cart_items.push(`${item} at $${price}`)
    }
    console.log(`In your cart, you have ${cart_items.join(', ')}.`)
  }
}

function total() {
  // write your code here
  for (var i = 0, total = 0; i < cart.length; i++) {
    let item = Object.keys(cart[i])[0]
    let price = cart[i][item]
    total += price
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
      }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    }
  else {
    console.log(`We don\'t have a credit card on file for you to place your order.`)
  }

}
