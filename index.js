var cart = [];
var emptyCart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var lineItem = {};
  lineItem[`${item}`] = Math.floor(Math.random() * 100);
  cart.push(lineItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0) {
    return console.log(`Your shopping cart is empty.`);
  }

  var cartContents = [];

  for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i];
    let item = Object.keys(cartItem);
    let price = cartItem[item];

    cartContents.push(`${item} at $${price}`);
  }
  console.log(`In your cart, you have ${cartContents.join(', ')}.`);
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    let checkCart = cart[i];
    let checkItem = checkCart.hasOwnProperty(item);
      if (checkItem === true) {
        cart.splice(i, 1);
        return `${item} has been removed.`;
      }
  }
  return console.log('That item is not in your cart.');
}

function placeOrder(creditCardNumber) {
  if (creditCardNumber === undefined) {
    return console.log('We don\'t have a credit card on file for you to place your order.');
  } 

  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)

  setCart(emptyCart)
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}