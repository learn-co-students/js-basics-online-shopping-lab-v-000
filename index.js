var cart = [];
var list = [];
var newCart = []; 
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
  var price = Math.floor(Math.random() * 100)
  var items = {}
  items[item] = price;
  cart.push(items)
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length > 0) {
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        list.push(` ${item} at $${cart[i][item]}`)
      }
    }
     console.log(`In your cart, you have${list}.`);
    }
  else {
      console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(itemRemove) {
  if (cart.length > 0) {
    for (var item in cart) {
      if (cart[item].hasOwnProperty(itemRemove) ) {
        var indexRemove = cart.indexOf(cart[item]);
        cart.splice(indexRemove, 1);
      }
  }
    return cart;
  }
  else {
    console.log("That item is not in your cart.")
  }
}


function placeOrder(cardNumber='') {
  if (cardNumber==='') {
    console.log("We don\'t have a credit card on file for you to place your order.")
  } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
       
     }
     setCart(newCart); 
     console.log("emptycart", cart); 

  }
