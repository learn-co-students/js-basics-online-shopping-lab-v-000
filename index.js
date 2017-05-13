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
    var item = cart[i]
    var price = cart[item]
    var itemWithPrice = `${item[i]} at ${price}`
    array.push(itemWithPrice)
  }
  console.log(`In your cart, you have ${array}.`)
}


function total() {
  // write your code here


}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
