var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  let newItem = {}
  newItem[item] = Math.floor(Math.random()*100);
  cart.push(newItem);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }
  else {  
    let sentence = [];
    cart.forEach(function(object, index) {
    let name = Object.keys(cart[index])[0]
    let price = Object.keys(cart[index])[0]
    sentence.push(name + " at " + "$" + cart[index][price]);
    });
  console.log(`In your cart, you have ${sentence.join(", ")}.`);
  }
}

function removeFromCart(item) {
  let itemExists = false;
  cart.forEach(function(object, index) {
    if (object.hasOwnProperty(item)) {
      cart.splice(index, 1);
      itemExists = true;
    }
  });
  if (!itemExists) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}