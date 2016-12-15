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
  var price = Math.floor(Math.random() * 100);
  var obj = {[item] : price};
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart()  {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var arrayOfStrings = []
    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i]);
      var amt = cart[i][key];
      var string = `${key} at $${amt}`;
      arrayOfStrings.push(string);
    }
    console.log("In your cart, you have " + arrayOfStrings.join(", ") + ".");
  }
}

function removeFromCart(nameOfItem) {
  var itemExists = false;
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) == nameOfItem) {
      itemExists = true;
    }
  }
  if (!itemExists) {
    console.log("That item is not in your cart.");
  } else {
    for (var j = 0; j < cart.length; j++) {
      if (cart[j].hasOwnProperty(nameOfItem)) {
        cart.splice(j, 1);
      }
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i]);
      var price = cart[i][key];
      total += price;
    }
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
