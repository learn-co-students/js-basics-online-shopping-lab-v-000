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
 var obj = {}
 obj[item] = Math.floor(Math.random()*100 + 1)
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length == 0){
  	return console.log('Your shopping cart is empty.')
  }

  var summary = "In your cart, you have"

  for(var i = 0; i < cart.length; i++) {
  	var obj = cart[i]
  	var name = Object.keys(obj)[0]
  	var value = obj[name]
  	var item = `${name} at $` + value

  	if(i == 0) {
  		summary = `${summary} ${item}`
  	}
    else if(i == 1 && i == cart.length - 1) {
    	summary = `${summary} and ${item}`
    }
  	else if(i == cart.length - 1) {
  		summary = `${summary}, and ${item}`
  	}

  	else{
  		summary = `${summary}, ${item}`
  	}
  }

  return console.log(`${summary}.`)
}

function total() {
  // write your code here
  var cartTotal = 0

  for(var i = 0; i < cart.length; i++) {
  	var key = Object.keys(cart[i])
    var price = cart[i][key]
  	cartTotal = cartTotal + price
  }
  return cartTotal
}

function removeFromCart(item) {
  // write your code here
  var removed = false
  for(var i = 0; i < cart.length; i++) {
  	var key = Object.keys(cart[i])
  	if(key[0] == item) {
  		cart.splice(i, 1)
  		removed = true
  	}
  }

  if(removed) {
  	return cart
  }
  else{
  	console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == null){
  	console.log("Sorry, we don't have a credit card on file for you.")
  } else {
  	console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
  	cart = []
  }

  return cart
}
