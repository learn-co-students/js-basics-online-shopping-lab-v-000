var cart = [];

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

function setCart(arr) {
  cart = arr;
  return cart;
}

function addToCart(item) {
  var cartItem = {};
  cartItem[item] = Math.floor(Math.random(0,1) * 100);
  cart.push(cartItem);
  console.log(item + " has been added to your cart.");
  debugger;
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++) {
      for (let itemName in cart[i]) {
        //need to revisit
        const socksCost = getCart()[0]["socks"];
        const puppyCost = getCart()[1]["puppy"];
        const iPhoneCost = getCart()[2]["iPhone"];
        console.log(`In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone at $${iPhoneCost}.`)
      }
    }
  }
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    for (let name in cart[i]) {
      if (name === item) {
        delete cart[i];
        return cart;
      } 
    }
  } 
  console.log("That item is not in your cart.");
}

function placeOrder(cc) {
  if (typeof cc == 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" +total()+ ", which will be charged to the card " +cc+ ".")
    cart = [];
  }
}