var cart = [];

function getCart() {
  return cart;
}

function setCart(arg) {
  cart = arg;
  return cart;
}

function addToCart(item) {

var price = Math.floor(Math.random() * 100);
cart.push({[item]: price});
console.log(item + " has been added to your cart.")
return cart;

}

function viewCart() {
  if (cart.length > 0) {
    var out = [];
    cart.forEach(function(item) {
      var keys2 = Object.keys(item);
      out.push(keys2[0] + " at $" + item[keys2[0]]);
    });
    console.log("In your cart, you have " + out.join(", ") + ".");
  } else {
    console.log("Your shopping cart is empty.");
  }

}

function removeFromCart(item) {
var found = false;
  for (i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      delete cart[i];
      found = true;
    }
  }

if (found == false) {
  console.log("That item is not in your cart.");
}
return cart;

}

function placeOrder(order) {
  if (order) {
      console.log("Your total cost is $" + total() + ", which will be charged to the card " + order + "." );
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  cart = [];
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
