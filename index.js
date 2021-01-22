var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({ [item]: Math.floor(Math.random() * 100) })
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var c = cart.length;
  var response = 'In your cart, you have ';
  if (c != 0){
    for (let i = 0; i < c; i++) {
      response += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}, `;
    }
      console.log(response.substring(0,response.length - 2) + '.');
  }
  else {
    console.log('Your shopping cart is empty.');
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
      total += Object.values(cart[i])[0];
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item) {
        cart.splice(i,1);
        break
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('We don\'t have a credit card on file for you to place your order.');
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (let i = 0; i < cart.length; i++) {
      removeFromCart(Object.keys(cart[i])[0]);
    }
  }
  return cart;
}
