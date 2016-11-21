var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 10)});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    console.log ("Your shopping cart is empty.");
  } else {
    var itemPairs = [];
    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0];
      var price = cart[i][item];
      itemPairs.push(`${item} at $${price}`);
      }
    console.log(`In your cart, you have ${itemPairs.join(', ')}.`);
  }
}

function removeFromCart(item) {
  let itemInCart = false
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  } if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}


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
