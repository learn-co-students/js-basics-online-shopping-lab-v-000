var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 // cart[item] = Math.floor(Math.random() * 10)
 cart.push( { [item]:(Math.floor(Math.random() * 10)) } );
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  // write your code here
  var cartArray = []
  if (getCart().length > 0) {
    for (var i = 0; i < cart.length; i++) {
      for (var cartItem in cart[i]) {
        cartArray.push(`${cartItem} at $${cart[i][cartItem]}`)
      }
    }
    console.log("In your cart, you have " + cartArray.join(', ') + ".")
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
  var sum = 0
  for (var i = 0; i < cart.length; i++) {

    var vals = Object.keys(cart[i]).map(function(key) {
      return cart[i][key];
    });
    sum += vals[0]
    // for (var value in cart[i]) {
    //   sum += value[i]
    // }
  }
  return sum
}

// function removeFromCart(item) {
//   // write your code here
//   for (var i = 0; i < cart.length; i++) {
//     if (cart[i].hasOwnProperty([item]) == true) {
//       cart.splice(i,1)
//     } else {
//       console.log("That item is not in your cart.")
//       // "That item is not in your cart."
//     }
//   }
//   return cart
// }


function removeFromCart(item) {
  // write your code here
  var foundItem = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item]) == true) {
      foundItem = true;
      cart.splice(i,1)
    }
  }
  if (foundItem = false) {
    console.log('That item is not in your cart.')
    // return "That item is not in your cart."
  } else {
    return cart
  }
}

// function lookForThing(array, thing){
//   var foundIt = false;
//   for (blah; blah; blah;){
//     if (array[i] == thing){
//       foundIt = true;
//     }
//   }
//   return foundIt
// }

function placeOrder(cardNumber) {
  // write your code here
  if () {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}

