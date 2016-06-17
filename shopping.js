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
    return ("Your shopping cart is empty.");
  } else {
    var englishCart = [];
    for(index in cart){
      var forSale = cart[index]
      for(item in forSale){
        englishCart.push(`${item} at $${forSale[item]}`);
      }
    }
    console.log(`In your cart, you have ${englishCart.join(', ')}.`);
    return (`In your cart, you have ${englishCart.join(', ')}.`);
  }
}

// cart = [{socks: 12}, {pizza: 40}];
// viewCart();

function removeFromCart(item){

  for(index in cart){
    if(cart[index].hasOwnProperty(item)){
      cart.splice(index, 1);
      return cart;
    } else {
      console.log("That item is not in your cart.");
    }
  }
}

// removeFromCart('pillow');
// removeFromCart('socks');
