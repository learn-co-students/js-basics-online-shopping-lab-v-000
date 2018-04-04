var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 console.log(item + " has been added to your cart.");
 item = {[item]: Math.floor(Math.random() * 100)}
 cart.push(item)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length > 0){
    var res = "In your cart, you have "
    if (cart.length > 2){
      for (var i = 0; i < cart.length - 1; i++){
        Object.keys(cart[i]).forEach(key => {
          res += key + " at $" + cart[i][key] + ", ";
        })
      }
      res += "and " + Object.keys(cart[cart.length - 1])[0] + " at $" + cart[cart.length -1][Object.keys(cart[cart.length -1])[0]] + ".";
      console.log(res)
    } else if(cart.length === 2){
      res += Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + " ";
      res += "and " + Object.keys(cart[1])[0] + " at $" + cart[1][Object.keys(cart[cart.length -1])[0]] + ".";
      console.log(res)
    } else if(cart.length === 1) {
      console.log(res + Object.keys(cart[cart.length - 1])[0] + " at $" + cart[cart.length -1][Object.keys(cart[cart.length -1])[0]] + ".");
    }
  } else {
    console.log('Your shopping cart is empty.');
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i=0; i < cart.length; i++) {
    for(var key in cart[i]){
      total += cart[i][key];
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false;

  for (var i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      i--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
