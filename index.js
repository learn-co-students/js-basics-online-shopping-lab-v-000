var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function viewCart() { 
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var lst = "In your cart, you have ";
    for (var i = 0, len = cart.length; i < len; i++) {
      var items = Object.keys(cart[i])
      lst += (`${items} at $${cart[i][items]}, `);
    }
    lst = lst.replace(/,\W$/, ".");
    console.log(lst);
  }
}

function addToCart(item) {
  var thing = {};
  thing[item] = (Math.floor(Math.random() * 101));
  cart.push(thing);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function removeFromCart(item) {
  var found = false;
  for (var i = 0, len = cart.length; i < len; i++) {
    if (cart[i].hasOwnProperty(item)) {
      found = true;
      cart.splice(`${i}`, 1);
      break;
    } else {
      continue;
    }
  }
  if (found === false) {
    console.log ("That item is not in your cart.");
  }
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

function placeOrder(cc) {
  if (cc === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");   
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    cart = [];
  }
}


