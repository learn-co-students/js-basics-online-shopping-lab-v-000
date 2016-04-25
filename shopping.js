'use strict';

var orderNumber = 0;
var total = 0;
var cardNumber;
var cart=[];

function addToCart(item) {
  var itemObj={};
  itemObj[item]=Math.random() * 100;
  cart.push(itemObj);
  cart.forEach(function(i) {
   for (var key in i) { total += i[key]; };
   });
  console.log(item + " has been added to your cart");
  return cart;
}

function viewCart() {
  if (Object.keys(cart).length === 0) {
    return "Your shopping cart is empty";
  }else {
    cart.forEach(function(i) {
      for (var key in i) {
        console.log("In your cart you have: " + key + " $" + i[key]);
      } 
      });
    }
}

function addCreditCard (number) {
  cardNumber=number;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item) {
  cart.forEach(function(obj, index) {
    for (var key in obj) {
      if (key === item) {
        total -= obj[key];
        cart.splice(index, 1);
      }else{
        console.log("That item is not in your cart");
      };
    }
  })
}

// function placeOrder() {
//   if (cardNumber === "undefined") {
//     return "We don't have a credit card on file for you to place your order";
//   }else{
//     var subtotal = 0;
//     total = cart.forEach(function(item) {
//       subtotal += item[price]; 
//     });
//   }
//     console.log("Your total cost is: " + total + " and will be charged to the credit card on file " cardNumber> + ". Your order number is " + orderNumber);
//     cart = [];
//     total = 0;
//     orderNumber += 1;
//   }
// }