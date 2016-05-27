var total=0;
var cart = [];

function getCart() {
  return cart;
}

function setCart(array) {
  cart=array;
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

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({item: price});
  total += price;
  console.log(item + " has been added to your cart.");
  return cart;
};
