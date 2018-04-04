var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * (100 - 1) + 1);
 cart.push({ [itemName]: itemPrice });
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var array = []
  var length = cart.length
  if (length > 0 && length < 3){
    for (var i = 0; i < length; i++) {
      array.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
    if (array.length > 1) {
      array.splice(array.length - 1, 0, "and")
    }
  console.log (`In your cart, you have ${array.join(" ")}.`)
  } if (length >= 3){
    for (i = 0; i < length - 1; i++) {
      array.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
  array.push(`and ${Object.keys(cart[length - 1])} at $${cart[length - 1][Object.keys(cart[length - 1])]}`)
  console.log (`In your cart, you have ${array.join(", ")}.`)
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function total() {
  var values = [];

  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (cart[i].hasOwnProperty(key)) {
        values.push(cart[i][key]);
      }
    }
  }

  var sum = values.reduce(add, 0)

  function add (a, b) {
    return a + b
  }

  return sum
}

function removeFromCart(item) {
  var array = []
  for (var i = 0; i < cart.length; i ++) {
    array.push(`${Object.keys(cart[i])}`);
  }
  var index = array.indexOf(item);
  if (index == -1) {
    console.log("That item is not in your cart.")
  } else {
    cart.splice(index, 1);
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart.splice(0);
}
