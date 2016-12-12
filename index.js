//Object.keys(meals)
// for (var mealName in meals) {
//  console.log(`I ate ${meals[mealName]} for ${mealName}!`)

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

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  var ip = [];

  cart.forEach(function(cart) {
    for(var item in cart) {
      ip.push(item + " at $" + cart[item]);
    }
  });
  console.log("In your cart, you have " + ip.join(", ") + ".");
}

function placeOrder(cc) {
  if (!cc) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log("Your total cost is $" + total() +", which will be charged to the card " +cc+ ".")
    cart = []
  }
}

function removeFromCart(item) {
  let itemInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      itemInCart = true
    }
    return cart
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
}
