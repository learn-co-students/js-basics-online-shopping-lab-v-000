var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
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

function addToCart(item) {
  let price = Math.floor(Math.random () * 100);

  cart.push({[item]: price})

  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  let l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  let itemPrices = []

  for (let i = 0; i < l; i++) {
    let itemPrice = cart[i]
    let item = Object.keys(itemPrice)[0]
    let price = itemPrice[item]

    itemPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let l = cart.length
  for (let i = 0; i < l; i++) {
    let itemObject = cart[i]
    if (itemObject.hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
  setCart([]);
}
