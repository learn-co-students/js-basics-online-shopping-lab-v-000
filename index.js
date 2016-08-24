var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random());
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function viewCart() {
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.");
   } else {
     var currentItems = [];
     for (let i = 0; i < cart.length; i++) {
       for (let key in cart[i]) {
         currentItems.push(`${key} at $${cart[i][key]}`);
       }
     }
     console.log(`In your cart, you have ` + currentItems.join(", ") + "."); 
   }
 }


function removeFromCart(item) {
  let itemInCart
   for (let i = 0, l = cart.length; i < l; i++) {
     if (cart[i].hasOwnProperty(item)) {
       itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
     }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
 return cart
}

function placeOrder(cardNumber) {
   if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
   }
   cart.length = 0
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}

function total() {
  let t = 0
  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}


