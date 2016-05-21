

var cart = []; 

function total() {
  var t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t;
}

function setCart(array){
  cart = array;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var object = {}; 
  object[item] = Math.floor(Math.random()*100 + 1); 
  cart.push(object)
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
   if(cart.length !== 0){
     for (var i = 0; i < cart.length; i++){
       for (var item in cart[i]) {
         console.log("In your cart, you have " + item + "at $" + cart[i][item]);
       }
     }
    }
    else{
      console.log("Your shopping cart is empty");
    }
 }

 function removeFromCart(item){
   for(var i = 0; i < cart.length; i++){
     for(var key in cart[i]){
      if(cart[i].hasOwnProperty(key)){
        delete cart[i];
      }
      else{
        console.log("That item is not in your cart")
      }
     }
   }
 }

 function placeOrder(cardNumber){
    if(typeOf(cardNumber) == undefined){
      consoele.log("We don't have a credit card on file for you to place your order.");
    }
    else{
      console.log("Your total cost is ${total()}, which will be charged to ${cardNumber}.")
    }

    cart = [];
 }
