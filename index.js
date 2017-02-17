var cart = [];

function setCart(newCart) {
  cart = newCart;
}

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
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  } else {
    var key;
    const itemAndPrice = [];
    for (let i = 0, l = cart.length; i < l; i++) {
      key = Object.keys(cart[i]);
      itemAndPrice.push(`${key} at $${cart[i][key]}`);
    }
    console.log(`In your cart, you have ${itemAndPrice.join(', ')}.`);
  }
}

function removeFromCart(item) {
  var index = cart.findIndex((obj) => { return obj.hasOwnProperty(item) } );
  if (index > -1) {
    cart.splice(index, 1);
    return cart;
  } else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNum) {
  if (cardNum === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNum}.`);
    cart = [];
  }
}
