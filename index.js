var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100) + 1
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)


 return cart
}

function viewCart() {
  // write your code here
  if (!cart.length) {
  console.log(`Your shopping cart is empty.`)
}

  var array = []
  for (var i = 0, l = cart.length; i < l; i++) {

    var item = Object.keys(cart[i])[0]
    var price = cart[i][item]
    var itemWithPrice = `${item} at $${price}`
    array.push(itemWithPrice)
  }

  console.log(`In your cart, you have ${array.join(", ")}.`)
}


function total() {
  // write your code here
  total = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    var item = Object.keys(cart[i])[0]
    total = total + cart[i][item]
}
  return total
}

function removeFromCart(item) {
  // write your code here
for (var name in cart){
  if (cart.hasOwnProperty(name)) {
    cart.shift(name)
  }
}
if (!cart.hasOwnProperty(name)){
    console.log(`That item is not in your cart.`)
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    console.log(`We don't have a credit card on file for you to place your order.`)
  }
  else {
    console.log(`Your total cost is $${total}, which will be charged to the card 123.`)
    cart.length = 0
  }
}
