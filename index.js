var cart = [];


function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  var t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({item: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      var itemObject = cart[i];
      var item = Object.keys(itemObject);
      var price = itemObject[item];
      // global
      itemsAndPrices = [];
      itemsAndPrices.push(`${item} at ${price}`)
    }
    console.log(`In your cart you have ${itemsAndPrices.join(', ')}`);
  }
  else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
     // TODO: remove item from cart
    }
    else {
      console.log("That item is not in your cart.");
    }
  }
  return cart;
}

function placeOrder(creditcard) {
  if (!creditcard) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditcard}.`);
  }
  cart = [];
}
