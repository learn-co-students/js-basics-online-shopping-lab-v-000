var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
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
  cart.push({[item] : Math.floor(Math.random()*100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    const itemsAndPrices = []
    for (let i = 0; i < cart.length; i++) {
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)[0]
      let price = itemAndPrice[item]
      itemsAndPrices.push(`${item} at \$${price}`)
    }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
  }
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cdNum) {
  if(cdNum) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cdNum}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
