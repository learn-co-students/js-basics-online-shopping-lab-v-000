var cart = [];

function getCart() {
  return cart;
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

function setCart(array) {
  cart = array;
  return;
}

function addToCart(key) {
  var hash = {};
  hash[key] = Math.random()*10;
  cart.push(hash);
  console.log(key + " has been added to your cart.");
  return getCart();
}

function viewCart() {
  var mystr = "In your cart, you have ";
  for (let i = 0; i < cart.length; i++) {
    for (let item in cart[i]) {
      mystr += item + " at " + cart[i][item] +  ", "; 
    }
  }

  mystr = mystr.slice(0, -2) + ".";
  console.log(mystr);
  return;
}