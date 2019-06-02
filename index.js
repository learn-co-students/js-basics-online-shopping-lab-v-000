var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {
    [item]: (Math.floor((Math.random() * 100)))
  };
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartIntro = "In your cart, you have";

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(`${cartIntro} ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`);
  } else if (cart.length === 2) {
    console.log(`${cartIntro} ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]} and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}.`);
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      cartIntro += ` ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]},`
    }
    cartIntro += ` and ${Object.keys(cart[cart.length -1])[0]} at $${Object.values(cart[cart.length -1])[0]}.`
    console.log(cartIntro);
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += parseInt(Object.values(cart[i])[0], 10);
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
