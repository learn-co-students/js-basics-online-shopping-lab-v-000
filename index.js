var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]:itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const l = cart.length;

  if (l === 0) {
    return console.log("Your shopping cart is empty.");
  }

  var itemAndPrice = []

  for (var i = 0; i < l; i++) {
    var itemName = Object.keys(cart[i])[0];
    itemAndPrice.push(`${itemName} at $${cart[i][itemName]}`)
  }

  switch(itemAndPrice.length) {
    case 1:
      break;
    case 2:
      itemAndPrice = itemAndPrice.join(" and ");
      break;
    default:
      itemAndPrice[l - 1] = "and ".concat(itemAndPrice[l - 1]);
      itemAndPrice = itemAndPrice.join(", ");
  }
  console.log(`In your cart, you have ${itemAndPrice}.`)
}

function total() {
  var tot = 0;
  const l = cart.length
  for (var i = 0; i < l; i++) {
    for (var itemName in cart[i]) {
      tot += cart[i][itemName]
    }
  }
  return tot
}

function removeFromCart(item) {
  //multiple variable assignment in for loop conditions
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
