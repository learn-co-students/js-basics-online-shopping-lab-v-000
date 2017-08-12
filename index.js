var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;

  cart.push({ [item]: price });

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  var newCart = []
   if (cart.length > 0) {
     for (let i = 0; i < cart.length; i++) {
       newCart.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
     }
     if (newCart.length == 1) {
       console.log(`In your cart, you have ${newCart[0]}.`)
     } else if (newCart.length == 2) {
       console.log(`In your cart, you have ${[newCart.slice(0, -1).join(', '), newCart.slice(-1)[0]].join( ' and ')}.`)
     } else {
       console.log(`In your cart, you have ${[newCart.slice(0, -1).join(', '), newCart.slice(-1)[0]].join(', and ')}.`)
     }
   } else {
     console.log(`Your shopping cart is empty.`)
   }
}

function total() {
  let t = 0;

   for (let i = 0, l = cart.length; i < l; i++) {
     for (let item in cart[i]) {
       t += cart[i][item];
     }
   }

   return t;
}

function removeFromCart(item) {
    for (let i = 0; i < cart.length; i++){
       if (cart[i].hasOwnProperty(item)) {
         cart.splice(i, 1)
         return cart
       }
     }
     console.log(`That item is not in your cart.`)
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
