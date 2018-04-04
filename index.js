var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (!cart.length) {
    return console.log("Your shopping cart is empty.");
  }
  let prices = [];
  for (let i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];
    prices.push(`${item} at \$${price}`);
  }
  switch(prices.length) {
    case 1:
      break;
    case 2:
      prices = prices.join(" and ");
      break;
    default:
      prices[cart.length-1] = "and ".concat(prices[cart.length-1]);
      prices = prices.join(", ");
  }
  console.log(`In your cart, you have ${prices}.`);
}

function total() {
  let j = 0;
  for (let i = 0; i < cart.length; i++) {
    for (let item in cart[i]) {
      j += cart[i][item];
    }
  }
  return j;
}

function removeFromCart(item) {
  let itemInCart = false;
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
