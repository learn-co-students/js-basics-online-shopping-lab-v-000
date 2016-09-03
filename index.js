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

function getCart(){
  return cart;
}

function addToCart(item){
 var itemPrice = Math.floor(Math.random() * 100);
 cart.push({item: itemPrice});
 return `${item} + has been added to your cart.`;
}

function viewCart(){
  var l = cart.length;
  if (!l){
    return "Your shopping cart is empty.";
  } var itemsAndPrices = [];
  for (var i = 0; i < l; i++){
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];
    itemsAndPrices.push(`${item} at \$${price}`)
  }
  return `In your cart, you have ${itemsAndPrices.join(', ')}.`;
}


function removeFromCart(item){
  var itemInCart = false;
  for(var i=0; l=cart.length; i<l; i++){
    if (cart[i].hasOwnProperty(item)){
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i+1));
    }
  }
  if (!itemInCart){
    return "That item is not in your cart." ;
  }

  return cart;
}

 function placeOrder(creditCardNumber){
  if (!creditCardNumber){
    return "We don't have a credit card on file for you to place your order.";
  }
  else 
    return `Your total cost is $${total()}, which will be charged to the card ${cardNum}.`;
    cart = [];
 }

 function setCart(newCart){
  cart = newCart;
 }

 function total(){
  var t = 0;
  for(var item in cart[i]){
    t += cart[i][item];
  }
 }

 return t
}
