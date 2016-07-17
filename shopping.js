var cart = []

function getCart() {
  return cart
}

function setCart(array) {
  cart = array
}


function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price})
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart(){
  if (cart.length == 0){
    console.log("Your shopping cart is empty.");
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

function removeFromCart(item){
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  };
  return cart;
}

function placeOrder(ccnumber){
  if (typeof ccnumber == "undefined"){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total(cart) + ", which will be charged to the card " + ccnumber + ".");
    cart = [];
  };
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
