var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1;
  let itemPrice = {item: price};
  cart.push(itemPrice);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length == 0){
    return console.log("Your shopping cart is empty.");
  } else {
    var array = [];
    for (var i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i])[0];
      var price = cart[i][item];
      array.push(item + " at $" + price);
    };
    var init = "In your cart, you have ";
    console.log(init.concat(array.join(", ")) + ".");
  };
}

function removeFromCart(itemName) {
  itemInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemName)) {
      itemInCart = true;
      cart.splice([i], 1);
    }
  };
  if (itemInCart === false) {
    console.log("That item is not in your cart.");
  }
  return cart;
}
