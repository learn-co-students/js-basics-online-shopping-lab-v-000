var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  console.log("boo!")
  cart.push({ itemName: item, itemPrice: Math.floor(Math.random()*100) })
  return `${item} has been added to your cart.`
}


function viewCart() {
  const cart = getCart()
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {

    let items = []
    for(let i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        items.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      } else {
        items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
    return `In your cart, you have ${items.join(", ")}`
  }
}

function total() {

  let total = 0
  for(let i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  let message = ''
  if (cardNumber) {
    message =  `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  } else {
    message = "Sorry, we don't have a credit card on file for you."
  }
  setCart([])
  return message
}
