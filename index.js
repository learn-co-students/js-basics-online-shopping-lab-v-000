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

function getCart() {
  return cart
}

function addToCart(item) {
  const price = Math.floor(Math.random()*100);
  cart.push({ [item]: price} );
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var allItems = []
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        allItems.push(`${item} at \$${cart[i][item]}`)
      }
    }
    console.log(`In your cart, you have ${allItems.join(", ")}.`)
  }

}

function removeFromCart(item) {
  let itemInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      itemInCart = true
    }
    return cart
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
    
}

function placeOrder(creditCardNum) {
  if (!creditCardNum) {
    console.log("We don\'t have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${creditCardNum}.`)
    cart = []
  }
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
