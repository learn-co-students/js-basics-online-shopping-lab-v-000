var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 var price = Math.floor()*100;
 cart.push({[item]:price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length <=0){
    console.log("Your shopping cart is empty.")
  } else {
    var ans = 'In your cart, you have'
    var name,value
    for (var i = 0; i < cart.length; i++){
      name = Object.keys(cart[i])[0]
      value = cart[i][name]
      if (i === cart.length-1){
        ans += ` ${name} at $${value}.`
      } else {
        ans += ` ${name} at $${value},`
      }
    }
    console.log(ans)
  }
}

function total() {
  var total = 0;
  for (var i = 0; i <cart.length; i++){
    total += cart[i].value
  }
  return total
}

function removeFromCart(item) {
  var ans = false;
  for (var i =0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      ans = true
      cart.splice(i, 1)
      break
    }
  }
  if (ans == false){
    console.log("That item is not in your cart.");
  }
  return cart
}

function placeOrder(cardNumber=undefined) {
  if (cardNumber==undefined){
    console.log("We don\'t have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  return cart
}
