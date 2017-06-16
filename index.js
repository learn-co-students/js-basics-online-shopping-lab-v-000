var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var addItem = {[item]: Math.floor(Math.random() * 100)}
 cart.push(addItem);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  var cartStr = []
  var itemName

  if (cart.length == 0) {
   console.log('Your shopping cart is empty.');
  } else {
   for (var i = 0, l = cart.length; i < l; i++) {
    itemName = Object.keys(cart[i])[0]
    var itemValue = cart[i][itemName]
    cartStr.push(`${itemName} at $${itemValue}`)
   }
   console.log(`In your cart, you have ${cartStr.join(', ')}.`)
  }

}

function total() {
  // write your code here
  var totalCost = []
  var itemCost

  for (var i = 0, l = cart.length; i < l; i++) {
   var itemName = Object.keys(cart[i])[0]
   itemCost = cart[i][itemName]
   totalCost.push(itemCost)
  }

  return totalCost.reduce(function(prev, cur) {
   return prev + cur;
  });

}

function removeFromCart(item) {
  // write your code here
  for (var i = 0, l = cart.length; i < l; i++) {
   var obj = cart[i]
   if (obj.hasOwnProperty(item)) {
     cart.splice(i, 1)
	    return cart;
   }
  }
  console.log(`That item is not in your cart.`)
}


function placeOrder(cardNumber) {
  // write your code here

  if (isNaN(cardNumber)) {
   console.log("We don't have a credit card on file for you to place your order.")
  } else {
   var t = total();
   console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
   cart.length = 0;
  }
}
