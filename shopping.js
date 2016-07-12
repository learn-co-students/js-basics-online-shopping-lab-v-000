var cart = []

function total() {

  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function setCart(array = []) {
  cart = array
}

function addToCart(item) {
  product = {}
  product[item] = Math.floor((Math.random() * 100) + 1);
  cart.push(product);
  console.log(item + " has been added to your cart.");
  return cart 
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var shoppingCart = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        shoppingCart.push(item + ' at $' + cart[i][item]);
      }
    }
    console.log('In your cart, you have ' + shoppingCart.join(', ') + '.');
  }
}

function removeFromCart(item) {
  var cartItem = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cartItem = true;
      delete cart[i]
    }
  }
  if (cartItem === false) {
    console.log("That item is not in your cart.");
  }
  getCart()
}

function placeOrder(ccNum) {
  if (!ccNum) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`);
    setCart();
  }
}

