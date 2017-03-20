var cart =[];

function getCart() {
  return cart;
}

function addToCart(item) {
  var random_number = Math.floor(Math.random() * 101);

  var items = {[item]: random_number};
  cart.push(items);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var l = cart.length

  if(!l) {
    console.log("Your shopping cart is empty.");
  }
    var itemAndPrices = [];
      for(let i = 0; i < l; i++) {
        let item = Object.keys(cart[i])[0]
        let price = cart[i][item]

        itemAndPrices.push(`${item} at \$${price}`);
      }
  console.log(`In your cart, you have ${itemAndPrices.join(", ")}.`)
}

function removeFromCart(item) {
  var cartFull = false;
  for(let i = 0, l = cart.length; i < l; i++) {

    if (cart[i].hasOwnProperty(item)) {
      delete cart[i];

      cart = cart.filter(function(str) {
        return /\S/.test(str);
      });
      cartFull = true;
      }
    }

    if (!cartFull) {
      console.log("That item is not in your cart.");}

  return cart;
}

function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
      cart = [];
  }
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;
}
