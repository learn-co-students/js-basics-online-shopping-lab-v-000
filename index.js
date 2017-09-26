var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const a = item
  var ran = Math.floor(Math.random()*100)+1
  cart.push({[a]:ran})
  console.log(a + " has been added to your cart.")
  return cart
}

function viewCart() {
  if (cart.length == 0){
    console.log ("Your shopping cart is empty.")
  }
  else {
    var len = cart.length
    var b = 0
    var list = ""
    for (; len>0; len--){
      var keyList = Object.keys(cart)
      var n = keyList[b]
      const itemCost = getCart()[b][n]
      var list = list + n + " at $" + itemCost +"."
      b++
    }
    console.log ("In your cart, you have " + list)
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
