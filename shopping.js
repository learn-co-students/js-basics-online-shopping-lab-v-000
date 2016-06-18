var cart = [];

function total() {
  var t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart(){
  return cart;
}

function setCart(array){
  cart = array;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  var forSale = {};
  forSale[item] = price;
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
    for(var index in cart){
      var forSale = cart[index];
      for(var item in forSale){
        englishCart.push(`${item} at $${forSale[item]}`);
      }
    }
    console.log(`In your cart, you have ${englishCart.join(', ')}.`);
    return (`In your cart, you have ${englishCart.join(', ')}.`);
  }
}



function removeFromCart(item){
  if(cart.length > 0){
      for(var index in cart){
        if(cart[index].hasOwnProperty(item)){
        cart.splice(index, 1);
        return cart;
      } else {
        notInCart();
      }
    } 
  } else {
    notInCart();
  }
}

function placeOrder(ccNumber){
  if(ccNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`);
    setCart([]);
  }  
}

function notInCart(){
  console.log("That item is not in your cart.");
}