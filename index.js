var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var itemPrice = {};
  itemPrice[item] = price;
  cart.push(itemPrice);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var yourCart = "In your cart, you have";
  if (Object.keys(cart).length !== 0) {
    var i = 0;
    while (i < cart.length) {
      var carty = cart[i];
      for (var key in carty) {
        yourCart += ` ${key} at $${carty[key]},`;
        i++;
      }
    }
    yourCart = (yourCart.slice(0, -1) + '.');
  } else {
    yourCart = "Your shopping cart is empty.";
  }
  console.log(yourCart);
}

function removeFromCart(item) {
  var counter = 0;
  var cartLength = cart.length;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      break;
    } else { counter++; }
  }
  if (counter === cartLength) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }
}
