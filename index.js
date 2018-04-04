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
 var price = Math.floor((Math.random() * 100) + 1);
 cart.push({[item]:price});
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  //var itemname = Object.keys(cart)
  if (cart.length === 1) {
  
  var itemname = Object.keys(cart[0])[0]
  console.log(`In your cart, you have ${itemname} at $${cart[0][itemname]}.`)
  
  } else if (cart.length === 2) {
    var item2name = Object.keys(cart[1])[0]
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`);
  
  } else {
    var itemandprice = []
    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0]
      var price = cart[i][item]
      if (cart.length - 1 === i) {
        itemandprice.push(`and ${item} at $${price}.`)
      }
      else {
        itemandprice.push(`${item} at $${price}`)
      }
    }
      console.log(`In your cart, you have ${itemandprice.join(", ")}`)
  }
}

function total() {
 var total = 0
 for (var i = 0; i < cart.length; i++) {
  total += cart[i][Object.keys(cart[i])[0]]
 }
 return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1)
    return cart
    }
    
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } 
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}
