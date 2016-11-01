var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100));
  var newItem = {[item]: price};
  cart.push(newItem);
  console.log(item + ' has been added to your cart.')
  return cart;
}

function viewCart() {
  var cartPairs = [];
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      cartPairs.push(`${item} at $${cart[i][item]}`);
    }
 }

   if (cart.length < 1) {
     console.log("Your shopping cart is empty.");
   } else {
     var printOut = "In your cart, you have " + cartPairs.join(', ') + ".";
     console.log(printOut);
    }
   }



 // function viewCart() {
 //   var clause = [];
 //   for (var i = 0, l = cart.length; i < l; i++) {
 //     for (var item in cart[i]) {
 //       clause.push(`${item} at $${cart[i][item]}`);
 //     }
 //   }
 //   if (cart.length == 0) {
 //     console.log("Your shopping cart is empty.");
 //   } else {
 //     var string = clause.join(", ");
 //     console.log("In your cart, you have " + string + ".");
 //   }
 // }


function removeFromCart(item) {
  var foundIt = [];

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
       cart.splice(i, 1);
       foundIt.push("yes");
    }
    return cart;
  }
  if (foundIt.length < 1 ) {
    console.log("That item is not in your cart.");
  }
}


function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
} else {
   console.log("We don't have a credit card on file for you to place your order.");
 }
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}
