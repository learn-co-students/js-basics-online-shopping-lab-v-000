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

function setCart(array) {
  cart = array;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(100 * Math.random());
  item_price_pair = {};
  item_price_pair[item] = price;
  cart.push(item_price_pair);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else {
    info = "In your cart, you have ";

    for (let i = 0; i < cart.length; i++) {
      for (let item in cart[i]) {
        info += `${item} at $${cart[i][item]}`;
        (i < cart.length - 1) ? info += ', ' : info += '.';
      }
    }

    console.log(info);
  }
}

function removeFromCart(item) {
  var found = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      found = true;
      cart.splice(i);
    }
  }

  if (found === false) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(credit) {
  if (!credit) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${credit}.`);
    cart = [];
  }
}
