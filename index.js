var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1;
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const l = cart.length;
  if (l === 0) {
    return console.log(`Your shopping cart is empty.`);
  }
  let itemsArray = [];
  for (let i = 0; i < l; i++) {
    let itemPrice = cart[i];
    let item = Object.keys(itemPrice)[0];
    let price = itemPrice[item];
    itemsArray.push(`${item} at $${price}`);
  }
  switch(itemsArray.length) {
    case 1:
      break;
    case 2:
      itemsArray = itemsArray.join(" and ");
      break;
    default:
      itemsArray[l-1] = "and ".concat(itemsArray[l-1]);
      itemsArray = itemsArray.join(", ");
  }
  console.log(`In your cart, you have ${itemsArray}.`);
}

function total() {
  let t = 0;
  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]){
      t += cart[i][item];
    }
  }
  return t;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart =[];
  }
}
