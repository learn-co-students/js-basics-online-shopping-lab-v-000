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
  var price = Math.floor(Math.random() * 100);
  var itemPricePair = {};
  itemPricePair[item] = price;
  cart.push(itemPricePair);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var pairs = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      for (var key in item) {
        if (item.hasOwnProperty(key)) {
          pairs.push(key + " at $" + item[key]);
        }
      }
    }
    var message = "In your cart, you have " + pairs.join(", ") + ".";
    console.log(message);
  }
}

function removeFromCart(itemName) {
  var cartLength = cart.length;
  for (var i = 0; i < cartLength; i++) {
    var item = cart[i];
    if (item.hasOwnProperty(itemName)) {
      cart.splice(i, 1);
      break;
    }
  }
  if (cartLength === cart.length) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    var message = "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".";
    console.log(message);
    cart = [];
  }
}
