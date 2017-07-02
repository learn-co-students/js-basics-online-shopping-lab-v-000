var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var price = Math.floor(Math.random()) * 100;
  var item = {[itemName]: price};

  cart.push(item);
  console.log(itemName + " "+ "has been added to your cart.");
  return cart;
    //

}

function viewCart() {

  if(cart.length === 0){
      console.log("Your shopping cart is empty.");
  } else {
      var cartStr = "In your cart, you have ";
      for(var value in cart){
          if(value === cart[-1]){
            return cartStr += " "+ "and" + value + " " + "at" + cart[value]+".";
          } else{
            cartStr += + " " + value + " " + "at" + cart[value];
      }
      }
  }
  console.log(cartStr);
}

function total() {
  var total = 0;
  for(var value in cart){
      total += cart[value];
  }
  console.log(total);
}

function removeFromCart(item) {
      if(cart.hasOwnProperty(item)){
          delete cart.item;
      } else{
          console.log("That item is not in your cart.")
      }
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
      console.log("Sorry, we don't have a credit card on file for you.")
  } else{
    console.log("Your total cost is" + " " + total() + " " + "which will be charged to the card" + " " + cardNumber + ".");
  }

  cart = [];
}
