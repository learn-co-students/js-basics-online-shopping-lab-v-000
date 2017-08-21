var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random() * 100);
  cart.push({[item]: itemPrice});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    let itemStringArray = cart.map((itemObj) => {
      let item = Object.keys(itemObj)[0];
      return `${item} at $${itemObj[item]}`;
    })
    if (cart.length === 1) {
      console.log(`In your cart, you have ${itemStringArray[0]}.`)
    }
    else if (cart.length === 2) {
      console.log(`In your cart, you have ${itemStringArray.join(" and ")}.`)
    }
    else {
      console.log(`In your cart, you have ${itemStringArray.slice(0, -1).join(", ")}, and ${itemStringArray.slice(-1)}.`)
    }
  }
}

function total() {
  return cart.map((item) => item[Object.keys(item)[0]]).reduce((sum, value) => sum + value, 0);
}

function removeFromCart(item) {
  let new_cart = cart.filter((itemObj) => {
    if (Object.keys(itemObj)[0] !== item) {
      return itemObj;
    }
  });
  if (new_cart.length === cart.length) {
    console.log("That item is not in your cart.");
  }
  else {
    cart = new_cart;
  }

}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
