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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 + 0); //create a random number for price between 0 and 100
  cart.push({ [item]:price });
  console.log(`${item} has been added to your cart.`);
  return cart; //return cart
}

function viewCart() {
  const l = cart.length
  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]
    itemsAndPrices.push(`${item} at \$${price}`)
  }

  if (l==0) {
    return console.log("Your shopping cart is empty.")
  } else{
        console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
  }
}

function removeFromCart(item) {
  let itemPresent = false;
  for (let i= 0; l = cart.length; i < l, i++) {
      if (cart[i].hasOwnProperty(item)) {
        itemPresent= true;
        cart.shift(i);
      }
  }
  if (!itemPresent) {
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart =[];
}
