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
  var object = {};
  var price= Math.floor(Math.random()*100);
  object[item] = price;
  cart.push(object);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (cart.length === 0) {
  console.log('Your shopping cart is empty.')
  } else {
  	var cart_items ="";
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        cart_items = cart_items.concat(`${item} at $${cart[i][item]}, `);
      }
    }
    cart_items = cart_items.substring(0,cart_items.length-2)+ '.'
  console.log('In your cart, you have ' + cart_items);
  }
}

function removeFromCart(item) {
	var init_cart_length = cart.length
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item) {
      cart.splice(i,1);
        }
    }
    var end_cart_length = cart.length
    if (init_cart_length === end_cart_length) {
    	console.log("That item is not in your cart.");
    }
    return cart;
}

function placeOrder(cardNum) {
  if (typeof cardNum === 'undefined') {
  	console.log("We don't have a credit card on file for you to place your order.");
  } else {
  	console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNum}.`)
  }
  cart.splice(0, cart.length);
}
