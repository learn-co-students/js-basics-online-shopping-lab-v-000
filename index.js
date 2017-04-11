var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var obj = {}
  obj[item] = price
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var array = [];
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      var price = cart[i][item];
      array.push(`${item} at $${price}`);
    }
  }
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    console.log(`In your cart, you have ${array.join(", ")}.`)
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      var price = cart[i][item];
      total += price;
    }
  }
  return total;
}

function removeFromCart(item) {
  var array = []
  for (var i = 0; i < cart.length; i++) {
    for (var cartItem in cart[i]) {
      array.push(cartItem);
      if (item == cartItem) {
        cart.splice(i,1);
      }
    }
  }
  if (!(array.indexOf(item) > -1)) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber = null) {
  if (cardNumber === null) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  var t = total();
  console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
