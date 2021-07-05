var cart = [];

function addToCart(item) {
  var price = Math.random() * 100
  var iPrice = Math.floor(price)
  var object = {[item]: iPrice}
 cart.push(object)
 console.log(`${item} has been added to your cart.`)
 return cart

}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function viewCart() {
  //cart = [{apples: 2}, {socks: 5}]   //cart[i] -> {apples: 2} //how do I get the key and value from that object?
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
    return;
  }

  if (cart.length === 1) {
    //log for 1 item
    console.log(
      `In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][
        Object.keys(cart[0])[0]
      ]}.`
    );
  } else if (cart.length === 2 /*cart has 2 items*/) {
    console.log(
      `In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][
        Object.keys(cart[0])[0]
      ]} and ${Object.keys(cart[1])[0]} at $${cart[1][
        Object.keys(cart[1])[0]
      ]}.`
    ); //
  } else {
    var priceItemName = [];
    for (let i = 0; i < cart.length; i++) {
      var itemName = Object.keys(cart[i])[0];
      var price = cart[i][itemName];
      if(cart.length -1 === i) {
      priceItemName.push(`and ${itemName} at $${price}.`)
     } else {
      priceItemName.push(`${itemName} at $${price}`)
      }


    }
    console.log (`In your cart, you have ${priceItemName.join(", ")}`)
  }

}

function total() {
  var sum = 0
  for(var i = 0; i< cart.length; i++) {
  var price = cart[i][Object.keys(cart[i])[0]]
  sum += price

  }
  return sum
}

function removeFromCart(item) {
  var bool = true;
  cart.forEach(function(element, i){
   if(element.hasOwnProperty(item)) {
     cart.splice(i,1)
     bool = false
   }
    })

  if(bool) {
  console.log('That item is not in your cart.')
}
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  }

cart.splice(0,cart.length)
}
