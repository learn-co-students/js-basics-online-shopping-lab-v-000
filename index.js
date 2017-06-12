var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.random();
  Math.floor(price);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {

   if (cart.length == 0) {
    return console.log("Your shopping cart is empty.")
   }

   const itemAPrice = []

   for (let i = 0; i < cart.length; i++) {
     let itemPrice = cart[i]
     let item = Object.keys(itemPrice)[0]
     let price = itemPrice[item]

     itemAPrice.push(`${item} at \$${price}`)
   }

   console.log(`In your cart, you have ${itemAPrice.join(', ')}.`)
 }



function total() {
  var totalprice =0;
  for (var i=0; i<cart.length; i++) {
    for (var item in cart[i]){
      totalprice += cart[i][item];
    }
}
return totalprice;

}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++) {
    if (item = cart[i])
    {
      cart.pop(item);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
if (!cardNumber) {
  console.log("We don't have a credit card on file for you to place your order.");
}
else { console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}

}
