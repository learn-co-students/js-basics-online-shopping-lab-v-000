var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function total() {
  let t = 0;
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100 + 1);
  var obj = {};
  obj[item] = price;
  cart.push(obj);
  console.log(item+" has been added to your cart.");
  return cart;
}

function viewCart(){
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else {
    var string = "In your cart, you have ";
    for(var i = 0; i < cart.length; i++){
      for(var key in cart[i]){
        string += key + " at $" + cart[i][key];
        if(i === cart.length - 1){
          string += ".";
        } else {
          string += ", ";
        }
      }
    }
    console.log(string);
  }
}

function removeFromCart(item){
  var count = 0;
  for(var i = 0; i < cart.length; i++){
    for(var key in cart[i]){
      if(key === item){
        count ++;
        cart.splice(i, 1);
        return cart;
      }
    }
  }
  if(count === 0){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber){
  if(cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    while(cart.length > 0){
      cart.pop();
    }
  }
}
