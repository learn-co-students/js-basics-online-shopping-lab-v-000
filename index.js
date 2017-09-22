var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);

  cart.push({[item]: price}); // item is created as object
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  } else {

    var products = [];

    for (let i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])[0]; // Object.keys(cart[i] will return: [ 'socks' ][ 'pants' ][ 'apples' ] so you need to call each with [0])
      let price = cart[i][item];
      products.push(`${item} at \$${price}`);
    }


    if (products.length === 1) {
      products;
    } else if (products.length === 2) {
      products = products.join(" and ");
    } else {
      products[products.length - 1] = ", and ".concat(products[products.length - 1]);
      products = products.splice(0, products.length - 1).join(", ") + products[products.length - 1];
      // in js, you call the last element by [array.length - 1]
    }
  }
  console.log(`In your cart, you have ${products}.`)
}

function total() {
  let t = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = Object.keys(cart[i])[0];
    let price = cart[i][item];
    t += price;
  }
  return t;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return cart = [...cart.slice(0,i),...cart.slice(i+1)]
    }
  }
  console.log("That item is not in your cart.")
}

// function removeFromCart(item) {
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].hasOwnProperty(item)) {
//       return cart = [...cart.slice(0,i),...cart.slice(i+1)]
//     } else {
//       console.log("That item is not in your cart.")
//     }
//   }
// }
// this will print what's in the console.log x number of times because it's in the loop

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
