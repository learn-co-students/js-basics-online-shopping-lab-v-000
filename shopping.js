var cart = []

function getCart() {
  return cart
}

function setCart(lineItems) {
  cart = lineItems;
  return cart
}

function addToCart(item) {

  var price = Math.floor(Math.random()*100);
  var product = {};
  product[item]= price;
  cart.push(product);
  console.log(item + " has been added to your cart.");
  return cart
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

function viewCart() {
  var cartView= "In your cart, you have ";
  var show = [];
  for(let i = 0, l = cart.length; i < l; i++){
    for (let product in cart[i]){
      show.push(product + " at " + "$"+cart[i][product]);
    }
  }
  console.log(cartView + show.join(", ") + ".");

}

function removeFromCart(item) {
  for(let i = 0, l = cart.length; i < l ; i++) {
    for (let product in cart[i]){
      if (product === item){
        var found = 1;
        delete cart[i];
      }
    }
  }
  if (found !== 0){
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = []
  }
}
