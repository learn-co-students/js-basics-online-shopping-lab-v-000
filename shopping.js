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

function getCart {
  return cart
}

function setCart(array) {
  var cart = array
}

// function addToCart(item) {
//   Math.floor((Math.random() * 100) + 1);
// }
