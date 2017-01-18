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
  const price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length) {
      return console.log("Your shopping cart is empty.")
    }

    var itemsAndPrices = []

    for (let i = 0; i < cart.length; i++) {
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)[0]
      let price = itemAndPrice[item]
      itemsAndPrices.push(`${item} at \$${price}`)
    }

    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
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
  
