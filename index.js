var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var min = Math.ceil(1);
  var max = Math.floor(100);
  var itemPrice = Math.floor(Math.random() * (max - min)) + min;
  cart.push({[item]: itemPrice})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var response = ""
  var cartItems = cart
  var cartNumber = Object.keys(cart)
  //console.log(cartItems)
  if (cartNumber.length > 0) {
    response += "In your cart, you have"
    for(var i = 0; i < cartNumber.length; i++){
      var currentItem = cart[i]
      var keyString = Object.keys(currentItem)

      if(i === (cartNumber.length - 1) && cartNumber.length != 1){
        response += " and"
      }
      response += ` ${keyString} at $${currentItem[keyString]}`
      if (i === (cartNumber.length - 1)) {
        response += "."
      }else if(i != (cartNumber.length - 1) && (cartNumber.length) != 2){
        response += ","
      }
    }

  }else{
    response += "Your shopping cart is empty."
  }

  console.log(response)

}

function total() {
  var totalPrice = 0
  var i = 0
  var cartItems = cart
  var cartNumber = Object.keys(cart)
  var keyString = Object.keys(cartItems)
  console.log(keyString)
  while (cartNumber.length > i){
    var currentItem = cart[i]
    var keyString = Object.keys(currentItem)
    totalPrice += currentItem[keyString]
    i++
  }
  return parseInt(totalPrice)
}

function removeFromCart(item) {
  var cartItems = cart
  var cartNumber = Object.keys(cart)

  var placeHolderObj = []

  if (cartNumber.length > 0) {
    for(var i = 0; i < cartNumber.length; i++){
      var currentItem = cart[i]
      var keyString = Object.keys(currentItem)

      console.log(currentItem.hasOwnProperty(item))
      if(currentItem.hasOwnProperty(item)){

      }else{
        placeHolderObj.push({[keyString]: currentItem[keyString]})
      }
    }
  }else{
    console.log("That item is not in your cart.")
  }

  cart = placeHolderObj

  return cart

}

function placeOrder(cardNumber) {

  console.log(cardNumber !== undefined)
  const cartTotal = total();

  if(cardNumber !== undefined){
    cart = []
    return console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  }else{
    return console.log(`Sorry, we don't have a credit card on file for you.`)
  }

}
