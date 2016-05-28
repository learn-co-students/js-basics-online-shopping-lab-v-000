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
  return cart;
}

function setCart(array) {
  cart = array;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100));
  item_object = {item: price};
  cart.push(item_object);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length) {
    message = ("In your cart you have ");
    body = [];
    cart.forEach(function(item)) {
      for (let itemObject in item) {
        body.push(`${itemObject} at ${item[itemObject]}`);
      }
    }
    body.join(', ');
    console.log(message + body + ".");
  }
}