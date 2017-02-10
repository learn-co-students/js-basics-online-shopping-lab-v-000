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
  const price = Math.floor((Math.random() * 100)+1)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const l = cart.length
  if (!l) {
    return console.log("Your shopping cart is empty.")
  }
  const alls = []
  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item] 
    alls.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${alls.join(', ')}.`)
}
 
function removeFromCart(item) {
  let booleanItem = false
  for (let i = 0, l = cart.length; i < l; i ++){
    if (cart[i].hasOwnProperty(item)){
      booleanItem = true
      cart = cart.slice(0,i)
    }
  }
  if (!booleanItem){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
}

