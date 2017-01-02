var cart = [];
var items = {};

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
};

function getCart() {
  return cart;
};

function addToCart(item_name) {
  var item = {};
  item[item_name] = (Math.random() * 100);
  cart.push(item)

  console.log(item_name + " has been added to your cart.");
  return cart;
};

function viewCart() {
  var item_printer = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  };
  //really should have used a for loop for the cart array then for in loop for the individual objects
  for (var key in cart) {
    var value = cart[key][Object.keys(cart[key])]
    item_printer.push(Object.keys(cart[key]) + " at " + "$" + value.toString());
  };
  console.log("In your cart, you have " + item_printer.join(", ") + ".");
};

function removeFromCart(item) {
  var index = cart.map(function(object, index) {
    if (Object.keys(object) == item) {
      return index;
    };
  });

  if (index.length > 0) {
    cart.splice(index[0], 1);
      //debugger;
    return cart;
  } else {
    console.log("That item is not in your cart.");
  };

  //cart.indexOf()

  //var finder = cart.filter(function(o){ return Object.keys(o) == item });
};

function placeOrder(cc) {
  if (cc) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    cart = [];
  } else {
    debugger;
    console.log("We don't have a credit card on file for you to place your order.");
  };
};
