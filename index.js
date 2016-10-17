var cart = [];
var itemsAndPrices = [];


function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function checkCart(item) {
  let i, l = cart.length;
  for(i = 0; i < l; i++ ){
    if(cart[i].hasOwnProperty(item)){
      return true;
    }
  }
  return false;
}

function addToCart(item) {
 if(!checkCart(cart, item)){
    let obj = {};
    obj[item] = Math.floor(Math.random() * 100);
    cart.push(obj);
  }
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (!cart.length){
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++){ 
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)[0]
      let price = itemAndPrice[item]
      itemsAndPrices.push(`${item} at \$${price}`)
    }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}}

function removeFromCart(item){
    for (let i in cart){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cc) {
  if (typeof cc == "undefined" ){
    console.log("We don't have a credit card on file for you to place your order.");
  }else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
  setCart([]);
  }
}


function total() {
  var t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}