var cart = [];

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
  return cart;
}

function setCart(arr) {
  const cart = arr;
}

function addToCart(product) {
  var price = Math.random((Math.floor() * 100);
  cart.push({ [product]: price });
  console.log(`${product}`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {

  }

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
