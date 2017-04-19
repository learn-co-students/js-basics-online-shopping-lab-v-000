var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  //var newcart = {[item]: price}
    console.log(`${item} has been added to your cart.`)
    cart.push({[item]: price})
    return cart
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  } else {
    var array = []
    for (var i = 0; i < cart.length; i++) {
      var itemandprice = cart[i] //itemandprice = {socks: 30}
      var item = Object.keys(itemandprice)[0] // "socks"
      var price = Object.values(itemandprice)[0] //itemandprice[item] // 30
      array.push(`${item} at $${price}`)
    }
    console.log(`In your cart, you have ${array.join(", ")}.`)
  }
}


function total() {
  // add price of items in the cart
  //Set a local variable for totalprice, iterate through the cart, set totalprice = to totalprice + what's in the card, return the cart
  var totalprice = 0;
  for( var i = 0; i <= cart.length; i++){
      totalprice = totalprice + cart[i]
    }
  return totalprice
}

function removeFromCart(item) {
  if (item != cart) {
    console.log("That item is not in your cart.")
  } else {
    //expecting a boolean return
    //cart.pop(item)
    item.pop
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "We don't have a credit card on file for you to place your order."
  } else {
    return `Your total cost is ${t}, which will be charged to the card ${t}.`
  }
 }
