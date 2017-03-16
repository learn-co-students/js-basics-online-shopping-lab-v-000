var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(!cart || cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var stringCapture = [];
    for(let i = 0; i < cart.length; i++) {
      for(var name in cart[i]) {
        stringCapture.push(`${name} at $${cart[i][name]}`);
      }
    }
    console.log(`In your cart, you have ${stringCapture.join(', ')}.`);
  }
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    for(var itemName in cart[i]) {
      if(itemName === item) {
        var newCart = [...cart.slice(0, i), ...cart.slice(i+1)];
      }
    }
  }
  if (!newCart) {
    console.log('That item is not in your cart.');
  } else {
    cart = newCart;
    return cart;
  }
}

function placeOrder(creditCard) {
  if (!creditCard) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart.length = 0;
  }
}