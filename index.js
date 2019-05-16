var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName = item;
 var itemPrice = (Math.random() * 100);
 var newItem = { [itemName]: Math.floor(itemPrice) }
 cart.push(newItem)
 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var list = [];
  for (let i = 0; i < cart.length; i++) {
    var item = cart[i];
    for (var item in cart[i]) {
      list.push(`${item} at $${cart[i][item]}`)
    }
  }
  if (cart.length === 2) {
    var output = list.join(" and ")
    console.log(`In your cart, you have ${output}.`)
  } else if (cart.length > 2) {
    var lastItem = list.pop();
    var otherItems = list.join(", ");
    var output = otherItems + ", and " + lastItem;
    console.log(`In your cart, you have ${output}.`)
  } else {
    console.log(`In your cart, you have ${list}.`)
  }
}


function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    var item = cart[i];
    for (var item in cart[i]) {
      var total = total += cart[i][item]
    }
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
