var cart = new Array();

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
  const price = Math.floor(Math.random() * 100);
  //the item and price are added as an object to the cart array. so cart
  // is an array of objects
  cart.push({[item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const stuffArray = [];
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.")
    } else {
      for (var i = 0, l = cart.length; i < l; i++) {
        //iterating through objects in the cart
        let itemPricePair = cart[i];
        //the item is the 0th element of each pair in the object
        let item = Object.keys(itemPricePair)[0];
        //value = object[key]
        let price = itemPricePair[item];
        stuffArray.push(`${item} at \$${price}`)
        console.log(`In your cart, you have ${stuffArray.join(', ')}.`)
        }
      }
    }


function removeFromCart(potentialItem) {
  for (var i = 0, l = cart.length; i < l; i++) {
    let itemPricePair = cart[i];
    let item = Object.keys(itemPricePair)[0];
      for (item in itemPricePair) {
        if (itemPricePair.hasOwnProperty(potentialItem)) {
          cart.shift(i);
        } 
      } 
  } console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${creditCardNumber}.`)
    while (cart.length > 0 ) {
      cart.pop();
    }
  }
}

