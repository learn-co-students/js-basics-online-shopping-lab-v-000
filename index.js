var cart = []; 
var price = 0;
var myCart = [{shirt: 1}, {pants: 1}, {shoes: 1}, {belt: 1}]

function setCart(array) {
  cart = array;
}

function listValues(ary) {
  var total = 0
  var list = Object.values(ary);
  list.forEach((item) => {
    var price = Object.values(item)
    total = total + parseInt(price)
    console.log("With this item, your total is now: " + "$ " + total)
  });
}

function total() {
  var t = 0;
  for (var i = 0; i < cart.length; i++) {
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
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var len = cart.length;
  if (len === 0) {
    console.log("Your shopping cart is empty.");
  } else { 
    const allLineItems = [];
    for (var i = 0; i < len; i++) {
      let lineItem = cart[i];
      let itemName = Object.keys(cart[i]);
      let itemPrice = lineItem[itemName];
      allLineItems.push(`${itemName} at \$${itemPrice}`);
    }
    console.log(`In your cart, you have ${allLineItems.join(', ')}.`);
  } 
}

function removeFromCart(item) {
  let itemInCart = false;
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(ccn) {
  if (ccn > 0) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccn}.`);
    cart = [];
    } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
} 
