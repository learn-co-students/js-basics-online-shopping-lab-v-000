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
  var price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  const pairs = []
  for (var i = 0; i < cart.length; i++) {
    let element = cart[i]
    let item = Object.keys(element)[0]
    let price = element[item]

    pairs.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${pairs.join(', ')}.`)
}


function removeFromCart(item) {
  if (cart[item] === undefined) {
    console.log("That item is not in your cart.");
  }
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0,i)
      }
    }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  }
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    
  cart = []
}
