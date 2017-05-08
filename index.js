var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor (Math.random () * 100);
  var itemList  = {[item]: price};
cart.push (itemList);
console.log(`${item} has been added to your cart.`);
return cart
  }


function viewCart() {
var cartItems =[];
  if (getCart().length > 0) {
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart [i]) {
      cartItems.push (`${item} at $${cart [i] [item]}`)
    }
  }
  console.log (`In your cart, you have ${cartItems.join (", ")}.`)
} else {
    console.log (`Your shopping cart is empty.`)
  }
}

function total() {
var totalCost = 0;
var i, item;
for (let i = 0; i < cart.length; i++){
  for (item in cart [i]){
    totalCost += Math.floor (cart [i][item]);
  }
  }
return totalCost
}

function removeFromCart(item) {
for ( var name in cart){
  if (cart [name].hasOwnProperty(item)){
  cart.splice (name, 1)
return cart
}
}
console.log ("That item is not in your cart.")
}

function placeOrder(cardNumber) {
if ( ! cardNumber) {
console.log ("We don\'t have a credit card on file for you to place your order.")
} else {
console.log (`Your total cost is $${ total() }, which will be charged to the card ${cardNumber}.`)
setCart ([])
}
}
