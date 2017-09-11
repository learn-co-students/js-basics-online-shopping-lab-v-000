var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor(Math.random())})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {	
  if (!cart.length) {
  	console.log("Your shopping cart is empty.");
  } else {
  	var itemList = [];
  	for (var i = 0; i < cart.length; i++) {
  		for (var item in cart[i]) {
  			itemList.push(`${item} at $${cart[i][item]}`);
  		}
  	}
  	console.log(`In your cart, you have ${itemList.join(`, `)}.`);
  }
}

function total() {
	var total = 0;
	for (var i = 0; i < cart.length; i++) {
		for (var price in cart[i]) {
			total += cart[i][price];
		}
	}
	return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
  	if (cart[i].hasOwnProperty(item)) {
  		cart.splice(i);
  	} 
  }
  if (!cart.hasOwnProperty(item)) {
  		console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
  	console.log("We don't have a credit card on file for you to place your order.")
  } else {
  	console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  	cart = []
  }
}
