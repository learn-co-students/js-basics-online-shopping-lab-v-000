var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let j = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      j += cart[i][item]
    }
  }
  return j;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  const obj = {};
  const price = Math.floor(Math.random() * 100);
  obj[item] = price;
  cart.push(obj)

  console.log(item + " has been added to your cart.");

  return cart;
}

function viewCart() {
  const a = [];
  const l = cart.length

  if (l === 0) {
    console.log("Your shopping cart is empty.");
  }

  for (let j = 0; j < l; j++) {
    let b = cart[j]
    let i = Object.keys(b)[0]
    let p = b[i]

    a.push(i + " at $" + p)
  }

  console.log("In your cart, you have " + a.join(", ") + ".");
}

function removeFromCart(item) {
  const l = cart.length;
  let t = false;

  for (let i = 0; i < l; i++) {
    t = true
    cart[i].hasOwnProperty(item)
    cart = cart.slice(0, i).concat(cart.slice(i + 1))
  }

  if (!t) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(number) {
  if (!arguments.length) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + number + ".");

    cart = [];
  }
}
