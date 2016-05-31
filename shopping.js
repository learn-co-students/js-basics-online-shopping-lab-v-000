var cart = []

function getCart() {
  return cart
}

function setCart() {

}

function addToCart(item) {
  var new_item = new Object();
  cart.push(new_item[item] = Math.random())
  console.log(`${item} has been added to your cart.`)
  return cart
}

function removeFromCart() {

}

function viewCart() {
  console.log(cart)
}

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
