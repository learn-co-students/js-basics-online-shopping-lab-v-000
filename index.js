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
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random () * 100);

  cart.push({[item]: price});

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  let itemListings = [];

  for (let i = 0; i < cart.length; i++) {
    let itemListing = cart[i];
    let item = Object.keys(itemListing)[0];
    let price = itemListing[item];
    itemListings.push(`${item} at \$${price}`);
      }
      console.log( `In your cart, you have ${itemListings.join(', ')}.`)
  }

function removeFromCart(item) {
  let itemExists = false;
  for (let i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item))
   {
    itemExists = true;
    cart = cart.slice(0, i)
  }
}
  if (itemExists === false)
   {
  console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
