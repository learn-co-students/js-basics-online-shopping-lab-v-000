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
 var meals = { [item]: Math.floor(Math.random() * 100) }
 cart.push(meals)
 console.log(`${item} has been added to your cart.`)
 return cart
}



function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }

  var sentence = "In your cart, you have "

  if (cart.length > 1){
    var last_item = ` and ${Object.keys(cart[cart.length -1 ]).join()} at $${Object.values(cart[cart.length -1 ]).join()}`

    for (let i = 0 ; i < cart.length -1 ; i++){
      sentence += `${Object.keys(cart[i]).join()} at $${Object.values(cart[i]).join()}, `
    }
  } else if (cart.length === 1){
    return console.log(sentence + `${Object.keys(cart[0]).join()} at $${Object.values(cart[0]).join()}.`)
  }

  if (cart.length === 2){
   return console.log(`In your cart, you have ${Object.keys(cart[0]).join()} at $${Object.values(cart[0]).join()}${last_item}.`)
} else {
  var final_item = `and ${Object.keys(cart[cart.length -1 ]).join()} at $${Object.values(cart[cart.length -1 ]).join()}`
  return console.log( sentence + final_item + ".")
}

}

function total() {
  // write your code here
var total = 0

  for (let i=0; i< cart.length; i++){
    total += parseInt(Object.values(cart[i]).join())
  }

  return `$${total}`
}

function removeFromCart(item) {
  // write your code here

  for (let i = 0 ; i < cart.length ; i ++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(cart[i], 1)
      console.log(`${item} has been removed from your cart`)
      return getCart()
    }
  }

  console.log("That item is not in your cart.")
  getCart()
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return console.log( "Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
