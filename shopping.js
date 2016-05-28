var cart = [];
var creditCard;

function getCart() {
  return cart;
}

function setCart(array) {
  cart=array;
}

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function addToCart(item) {
  var thing= {};
  var price = Math.floor(Math.random() * 100);
  thing[item]=price;
  //cart.push({item: price});
  cart.push(thing);
  //total += price;
  console.log(item + " has been added to your cart.");
  return cart;
};

function viewCart(){

  if (cart.length == 0){
    console.log("Your shopping cart is empty");
  }
  else {
    var intro = "In your cart, you have ";
    var body = [];
    for (var i = 0; i < cart.length; i++){
      for (var key in cart[i]) {
        body.push(key + " at $" + cart[i][key]);
      }
    }
    console.log(intro + body.join(", ") +".");
  }
}

function removeFromCart(item) {
  var itemExists = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemExists = true;
      cart.splice(i);
    }
  }
  if (itemExists === false) {
    console.log("That item is not in your cart.");
  }
  return cart;
}
//(cart.indexOf(item)!= -1)? cart.slice(cart.indexOf(item),1) : console.log("That item is not in your cart.");
// if(cart.hasOwnProperty(item)){
//   cart.slice(cart.indexOf(item),1);
// }
// else {
//   console.log("That item is not in your cart.");
// }
function placeOrder(creditCardNum) {
	if (creditCardNum === undefined) {
		console.log("We don't have a credit card on file for you to place your order.");
	}else {
		console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCardNum + ".");
		setCart([]);
	}
}
