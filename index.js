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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 10);
  var items = {[item]: price};
  cart.push(items);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    let items = []
    
    cart.forEach(function(resources) {
      for (var item in resources) {
        items.push(item + " at $" + resources[item]);
      }
    });
     console.log(`In your cart, you have ${items.join(", ")}.`);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  var itemInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice([i], 1);
    } 
  };
  if (itemInCart === false) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
  cart = [];
}

