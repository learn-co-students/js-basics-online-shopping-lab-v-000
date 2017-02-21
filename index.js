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
  return cart
}

function addToCart(item) {
  var price = Math.random() * 10
  cart.push({ [item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var items = [];
  for (var i = 0; i < cart.length; i++) {
    for (var itemName in cart[i]) {
      items.push(`${itemName} at $${cart[i][itemName]}`);
    }
  }

  debugger
  if (items.length > 0) {
    console.log(`In your cart, you have ${items.join(', ')}.`);
  } else {
    console.log("Your shopping cart is empty.");
  }
  return cart
}

function removeFromCart(checkItemName) {
  var cartLength = cart.length
  for (var i = 0; i < cartLength; i++) {
    for (var itemName in cart[i]) {
      if (itemName === checkItemName) {
        cart.splice(i, 1)
      }
    }
  }
  if (cart.length === cartLength) {
    console.log("That item is not in your cart.");
  }
  return cart
}

function placeOrder(cardNumber) {
  debugger;
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  return cart = []
}
