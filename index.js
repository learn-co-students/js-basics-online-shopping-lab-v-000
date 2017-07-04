var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random()*100);
   cart.push({[item] : price})
   console.log(`${item} has been added to your cart.`)
   return cart
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  }
  var itemsPrices = []
    for (let i = 0; i < cart.length; i++) {
      var item = cart[i]
      for ( var item in cart[i]){
        itemsPrices.push(`${item} at $${cart[i][item]}`)
      }
  }
  if (cart.length === 2){
      var string = itemsPrices.join(" and ")
      console.log(`In your cart, you have ${string}.`)
  } else if (cart.length > 2) {
        var last = itemsPrices.pop()
        var string =  itemsPrices.join(', ')
        var final = string + ', and ' + last
      console.log(`In your cart, you have ${final}.`)
  } else {
    console.log(`In your cart, you have ${itemsPrices}.`)
    }
}

function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    var item = cart[i]
    var key = Object.keys(item)
    var value = item[key]
    var sum = total += value
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    var cartItems = cart[i]
    var key = Object.keys(cartItems)

    if (cartItems.hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  var sum = total()
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
