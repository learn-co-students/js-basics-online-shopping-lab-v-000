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
  var price = Math.floor((Math.random() * 100) + 1);
  var newItem = {[item]: price};

  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){

  var cartItemss = [];
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.");
  }
    for (var i = 0; i < cart.length; i++ ) {
      var anItem = cart[i];

      for(var items in anItem){
        var text = items + " at $" + anItem[items];
        cartItemss.push(text);
      }
    }
    return console.log("In your cart, you have " + cartItemss.join(', ') + ".");
}


function removeFromCart(itemName){
  var deletedItem = false;
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(itemName)){
      cart.splice(i,1);
      deletedItem = true;
    }
  }
  if (deletedItem === false){
    return console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber){
  if(typeof cardNumber === "undefined"){
    return console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
