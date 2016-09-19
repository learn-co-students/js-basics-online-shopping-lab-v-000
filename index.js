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

function addToCart(new_item) {
  var num = Math.floor(Math.random() * 100);
  cart.push({[new_item]: num});
  console.log(new_item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var array = [];
  if (cart.length == 0) {
    return console.log("Your shopping cart is empty.");
  }
  for (var num = 0; num < cart.length; num++) {
    var hash = cart[num];
    var key = Object.keys(hash)[0];
    var value = hash[key];
    array.push(`${key} at \$${value}`)
  }
  console.log(`In your cart, you have ${array.join(', ')}.`);
}

function removeFromCart(item) {
  var bool = false

  for (var num = 0; num < cart.length; num++) {
    if (cart[num].hasOwnProperty(item)) {
      bool = true
      cart = cart.slice(0, num).concat(cart.slice(num + 1))
    }
  }

  if (!bool) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(card_num) {
  if (!card_num) {
    return console.log("We don't have a credit card on file for you to place your order.");
  } 
  console.log(`Your total cost is $${total()}, which will be charged to the card ${card_num}.`);
  cart = [];
}