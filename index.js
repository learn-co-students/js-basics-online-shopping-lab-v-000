var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var array = [];
   for (var i = 0; i < cart.length; i++) {
     for (var item in cart[i]) {
       array.push(`${item} at $${cart[i][item]}`);
     }
   }
   if (cart.length < 1) {
     console.log('Your shopping cart is empty.');
   } else {
     console.log(`In your cart, you have ${array.join(", ")}.`)
   }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      total += cart[i][item]
    }
  }
  return total
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  }
}
