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
  var price = Math.floor(Math.random() * 10);
  var pair = {};
  pair[item] = price;
  cart.push(pair);
  console.log(item +" has been added to your cart.");
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }
  else{
    var itemPair = [];
    for ( var i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i])[0];
      var price = cart[i][item];
      itemPair.push(`${item} at \$${price}`);
      }
      console.log(`In your cart, you have ${itemPair.join(", ")}.`)
      }
  }

function removeFromCart(item) {

 cart.forEach(function(lineItem, i){
   if (lineItem.hasOwnProperty(item)){
     cart.splice(i, 1);
   }
  });
  if (cart.hasOwnProperty(item) !== true){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(card) {
  if (typeof card === "undefined"){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${card}.`);
    cart.length = 0;
  }
}
