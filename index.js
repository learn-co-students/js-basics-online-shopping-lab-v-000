var cart = [];

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
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var price = getRandomIntInclusive(0, 100);

  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
    if(!cart.length) {
        return console.log("Your shopping cart is empty.")
    }
    var cartContains = [];
    for (var i = 0; i < cart.length; i++) {
      for(var cartItems in cart[i]) {
        cartContains.push(cartItems + ' at $' + cart[i][cartItems]);

      }
     console.log(`In your cart, you have ${cartContains.join(', ')}.`);

  }

}


function removeFromCart(itemRemoved) {
  var inCart = false;
  for (var i = 0; i<cart.length; i++) {
      if(cart[i].hasOwnProperty(itemRemoved)) {
        inCart = true;
        cart.splice(i, 1);

      }


  }
  if(!inCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  var isCardNumber = parseInt(cardNumber);

  if(cardNumber === isCardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {

    console.log("We don't have a credit card on file for you to place your order.");
  }
}
