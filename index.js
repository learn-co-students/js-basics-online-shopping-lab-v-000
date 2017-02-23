var cart = []; 
var price = 0;
var testCart = { shoes: 45, pants: 34, shirt: 29};

var invoice = [];
var itemName = "";
var entry = "";
var itemValue = 0;
var fuckingOutput = "";

function setCart(array) {
  cart = array;
}

function total() {
  var t = 0;
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;
}

function getCart() {
  return cart;
}

function getPrice() {
  var price = Math.random(1,100)*100;
  price = Math.floor(price);
  return price;
}

function addToCart(item) {
  var price = getPrice();
  var lineItem = {};
  lineItem[item] = price;
  cart.push(lineItem);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (Object.keys(cart).length === 0) {
    console.log("Your shopping cart is empty.");
    } else { 

  // var invoice = [];
  // var itemName = "";
  // var entry = "";
  // var itemValue = 0;
  // var fuckingOutput = "";

    // for each cart object:
      // get key name (item name)
      // get price
      // create entry = (`${itemName} for $${cart[itemName]}`);
      // push entry into 'invoice' invoice.push(entry);  
    // end foreach
  for (var i = 0, l = cart.length; i < l; i++) {
    itemName = Object.keys(cart[i]);
    itemValue = cart[i][itemName];
    entry = (` ${itemName} for $${itemValue}`);
    invoice.push(entry);

    } 
    fuckingOutput = "In your cart, you have " + invoice + ".";
    // debugger;
    return fuckingOutput;
   console.log(fuckingOutput);
  // console.log("In your cart, you have " + invoice + ".");
  }
}

// function viewCart //should print each item in the cart and their cost:
     
// function viewCart //should print 'Your shopping cart is empty.' if the cart is empty:     

// function total //adds up the prices of the items in the cart:
     
// function removeFromCart //removes the item from the cart:
     
// function removeFromCart //alerts you if you're trying to remove an item that isn't in your cart:fined
     
// function placeOrder //doesn't let you place an order if you don't provide a credit card number:d
     
// function placeOrder //lets you place an order with a credit card:
    
// function placeOrder //empties the cart: