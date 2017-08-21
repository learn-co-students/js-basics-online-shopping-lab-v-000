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
 var price = Math.floor(Math.random() * 100) 
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart 
}

function viewCart() {
  // write your code here
    if (cart.length < 1) {
      console.log("Your shopping cart is empty.")
    } else {
      
      let theStr = []
      
      for (let i = 0; i < cart.length; i++) {
        let curItem = cart[i]
        let curItemName = Object.keys(curItem)[0]
        let curItemPrice = curItem[curItemName]
        
        theStr.push(`${curItemName} at $${curItemPrice}`)
      }
      console.log(`In your cart, you have ${theStr.join(', ')}.`)
    }
}

function total() {
  // write your code here
  let total = 0
  
  for (let i = 0; i < cart.length; i++) {
    let curItem = cart[i]
    let curItemName = Object.keys(curItem)[0]
    let curItemPrice = curItem[curItemName]
    
    total += curItemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    let curItem = cart[i]
    let curItemName = Object.keys(curItem)[0]
    if (curItemName === item) {
     let index = cart.indexOf(curItem)
     cart.splice(index, 1)
     return cart 
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
