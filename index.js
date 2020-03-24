var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100 + 1)
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const l = cart.length
  if (!l) {
    console.log("Your shopping cart is empty.")
  }
  let itemsAndPrices = []
  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]
    itemsAndPrices.push(`${item} at $${price}`)
  }
  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ")
      break;
    default:
      itemsAndPrices[l - 1] = "and ".concat(itemsAndPrices[l - 1])
      itemsAndPrices = itemsAndPrices.join(", ")
  }
  console.log(`In your cart, you have ${itemsAndPrices}.`)
}

function total() {
  let totalCost = 0
  for (let i = 0; i < cart.length; i++) {
    totalCost += Object.values(cart[i])[0]
  }
  return totalCost
}

function removeFromCart(item) {
  let itemFound = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      itemFound = true
    }
  }
  if (!itemFound) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}
