
var cart = [];

function getCart(){
  return cart;
}

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

function addToCart(item){
  var newItem = {};
  newItem[item] = Math.floor(Math.random()* 100);
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  // total += newItem[item];
  return cart;
}

function viewCart(){
  if (cart.length == 0){
    console.log("Your shopping cart is empty")
  } else {
    cart.forEach(function(item){
      for(var key in item){
        console.log('In your cart, you have: ' + key + ' $'+ item[key])
      }
    });
  }
}

function removeFromCart(itemName) {
  function findItem(itemName) {
    return itemName === itemName;
  } for (var itemName in cart) {
    if (object.hasOwnProperty(itemName)) {
      delete cart[itemName];
    }
  }
  if (!cart.find(findItem)) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(card) {
  if (card === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + card + ".")
  }
  cart.length = 0;
}
