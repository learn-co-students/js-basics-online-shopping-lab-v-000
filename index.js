var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 getCart().push({ [item]: Math.floor(Math.random() * 100 + 1) })
 console.log(`${item} has been added to your cart.`)
 return getCart()
}

function viewCart() {
  if (!getCart().length) {
    console.log("Your shopping cart is empty.")
  } else if (getCart().length === 1) {
    console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${Object.values(getCart()[0])[0]}.`)
  } else if (getCart().length === 2) {
    console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${Object.values(getCart()[0])[0]} and ${Object.keys(getCart()[1])[0]} at $${Object.values(getCart()[1])[0]}.`)
  } else {
    const allItemsExceptLast = []
    for (let i = 0; i < getCart().length - 1; i++) {
      allItemsExceptLast.push(`${Object.keys(getCart()[i])[0]} at $${Object.values(getCart()[i])[0]}`)
    }
    console.log(`In your cart, you have ${allItemsExceptLast.join(', ')}, and ${Object.keys(getCart()[getCart().length - 1])[0]} at $${Object.values(getCart()[getCart().length - 1])[0]}.`)
  }
}

function total() {
  var totalCost = 0
  for (let i = 0; i < getCart().length; i++) {
    totalCost += Object.values(getCart()[i])[0]
  }
  return totalCost
}

function removeFromCart(item) {
  var itemFound = false
  for (let i = 0; i < getCart().length; i++) {
    if (getCart()[i].hasOwnProperty(item)) {
      getCart().splice(i, 1)
      itemFound = true
    }
  }
  if (!itemFound) {
    console.log("That item is not in your cart.")
  }
  return getCart()
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}
