var cart;
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

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.random();
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var cartItems = Object.keys(cart)
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  }else{
    for (var cartItem in cart){
      console.log(`In your cart you have ${cart[cartItem]} at $${price}`)
    }
  }
}

// function removeFromCart(item){
//
// }
//
// function placeOrder(ccnumber){
//
// }
