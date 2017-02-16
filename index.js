var cart;

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
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

function addToCart(item) {
  console.log(`${item} has been added to your cart.`);
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var x = "In your cart, you have";
    var n = 0
    while (n < cart.length) {
      if (n != (cart.length - 1)) {
        for (var itemName in cart[n]) {
          var x = x + ` ${itemName} at $${cart[n][itemName]},`;
          n++;
        }
      } else {
        for (var itemName in cart[n]) {
          var x = x + ` ${itemName} at $${cart[n][itemName]}.`;
          n++;
        }
      }
    }
  }
  console.log(x)
}

function removeFromCart(item) {
  var remove = null;
  for(let i = (cart.length - 1); i >= 0; i--) {
    if(cart[i].hasOwnProperty(item)) {
      var remove = i;
    }
  } if(remove != null) {
    cart.splice(remove, 1);
  } else {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(card) {
  if(card) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
    for(let n = (cart.length - 1); n >= 0; n--) {
      cart.pop();
    }
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
