var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function getCart() {
	return cart;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


function addToCart(item) {
	var price = Math.floor(Math.random() * 10);
	var new_item = {};
	new_item[item] = price;
	cart.push(new_item);
	console.log(item + " has been added to your cart.");
	return cart;
}

function viewCart() {
	if (cart.length === 0) {
		console.log("Your shopping cart is empty.");
	} else {
		var cart_statement = "In your cart, you have";
		cart.forEach(function(item) {
			var item_name = Object.keys(item)[0];
			var item_price = item[Object.keys(item)[0]];
			cart_statement += ` ${item_name} at $${item_price},`
		});
		var final_cart_statement = cart_statement.substring(0, cart_statement.length - 1) + ".";
		console.log(final_cart_statement);
	}
}
	
function removeFromCart(item) {
	var spliced = [];
	cart.forEach(function(thing, index) {
		if (item == Object.keys(thing)[0]) {
			spliced.push(cart.splice(index, 1));
		}
	});
	if (spliced.length == 0) {
		console.log("That item is not in your cart.");
	} else {
		console.log("Removed item.")
	}
}

function placeOrder(cardNumber) {
	if (cardNumber === undefined) {
		console.log("We don't have a credit card on file for you to place your order.");
	} else {
		var cart_total = total();
		cart.length = 0;
		var checkout_statement = `Your total cost is $${cart_total}, which will be charged to the card ${cardNumber}.`;
		console.log(checkout_statement);
	}
}