var cart = [];

function getCart(){
  return cart;
}

function setCart(arr){
  cart = arr;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({item: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart(){
  if(cart.length != 0){
    for(var i = 0, l = cart.length; i < l; i++){
      for(var item in cart[i]){
        console.log("In your cart you have " + item + " $" + cart[i][item])
      }
    }    
  }
  else{
    console.log("Your shopping cart is empty");
  }
}

function removeFromCart(item){
  if(cart[item]){
    delete cart[item];
    return cart;
  }
  else {
    console.log("That item is not in your cart");
  }
}

function placeOrder(ccNum){
  if(ccNum){
    console.log("Your total cost is " + total() + ", which will be charged to " + ccNum + ".");
    cart = [];
  }
  else{
    console.log("We don't have a credit card on file for you to place your order.");
  }
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
