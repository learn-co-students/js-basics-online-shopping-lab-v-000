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
  var price = Math.floor(Math.random());
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cart_list = []
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      var itemAndPrice = cart[i];
      var item = Object.keys(itemAndPrice)[0];
      var price = itemAndPrice[item];
      cart_list.push(`${item} at \$${price}`);
    }
    return console.log(`In your cart, you have ${cart_list.join(', ')}.`);

  } else {
    return console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  var itemInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i);
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(number) {
  if (number) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
    cart = [];
  } else {
    return console.log("We don't have a credit card on file for you to place your order.");
  }
}
