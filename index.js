var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart 
}

function viewCart() {
  var message; 
  if (cart.length < 1) {
      message = 'Your shopping cart is empty.'
  } else {
    message = `In your cart, you have`
    var i = 0; 
    while (i < cart.length) {
      message += ` ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]},`
      i++;
    }
  }
  message = message.slice(0, -1) + '.';
  console.log(message);
  return message;
}

function total() {
  var total = 0; 
  for (var item in cart) {
    total += Object.values(cart[item])[0]
  }

  return total
}


function removeFromCart(item) {
   for (var i in cart) {
      if (cart[i][item] != undefined) {
	      cart.splice(i, 1)
        return cart 
      }
    }

    console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}


