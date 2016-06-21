var cart = [];

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t;
};

function getCart() {
  return cart;
};

function setCart(cartArray) {
  cart = cartArray;
};

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*100);
  cart.push({[item]: itemPrice});
  console.log(item + " has been added to your cart.");
  return cart;
  //cart is an array
    // [{[socks]: 20}, {[iPod]: 100}]
};

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var cartItemPairs = [];
    //each item in array [{key: price}, {key: price}]
    //get each item-price pair by index
    for (var index in cart) {
      var itemPair = cart[index];
      //get each item name and price
      for (var key in itemPair) {
        cartItemPairs.push(key + " at $" + itemPair[key]);
      }
    }
    var cartItems = cartItemPairs.join(", ");
    var finalCart = "In your cart, you have " + cartItems + ".";
    console.log(finalCart);
  }
};

function removeFromCart(itemName) {
  var deletedItemName = [];
  // loop over every item in cart array by index
  for (var index in cart) {
    var itemPair = cart[index];
    //loop to check every key (item name) in cart
    for (var key in itemPair) {
      //note the deleted item and remove from cart array
      if (key === itemName) {
        deletedItemName.push(key);
        cart.splice(index, 1);
      }
    }
  }
  // check if any item was deleted
  if (deletedItemName.length === 0) {
    console.log("That item is not in your cart.");
  }
  return cart;
};

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
  }
};
