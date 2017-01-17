////was not able to run the tests in the console for whatever reason but the answers check out below using the babel compiler


var cart = [] ;

function getCart(){
  return cart 
}

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

function addToCart(item){
  var itemPrice =  Math.floor((Math.random() * 100) + 1);
  var newObject = {} 
  newObject[item] = itemPrice
  cart.push(newObject)
  console.log(`${item} has been added to your cart.`)
  return cart 
}

function viewCart(){
  var answer = []
  
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else {
    for (var i = 0; i < cart.length; i++){
      answer.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }
  }
  answer[0] = "In your cart, you have" + ` ${answer[0]}`
  var lastItem = `${answer.pop()}` + "."
  answer.push(lastItem)
  
  return answer.join(", ")
}  

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      var itemFound = true 
      delete cart[i]
      setCart(cart.filter(Boolean));   //this guy here removes stuff thats falsey (like 'undefined')
      break;
    }
  }
  if (!itemFound){
    return "That item is not in your cart." 
  }
  return cart 
}


function placeOrder(number){
  if (number === undefined){
    return "We don't have a credit card on file for you to place your order."
  } else {
    console.log( `Your total cost is $${total()}, which will be charged to the card ${number}.`)
  }
  cart = []
  return cart
}


