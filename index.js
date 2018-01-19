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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart;
};

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart
};

function viewCart() {
  const l = cart.length

  if (!l) {
    console.log("Your shopping cart is empty.");
  }

  const itemPricePairs = []

  for (let i = 0; i < l; i++) {
    let itemPrice = cart[i]
    let item = Object.keys(itemPrice)[0]
    let price = itemPrice[item]

    itemPricePairs.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemPricePairs.join(', ')}.`)
};

function removeFromCart(item) {
  let isItemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      isItemInCart = true
      cart.splice(i, 1)
    }
  }

  if (!isItemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
};

function placeOrder(cardNum) {
  if (!cardNum) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNum + ".");
    cart.length = 0
  }
}