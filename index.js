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

  return t
}

function getCart (){
  return cart
}

function addToCart (item){
  var randomNumber = Math.floor(Math.random() * (10));
  var hash = {};
  hash[item] = randomNumber;
  cart.push(hash);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var items = [];
    for (let i = 0; i < cart.length; i++){
      for (let key in cart[i]) {
        items.push(`${key} at $${cart[i][key]}`);
      }
    }
    console.log(`In your cart, you have ` + items.join(", ") + ".")
  }
}

function removeFromCart(name){
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      if (key === name) {
        cart.splice(i, 1);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(number){
  if (number === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
  }
  return cart = [];
}
