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

function getCart() {
  return cart;
}

function addToCart(item) {
  const price = Math.floor((Math.random() * 100) + 1);
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function removeFromCart(item) {
  const itemsInCart = cart.length
  for (let i = 0; i < itemsInCart; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
    }
  }

  if (cart.length === itemsInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function viewCart() {
  if (!cart.length) {
    return console.log("Your shopping cart is empty.");
  }

  const itemsAndPrices = [];
  cart.forEach(function(item) {
    var itemName = Object.keys(item);
    itemsAndPrices.push(`${itemName} at $${item[itemName]}`);
  });

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
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

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
