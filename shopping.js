var cart = [];

function getCart() {
  return cart;
}

function setCart(cartArray) {
  cart = cartArray;
}

function addToCart(item) {
  var min = 0, max = 100; 
  var price = Math.floor(Math.random() * (max - min + 1)) + min;

  cart.push({item: price});
  console.log(item+" has been added to your cart.");
  return cart;
}

function viewCart() {

  if (cart.length <= 0) {
    return "Your shopping cart is empty.";
  } else {
    for (var i = cart.length; i > 0; i--) {
      item = Object.keys(cart[i]);
      
      console.log("In your cart you have "+cart[i].item+".");
    }
  }
}

function removeFromCart(item) {
  if (cart.length > 0) {
    for (var i = 0, i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)){
        delete cart[i];
        cart.shift;
      }
    }
  } else {
      return "That item is not in your cart.";
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    return "Your total cost is "+total()+", which will be charged to "+cardNumber+".";
    cart = [];
  } else {
    return "We don't have a credit card on file for you to place your order.";
  }
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t;
}

