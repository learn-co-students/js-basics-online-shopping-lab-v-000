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
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]).first() === item) {
      delete cart[i];
        }
    }
    return cart;
}



