var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   const price = Math.floor(Math.random()*100) + 1;
   var itemPrice = {[item]: price}
   cart.push(itemPrice);
   console.log(`${item} has been added to your cart.`);
   return cart;
}

function viewCart() {
  const cLength = cart.length;
  if (cLength == 0) {
    console.log("Your shopping cart is empty.")
  }
  var list = [];
  for (let i = 0; i < cLength; i++) {
    var item = cart[i];
    for (var item in cart[i]) {//through keys
      list.push(`${item} at $${cart[i][item]}`)
    }
  }
  if (cLength == 2) {
    var output = list.join(" and ")
    console.log(`In your cart, you have ${output}.`)

  } else if (cLength >= 3) {
    var lastItem = list.pop();
    var otherItems = list.join(", ");
    var output = otherItems + ", and " + lastItem;
    console.log(`In your cart, you have ${output}.`)

  } else {

    console.log(`In your cart, you have ${list}.`)
  }
}

function total() {
  var total = 0;
  for(let i = 0;i < cart.length; i++){
    var key = Object.keys(cart[i])[0]
    total += cart[i][key]
  }
  return total;
}

function removeFromCart(item) {
  for(let i =0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
       cart.splice(i,1)
       return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(num) {
  if(!num){
    console.log("Sorry, we don't have a credit card on file for you.")
    return false;
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
    cart =[];
}
