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
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var items = [];
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      items.push(item + " at $" + cart[i][item]);
    }
  }

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}

function removeFromCart(item) {
  var itemInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if (itemInCart == false) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    setCart([]);
  }
  return cart;
}
