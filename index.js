var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = new Object()
 newItem[item] = Math.floor((Math.random() * 100))
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    let cartObject = cart[0]
    let cartKey = Object.keys(cart[0])[0]
    let cartValue = cartObject[cartKey]
    return console.log(`In your cart, you have ${cartKey} at \$${cartValue}.`)
  } else if (cart.length === 2) {
    let cartObject = cart[0]
    let cartKey = Object.keys(cart[0])[0]
    let cartValue = cartObject[cartKey]
    let cartObject1 = cart[1]
    let cartKey1 = Object.keys(cart[1])[0]
    let cartValue1 = cartObject1[cartKey1]
    return console.log(`In your cart, you have ${cartKey} at \$${cartValue} and ${cartKey1} at \$${cartValue1}.`)
  }

  let cartList = "In your cart, you have"

  for(let i = 0; i < cart.length; i++) {
    let cartObject = cart[i]
    let cartKey = Object.keys(cart[i])[0]
    let cartValue = cartObject[cartKey]

    if(i === cart.length - 1) {
      cartList += ` and ${cartKey} at \$${cartValue}.`
    } else {
      cartList += ` ${cartKey} at \$${cartValue},`
    }
  }
  return console.log(cartList)
}

function total() {
  // write your code here
  let total = 0

  for(let i = 0; i < cart.length; i++) {
    let cartObject = cart[i]
    let cartKey = Object.keys(cart[i])[0]
    let cartValue = cartObject[cartKey]

    total += cartValue
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  if(cart.length === 0) {
    console.log("That item is not in your cart.")
    return cart
  }

  for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }

  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return false
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
  return cart
}
