var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = (Math.random() * 100);
  var obj = new Object();
  obj[item] = Math.floor(price);
  cart.push(obj);
  console.log(item + " has been added to your cart.")
  return cart;
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
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var string = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])
      string += (item + " at $" + cart[i][item] + ", ");
    }
    var result = (string.substring(0, string.length - 2) + ".");
    console.log(result);
  }
}


function removeFromCart(item) {
  var start = cart;
  for (let i = 0; i < cart.length; i ++){
    if (Object.keys(cart[i]) == item) {
      cart.splice(i, 1);
    }
  }
  if (start === cart) {
    console.log("That item is not in your cart.");
  }
  else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else{
    var tot = total();
    console.log("Your total cost is $" + tot + ", which will be charged to the card " + cardNumber + ".")
    cart = [];
  }
}
