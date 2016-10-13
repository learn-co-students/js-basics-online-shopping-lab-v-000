var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function removeFromCart(item) {
  const itemsInCart = cart.length
  for (let i = 0; i < itemsInCart; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
    }
  }

  if (cart.length === itemsInCart) {
    console.log("That item is not in your cart.");
  } else {
    return cart;
  }
}

function viewCart() {
  if (!cart.length) {
    return console.log("Your shopping cart is empty.");
  }

  const clause = [];
  cart.forEach(function(item) {
    var itemName = Object.keys(item);
    clause.push(`${itemName} at $${item[itemName]}`);
  });

  console.log(`In your cart, you have ${clause.join(', ')}.`);
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

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
