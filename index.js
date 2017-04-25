var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(productName) {
 var price = Math.floor((Math.random() * 100))
 var product = {}
 product[productName] = price
 cart.push(product)
 console.log(`${productName} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var itemsAtPrices = []
    for (let i = 0; i < cart.length; i++) {
      for (var itemName in cart[i]){
        itemsAtPrices.push(`${itemName} at $${cart[i][itemName]}`)
      }
    }
    console.log(`In your cart, you have ${itemsAtPrices.join(', ')}.`)
  }
}

function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    for (var itemName in cart[i]){
      total += cart[i][itemName]
    }
  }
  return total
}


function removeFromCart(itemToRemove) {
  var counter = 0
  cart.forEach(function(cartItem, index) {
    for (var key in cartItem) {
      if (itemToRemove == key) {
        cart.splice(index, 1)
        counter += 1
      }
    }
  });
  if (counter === 0) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  else {
    console.log(`We don't have a credit card on file for you to place your order.`)
  }
}
