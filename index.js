var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = new Object()
 obj[item] =  Math.floor(Math.random() * 10) + 1
 console.log(`${item} has been added to your cart.`)
 cart.push(obj)
 return cart
}

function viewCart() {
  switch(cart.length) {
    case 0:
      console.log("Your shopping cart is empty.")
      break;
    case 1:
      console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`)
      break;
    case 2:
      console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)
      break;
    case 3:
      console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}, ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}, and ${Object.keys(cart[2])[0]} at $${cart[2][Object.keys(cart[2])[0]]}.`)
      break;
    default:
      var string = `In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`
      for (var i = 1; i < cart.length - 1; i++) {
        string = string + ", " + `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
      }
       string = string + ", and " + `${Object.keys(cart[cart.length-1])[0]} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]}.`
      console.log(string)
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])[0]]
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      return cart = [...cart.slice(0,i),...cart.slice(i+1)]
    }
  }
  console.log("That item is not in your cart.")

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }

}
