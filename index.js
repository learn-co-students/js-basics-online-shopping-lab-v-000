var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  console.log(price)
  var item2 = {}
  item2[item] = price
  cart.push(item2)
  var str = `${item} has been added to your cart.`
  console.log(str)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
  console.log( "Your shopping cart is empty.")}
  else {
  var str = "In your cart, you have ";
  for (var i = 0; i < cart.length; i ++) {
    var item = cart[i];
    var key = Object.keys(item);
    var price = item[key];
    if (cart.length === 1) {
      str += `${key} at $${price}.`;
    } else if (i === (cart.length - 1)) {
      str += `and ${key} at $${price}.`;
    } else if (cart.length === 2) {
      str += `${key} at $${price} `;
    } else
    { str += `${key} at $${price}, `;}
  }

  console.log(str); }
  // write your code here
}



function total() {
  var total = 0
  for (var i = 0; i < cart.length; i ++) {
    var item = cart[i]
    var key = Object.keys(item)
    total += parseInt(item[key])

  }
  return total
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i ++) {
    var thing = cart[i]
    if (thing.hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    }}
  console.log( "That item is not in your cart.")
  return cart;

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  // write your code here
}
