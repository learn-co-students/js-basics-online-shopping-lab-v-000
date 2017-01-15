var cart=[];
var item="";
var price=0;

function getCart(){
  return cart;
}

function
 setCart(newCart) {
  cart = newCart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var obj={};
  obj[item]=price;
  cart.push(obj);
  console.log(item + ' has been added to your cart.' );
  return cart;
}

function viewCart(){
  var len = cart.length;
  if(len == 0){
    console.log("Your shopping cart is empty.");
    return;
  }
  var string = "";
 for(var i=0; i<len; i++){
   for (var key in cart[i]) {
       if (cart[i].hasOwnProperty(key)) {
          var price = cart[i][key];
            string += key + " at $" + price + ", "; }
       }
   }
   string = string.substring(0, string.length-2);
    console.log("In your cart, you have "+ string +".");
}

function removeFromCart(item){
  var len = cart.length;
  for (var i=0; i<len; i++){
    if (typeof cart[i] == 'object') { //object test
      for(var key in cart[i]){
        if (cart[i].hasOwnProperty(key)) {
          if(key==item){
            cart.splice(i,1);
            return cart;
          }
        }
      }
    }
  }
  console.log("That item is not in your cart.");
  return;
}

function placeOrder(cardNumber){
  var t= total();
  cart = [];
  if(cardNumber == undefined){
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
  console.log('Your total cost is $' + t + ', which will be charged to the card ' + cardNumber + '.');
}

function total() {
  var t = 0;
  for (var i = 0; i < cart.length; i++) {
    if (typeof cart[i] == 'object') { //object test
        for (var key in cart[i]) {
            if (cart[i].hasOwnProperty(key)) {
                t += (cart[i][key]); //here ya go
            }
        }
    }
}
  return t;
}
