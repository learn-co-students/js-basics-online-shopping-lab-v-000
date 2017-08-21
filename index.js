var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 const price = Math.floor(Math.random() * 100) + 1;

 cart.push({ [item]: price });

 console.log(`${item} has been added to your cart.`);

 return cart;
}

function viewCart() {
  // write your code here
  var cart = getCart()
  if(cart.length === 0)
    return console.log("Your shopping cart is empty.")

  var itemprice_str = []
  for(var i = 0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0]
    itemprice_str.push(`${key} at $${cart[i][key]}`)
  }
  var msg = "In your cart, you have "
  if(cart.length === 1)
    msg += itemprice_str + "."
  else if(cart.length === 2){
    msg += itemprice_str.join(" and ") + "."
  }
  else if(cart.length > 2){
    itemprice_str[cart.length - 1 ]= "and ".concat(itemprice_str[cart.length - 1]).concat(".")
    msg += itemprice_str.join(", ")
  }
  return console.log(msg)
}

function total() {
  // write your code here
  var t = 0
  var c = getCart()
  for(var i = 0; i < c.length; i++){
    var key = Object.keys(c[i])
    t += c[i][key]
  }
  return t
}

function removeFromCart(item) {
  // write your code here
  var c = getCart()
  for(var i = 0; i < c.length; i++){
    if(Object.keys(c[i])[0] === item){
      c.splice(i,1)
    }
  }
  if (getCart().length === c.length)
    console.log("That item is not in your cart.")
  else {
    setCart(c)
  }
  return c
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined)
    return console.log("Sorry, we don't have a credit card on file for you.")


  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
