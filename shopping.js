

var cart = [];

function setCart(items_array) {
  cart = items_array;
  return cart;
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



function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;  
  var meals = {};
  meals[item] = price
  cart.push(meals)
  console.log(item + " has been added to your cart.");
  return getCart();
}

function viewCart() {
  var string = "In your cart, you have ";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty");
  }
    else {
  for (var i in cart) { 
    var item = cart[i]
   
      var key = Object.keys(item)[0];
      var value = item[key];
      string = string + key + " at $" + value + ", ";
  }
  var x = string.slice(0,-2) + ".";  
  console.log(x);
  

    }

      
};

function removeFromCart(item) {
  var itemNames = []
  var len = cart.length
  for (var i = 0; i < len; i ++) {
    
    itemNames.push(Object.keys(cart[i])[0]);
    console.log(itemNames);
  if (Object.keys(cart[i])[0] === item) {
  cart.splice(i,1);
  return cart;
}

}
if (itemNames.length === len) {
  console.log( "That item is not in your cart.");
}
return cart;
}



function placeOrder(creditCard) {


  if (typeof creditCard !== "number") {
    console.log("We don't have a credit card on file for you to place your order.");
   
    
    }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = []
  }
  
}
