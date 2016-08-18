var cart = [];

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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var cart_items = []
    for(var i = 0; i < cart.length; i++){
      for(let key in cart[i]) {
        cart_items.push(`${key} at $${cart[i][key]}`)
      }
    }
    console.log(`In your cart, you have ` + cart_items.join(", ") + ".")
  }
}

function removeFromCart(item) {
  var inCart = false;
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      inCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
  if (!inCart){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(number) {
    if (number === undefined) {
      return console.log("We don't have a credit card on file for you to place your order.");
    } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
    }
    cart = [];
}
