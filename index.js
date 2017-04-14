var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
    var price= Math.floor(Math.random()*(100-0+1)+0)
    var obj = {}
    obj[item] = price
    cart.push(obj)
    console.log(`${item} has been added to your cart.`)
    return cart
}

function viewCart() {
  var new_cart = []
  if (cart.length > 0) {
    for (let i = 0, cart_length = cart.length; i < cart_length; i++) {
      new_cart.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
  }
   console.log(`In your cart, you have ${new_cart.join(', ')}.`)
  }else{
   console.log(`Your shopping cart is empty.`)
  }
}

function total() {
  var values = []
  for(let i = 0, l = cart.length; i < cart.length; i++) {
    values.push(Object.values(cart[i]))
  }
  var merged = [].concat.apply([], values)
  return merged.reduce(function(a, b){return a+b;})
}

function removeFromCart(test_item) {
  for (let i = 0, l = cart.length; i < l; i++){
    if (cart[i].hasOwnProperty(test_item)){
      cart.splice(i, 1)
      return cart // if the item is found - stops the execution of code and returns the value;
    }
  }
  console.log(`That item is not in your cart.`) // only reads here if the item is not found due to there being no return value
}

function placeOrder(cardNumber) {
  if (!cardNumber){
  console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}


