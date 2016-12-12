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
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  var itemsAndPrices = [];
  cart.forEach(function(cart) {
    for(var item in cart) {
      itemsAndPrices.push(item + " at $" + cart[item]);
    }
  });
  debugger;
  console.log(`In your cart, you have ${itemsAndPrices.join(", ")}.`);
}

function removeFromCart(item) {
  var itemInCart;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart.splice([i], 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
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
