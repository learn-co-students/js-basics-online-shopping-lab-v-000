var cart;

cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var newItem = {};
  var price = Math.floor((Math.random() * 100));
  newItem[item] = price
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  var itemsAndPrices = []

  for (var i = 0; i < l; i++) {
    var itemAndPrice = cart[i]
    var item = Object.keys(itemAndPrice)[0]
    var price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  var l = cart.length

  for (var i = 0; i < l; i++) {
    var itemObject = cart[i]

    var returnValue;

    for (var prop in itemObject) {
      if (itemObject.hasOwnProperty(item)) {
        cart.splice(i, 1)
        returnValue = cart
      }
    }
  }
  if (returnValue) {
    return returnValue;
  } else {
    console.log("That item is not in your cart.");
  }
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

function placeOrder(creditCardNumber) {
  if (creditCardNumber) {
    var returnValue = `Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`;
    cart = [];
  } else {
    var returnValue = "We don't have a credit card on file for you to place your order."
  }
  console.log(returnValue);
}
