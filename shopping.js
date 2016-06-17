var cart = []

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

function setCart(array){
  cart = array;
}

function addToCart(item){
  price = Math.floor(Math.random() * 100);
  var forSale = {item: price};
  cart.push(forSale);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length == 0){
    console.log("Your shopping cart is empty.");
  } else {
    var englishCart = [];
    for(index in cart){
      var forSale = cart[index]
      for(item in forSale){
        englishCart.push(`${item} at $${forSale[item]}`);
        debugger;
      }
    }
    console.log(`In your cart, you have ${englishCart.join(', ')}.`);
  }
}

// cart = [{socks: 12}, {pizza: 40}]
// viewCart(cart);
