var cart = new Array();

function total() {
  let t = 0

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

function setCart(cart_array) {
  cart = cart_array;
}

function addToCart(item) {
  price = Math.floor(Math.random()*100);
  var obj = {};
  obj[item] = price;
  cart.push(obj);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var cart_string = "In your cart, you have ";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty");
  } else {
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        // debugger;
        cart_string = cart_string + (item + " at $" + cart[i][item] + ", ");
        // console.log(itemHash);
      }
    }
    console.log(cart_string.slice(0, (cart_string.length-2)) + ".");
  }
}

function removeFromCart(item) {
  const origsize = cart.length
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }}}
if (cart.length === origsize) {
  console.log("That item is not in your cart.");}
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
