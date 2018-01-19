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
  var price = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (Object.keys(cart).length === 0) {
      console.log("Your shopping cart is empty.")
  } else {
    var itemString = []
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        itemString.push(`${item} at \$${cart[i][item]}`);
      }
    }
    console.log(`In your cart, you have ${itemString.join(', ')}.`)
  }
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      var found = true;
    }
  } if (found !== true){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([]);
  }
}
