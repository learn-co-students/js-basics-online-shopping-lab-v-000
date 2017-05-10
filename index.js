var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100)
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
    if (cart.length < 1) {
      console.log("Your shopping cart is empty.")
    } else {

      let cartItems = []

      for (let i = 0; i < cart.length; i++) {
        let currentItem = cart[i]
        let currentItemName = Object.keys(currentItem)[0]
        let currentItemPrice = currentItem[currentItemName]

        cartItems.push(`${currentItemName} at $${currentItemPrice}`)
      }
      console.log(`In your cart, you have ${cartItems.join(', ')}.`)
    }
}

function total() {
  // write your code here
  let total = 0

  for (let i = 0; i < cart.length; i++) {
    let currentItem = cart[i]
    let currentItemName = Object.keys(currentItem)[0]
    let currentItemPrice = currentItem[currentItemName]

    total += currentItemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    let currentItem = cart[i]
    let currentItemName = Object.keys(currentItem)[0]
    if (currentItemName === item) {
     let index = cart.indexOf(currentItem)
     cart.splice(index, 1)
     return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
