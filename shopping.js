var orderNumber;
var total;
var cardNumber;
var cart = [];
var price = Math.floor((Math.random() * 100) + 1);

function addToCart(item) {
  newItem = {}
  newItem[item] = price
  cart.push(newItem);
  total = total + price;
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty"
  } else {
      cart.forEach(function(item) { 
        for (key in item) {
          console.log("In your cart you have: " + key + " $" + item[key]);
      }
    })
  }
}
 
function addCreditCard(cardnumber) {
  cardNumber = cardnumber
  console.log("Your credit card number has been saved.")
  return cardNumber
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key === item) {
        total -= cart[i][item];
        console.log(item + " has been removed from your cart");
        cart.splice(i, 1);
    } else {
        console.log("That item is not in your cart"); 
      }
    }
  }
}

function placeOrder() {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order")
  } else {
    console.log("Your total cost is: " + "$" + total + " and will be charged to the credit card on file " +  "(" + cardNumber + ")" + ". " + "Your order number is " + orderNumber)
    orderNumber++;
  }
  total = 0
}


