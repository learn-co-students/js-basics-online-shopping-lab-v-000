var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(item+" has been added to your cart.");
  return cart;
}
function viewCart() {
  var preface = 'In your cart, you have ',
  body = new String();
  if (cart.length > 0) {
    for (var item in cart) {
      for (var thing in cart[item]) {
        body+=`${thing} at $${cart[item][thing]}, `;
      }
    }
  console.log(preface+body.replace(/, $/g,"."));
  }
  else {console.log("Your shopping cart is empty.")}
}

function removeFromCart(item) {
    var old_length = cart.length;
    for (var value in cart) {
        if (cart[value].hasOwnProperty(item)) {
            cart.splice(value,1);
        }
    }
    if (cart.length == old_length) {
        console.log("That item is not in your cart.")
    }
    else {return cart;}
  }

function total() {
    var total = 0;
    for (var item in cart) {
        for (var value in cart[item]) {
            total += cart[item][value];
        }
    }
    return total;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
