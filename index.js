var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  getCart().push({[item]: Math.random()})
  console.log(`${item} has been added to your cart.`)
  return getCart()
}

function viewCart() {
  var cart_list = new Array
  for (var item = 0; item < getCart().length; item++) {
    for (var name in getCart()[item]){

    cart_list.push(` ${name} at $${getCart()[item][name]}`)
    }
  }
  if (cart_list.length > 0) {
    console.log(`In your cart, you have${cart_list.join(",")}.`)
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var total = null
  for (var item in getCart()) {
    for (var name in getCart()[item]) {
       total += getCart()[item][name]
    }
  }
  return total
}

function removeFromCart(item) {
  for (var element in getCart()) {
    if (getCart()[element].hasOwnProperty(item)) {
      getCart().splice(element, 1)
      break
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!!cardNumber === false) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart(new Array)
  }
}
