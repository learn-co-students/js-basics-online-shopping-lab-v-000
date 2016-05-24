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
  cart = arr;
  return cart;
}

function addToCart(item) {
  var cartItem = {};
  cartItem[item] = Math.random(0,100);
  cart.push(cartItem);
  console.log(cartItem + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++) {
      console.log("In your cart you have" + cart[i] + ".")
    }
  }
}