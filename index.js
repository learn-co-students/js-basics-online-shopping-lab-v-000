var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 0);
  cart.push({[item]: price})
  console.log(item + ' has been added to your cart.')
  return cart
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else {
    for (var cartName in cart) {
      console.log("In your cart you have ${cartName} at ${cart[cartName]}")
    }
  }
}

function total() {
  for (var i=0, l=Object.values(cart).lenght, sum = 0; i < l; sum += cart[i++]) {

  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
