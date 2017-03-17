var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(100 * Math.random())
  cart.push({[`${item}`]: price})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else {
    var new_array = []

    for (var i = 0, l = cart.length; i < l; i++){
      for (var itemName in cart[i]){
        new_array.push(`${itemName} at $${cart[i][itemName]}`)
      }
    }

    console.log(`In your cart, you have ${new_array.join(", ")}.`)
  }
}

function removeFromCart(item){
  var found = false

  for (var i = 0, l = cart.length; i < l; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      found = true
      break;
    }
  }

  if(!found){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(number){
  if(number === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    var t = total()
    cart = []
    console.log(`Your total cost is $${t}, which will be charged to the card ${number}.`)
  }
}
