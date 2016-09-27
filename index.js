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
  var price = Math.floor(Math.random() * 10);
  var items = {[item]: price};
  cart.push(items);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    let items = []
    
    cart.forEach(function(resources) {
      for (var item in resources) {
        items.push(item + " at $" + resources[item]);
      }
    });
     console.log(`In your cart, you have ${items.join(", ")}.`);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  var itemInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice([i], 1);
    } 
  };
  if (itemInCart === false) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
  cart = [];
}

