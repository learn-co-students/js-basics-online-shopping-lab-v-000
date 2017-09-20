var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomIntInclusive() {
  var min = Math.ceil(1);
  var max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function addToCart(item) {
 var newItem = Object.assign({}, {[item]: getRandomIntInclusive()})
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length < 1){
    console.log("Your shopping cart is empty.")
  }
  var string = `In your cart, you have `
  var lastIteration = cart.length - 1
  for (var i = 0; i < cart.length; i++){
    var item = cart[i];
    var key = Object.keys(item);
    var price = item[key]
    if(cart.length === 1) {
      string += `${key} at $${price}.`
    } else if (cart.length === 2) {
      if (i === 0) {
        string += `${key} at $${price} `
      } else {
        string += `and ${key} at $${price}.`
      }
    } else {
      if (i === 0) {
        string += `${key} at $${price}`
      } else if (i === lastIteration) {
        string += `, and ${key} at $${price}.`
      } else {
        string += `, ${key} at $${price}`
      }
    }
  }
  console.log(string)
}

function total() {
  var total = 0
  for(var i = 0; i < cart.length; i++){
    for (let item in cart[i]) {
      total += cart[i][item];
    }
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var item1 = cart[i];
    var key = Object.keys(item1);
    debugger
    if (key[0] === item) {
        cart.splice(i , 1)
      }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0, cart.length)
  }
}
