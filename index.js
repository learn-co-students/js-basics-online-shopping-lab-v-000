var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
  if(!cart.length) {
    console.log('Your shopping cart is empty.')
  }
  const itemsAndPrices = []
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      itemsAndPrices.push(`${item} at $${cart[i][item]}`);
    }
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(", ")}.`)
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
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
