var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice =  Math.floor(Math.random()*100);
  var item = {[itemName]: itemPrice}
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  const newCart = []
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  }
    for(var i=0; i<cart.length; i++){
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)[0]
      let price = itemAndPrice[item]
      newCart.push(`${item} at \$${price}`)
  }
    console.log(`In your cart, you have ${newCart.join(', ')}.`);
}

function total() {
  let cost = 0
  let l = cart.length
  for(var i=0; i<l; i++){
    for(var item in cart[i])
      cost += cart[i][item]
  }
  return cost
}

function removeFromCart(item) {
  let cartHasItem = false
  for(let i=0, l=cart.length; i<l; i++){
    if(cart[i].hasOwnProperty(item)){
      cartHasItem = true
      cart = cart.slice(0, i).concat(cart.slice(i+1));
    }
  }
  if(!cartHasItem){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(creditCard) {
  if(!creditCard){
   console.log("We don't have a credit card on file for you to place your order.");
 }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
 cart = [];
}
