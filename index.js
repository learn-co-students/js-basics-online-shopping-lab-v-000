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

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({ [item]: price });
  console.log(item + " has been added to your cart.");
  return cart;   // ex. [{socks: 10}, {puppy: 75}, {iPhone: 88}];
}

// * Alternative Solution for 'addToCart':

// function addToCart(item) {
//   let newItemHash = {}  // Re-instantiates new hash each time new item is added.
//   newItemHash[item] = Math.floor(Math.random() * 100);
//   cart.push(newItemHash);
//   console.log(item + " has been added to your cart.");
//   return cart;   // ex. [{socks: 10}, {puppy: 75}, {iPhone: 88}];
// }

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var cartStatus = [];
    // ex. var cart = [{socks: 10}, {puppy: 75}, {iPhone: 88}];

    for (let i = 0; i < cart.length; i++) {
      let itemPriceHash = cart[i];               // ex. {socks: 10}
      let item = Object.keys(itemPriceHash)[0]   // ex. "socks"
      let price = itemPriceHash[item]            // ex. 10
      cartStatus.push(`${item} at \$${price}`)
    }
    console.log(`In your cart, you have ${cartStatus.join(", ")}.`);
  }
}

function removeFromCart(item) {
  let itemExists = false;
  // ex. var cart = [{socks: 10}, {puppy: 75}, {iPhone: 88}];
  
  cart.forEach(function(object, index) {
    if (object.hasOwnProperty(item)) {
      cart.splice(index, 1); // Removes 1 element from current index, modifies 'cart' array
      itemExists = true; // Makes sure the following statement does not get printed.
    }
  });
  
  if (!itemExists) {
    console.log("That item is not in your cart.");
  }
  
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];     // Empties the 'cart' array.
  }
}