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
  var array = [];
  if (cart.length == 0){
    console.log("Your shopping cart is empty.")
  } else {
    for (var i=0; i < cart.length; i++) {
      var cost = Object.keys(cart[i]).map(function(key) {return cart[i][key]});
      array.push(" " + Object.keys(cart[i]) + " at $" + cost)
    }
    console.log("In your cart, you have" + array + ".")
  }
}

function total() {
  var array = [];
  var total = 0;
  for (var i=0; i < cart.length; i++) {
    var cost = Object.keys(cart[i]).map(function(key) {return cart[i][key]});
    array.push(cost[0])
  }
  for(var i in array) {total += parseInt(array[i])}
  return total
}

function removeFromCart(item) {
  for (var i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
    } else {
      console.log("That item is not in your cart.")
      break;
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
