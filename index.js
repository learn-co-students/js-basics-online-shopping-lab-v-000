var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item] : price});
console.log('${item} has been added to your cart.');
return cart;
}

function viewCart() {
  const l = cart.length;
  if (!cart.length){
  console.log("Your shopping cart is empty.")};
  const foodcost = []
  for  (let i = 0; i < l; i++) { let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];
   foodcost.push(`${item} at \$${price}`)}
console.log (`In your cart, you have ${foodcost.join(', ')}`)
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
if (!cardNumber){
console.log("Sorry, we don't have a credit card on file for you.")
return false;
  }
console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
}
