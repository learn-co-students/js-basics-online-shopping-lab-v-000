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
  var randomPrice = Math.floor(Math.random() * 101);
  var obj = {};
  obj[item] = randomPrice;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    var myString = "In your cart, you have ";
    for (var i = 0, n = cart.length; i < n; i++) {
    		for (var key in cart[i]) {
          myString += (key + " at $" + cart[i][key] + ", ");
        }
    }
    console.log(myString.slice(0, myString.length - 2) + ".");
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(name) {
  var hasProp = false;
  cart.forEach(function(obj, i){
    if (obj.hasOwnProperty(name)) {
      cart.splice(cart[i], 1)
      hasProp = true;
    }
  })
  if (hasProp == false) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
