var cart = [];

function total() {
  var t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var lineItem = {};
  price = Math.floor((Math.random() * 100) + 1);
  lineItem[item] = price;
  console.log(item + "has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length == 0){
    console.log("Your shopping cart is empty");
  } else {
    for (var i = 0; i < cart.length; i++){ 
      for (var ket in cart[i]) {
      console.log("In your cart you have: " + key + " $" + cart[i][key]);
}}}
}