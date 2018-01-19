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
}

function viewCart() {
  // write your code here
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

function getCart() {
  return cart;
}


function addToCart(item) {
  // Math.random gives you a random number, then math.floor rounds the number down
  var price = Math.floor(Math.random() * 100);
   cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}


function viewCart() {
  
  if (!cart.length) {
    return console.log("Your shopping cart is empty.")
  }

  var itemPricesArray = []

  for (let i = 0; i < cart.length; i++) {
    let itemPriceArray = cart[i]
    let item = Object.keys(itemPriceArray)[0]
    let price = itemPriceArray[item]
    itemPricesArray.push(`${item} at \$${price}`)
  }
    console.log(`In your cart, you have ${itemPricesArray.join(', ')}.`)

}

function removeFromCart(item) {
  let itemInCart = false

  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i)
    }
  }
    if (!itemInCart) {
      console.log("That item is not in your cart.")
    }
    return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
   console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}