var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()* Math.floor(100))
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return 'Your shopping cart is empty.'
  } else {
    var arr = []
    for (var i = 0, l = cart.length; i < l; i++){
      arr.push(cart[i].itemName + " at $" + cart[i].itemPrice)
    }
    
    var msg = 'In your cart, you have '
    if (arr.length === 1) {
      
      return msg + arr[0] +'.'
    } else {
      var lastItem = arr.slice(-1)
      var firstItems = arr.slice(0,-1)
      return msg + firstItems.join(', ') + ', and ' + lastItem + '.'
    }
  }
}

function total() {
  var total = 0
  for (var i = 0, l = cart.length; i< l; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i< l; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1)
      return cart
    } 
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return msg
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}










