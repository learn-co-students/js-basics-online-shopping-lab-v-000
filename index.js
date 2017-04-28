var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var cartItem = {}
 cartItem[`${item}`] = Math.floor((Math.random() * 100) + 1);
 cart.push(cartItem)
 console.log(`${item} has been added to your cart.`);
 return cart
}

function viewCart() {
  // write your code here
  if (!cart.length){
    console.log('Your shopping cart is empty.')
  } else {
    var current = [];
    for (var i=0; i < cart.length; i++){
      for (var cartName in cart[i]){
        current.push( cartName + ' at $' + cart[i][cartName]);
      }
    }
    console.log(`In your cart, you have ${current.join(", ")}.`)
  }
}

function total() {
  // write your code here
  var total = 0
  for (var i=0; i < cart.length; i++){
    for (var cartName in cart[i]){
      total += cart[i][cartName]
    }
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    console.log(`We don't have a credit card on file for you to place your order.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
