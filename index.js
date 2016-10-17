var cart;

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

  return t;
}

function getCart() {
  return cart;
}

function checkCart(item) {
  let i, len = cart.length;
  for(i = 0; i < len; i++ ){
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
  if (cart.length != 0) {
  var newCart = []
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      newCart.push(` ${item} at $${cart[i][item]}`);
    }
  }

  console.log("In your cart, you have" + newCart +".");
}
  console.log("Your shopping cart is empty.");
}

function removeFromCart(item) {
  for (let i in cart){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }

    }
    console.log("That item is not in your cart.");
}

function placeOrder(creditCNum) {
  if (typeof creditCNum == "undefined" ){
    console.log("We don\'t have a credit card on file for you to place your order.");
  }else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCNum}.`);
  setCart([]);
}
}
