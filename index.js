var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var item_obj = {}
  item_obj[item] = price
  cart.push(item_obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  let statement = "In your cart, you have "
  let list = []
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])[0]
      list.push(`${item} at $${cart[i][item]}`)
      console.log(statement + list.join(", ") + ".")
    }
  } else {
    console.log("Your shopping cart is empty.")
  }
}
// Add list array, push statements into array, and use .join(", ") to put it together

function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i]
    for (var itemCost in item) {
      total += item[itemCost]
    }
  }
  return total
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
