cart = [];

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function setCart(array){
  cart = array;
}

function addToCart(item){
  var object = {};
  var price = Math.random() * 100;
  price = Math.floor(price)
  object[item] = price;
  cart.push(object);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (cart.length != 0) {
    var cartItems = "In your cart, you have";
    for (var i = 0; i < cart.length; i ++){
      for (var key in cart[i]){
        cartItems = cartItems + ` ${key} at $${cart[i][key]},`;
      }
    }
    cartItems = cartItems.replace(/,$/, "") + ".";
    console.log(cartItems);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item){
  var cartLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    } 
  }
  if (cartLength == cart.length){
      console.log("That item is not in your cart.");
    }
}

function placeOrder(cardNumber){
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0;
    return cart;
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}

