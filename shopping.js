var cart = [];

function total() {
  var t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function setCart(contents) {
  cart = contents;
  return cart;
}

function addToCart(item) {
  var price = (0..100);
  cart.push(setItem(item, price));
  return cart;
}

function setItem(item, price) {
  return { [item] : [price] };
}
