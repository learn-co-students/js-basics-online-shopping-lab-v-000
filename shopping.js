var cart = [];

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function setCart(arr){
  cart = arr;
}

function addToCart(item){
  var lineItem = {};
  price = Math.floor((Math.random() * 100) + 1);
  lineItem[item] = price ;
  cart.push(lineItem)
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){

  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  var cartItems = [];

  for (var i = 0; i < cart.length; i++) {
    item = cart[i];
    key = Object.keys(item);
    value = item[key];
    cartItems.push(key + " at $" + value);
  }

  console.log("In your cart, you have " + cartItems.join(", ") + ".");
}

function removeFromCart(item){
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber){
  if (typeof(cardNumber) == 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
}
}