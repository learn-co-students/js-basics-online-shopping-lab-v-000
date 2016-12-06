var cart;

cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var newItem = {};
  var price = Math.floor((Math.random() * 100));
  newItem[item] = price
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

// function viewCart() {
//   if (cart.length > 0) {
//     var cartCall = "In your cart, you have "
//     for (var item in cart) {
//       var itemName = Object.keys(cart[item])[0]
//       debugger
//       cartCall += `${itemName} at ${cart[item][itemName]}, `;
//     }
//     console.log(cartCall.slice(0, -2) + ".");
//   } else {
//     console.log("Your shopping cart is empty.")
//   }
// }

function viewCart() {
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
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
