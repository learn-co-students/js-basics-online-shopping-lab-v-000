var cart = []
function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function setCart() {

}

function addToCart(item) {
  var new_item = new Object();
  new_item[item] = Math.floor(Math.random()*100)
  cart.push(new_item)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function removeFromCart() {

}

function viewCart() {
  var cart_items = []
  for(var i = 0; i < cart.length; i++){
    for(let key in cart[i]) {
      cart_items.push(`${key} at $${cart[i][key]}`)

    }
  }
  console.log(`In your cart, you have ` + cart_items.join(", ") + ".")
}

function removeFromCart(item) {
  function findItem(item){
    return item === item
  }
  for(let item in cart){
    delete cart[item]
  }
  if (!cart.find(findItem)) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(card) {
  if (card == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
  }
  cart.length = 0
}
