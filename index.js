var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 10);
  var items = {[item]: price};
  cart.push(items);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.");
   } else {
     var items = [];
     for (let i = 0; i < cart.length; i++) {
       for (let key in cart[i]) {
         items.push(`${key} at $${cart[i][key]}`);
       }
     }
     console.log(`In your cart, you have ` + items.join(", ") + "."); 
   }
 }

 function removeFromCart(item) {
  var itemInCart;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      } 
    }
    if (!itemInCart) { 
      console.log("That item is not in your cart.");
    }
    return cart;
  }

  function placeOrder(creditCardNumber) {
    if (!creditCardNumber) {
      console.log("We don't have a credit card on file for you to place your order.");
    }
      cart.length = 0;
      console.log(`Your total cost is \$${total()}, which will be charged to the card ${creditCardNumber}.`);
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
