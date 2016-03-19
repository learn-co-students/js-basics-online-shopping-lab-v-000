'use strict';

var orderNumber, total, cardNumber, cart = [];

function addToCart(item) {
	var object = {}
	object[item] = Math.round(((Math.random() * 100) + 1)* 100)/100;
	cart.push(object);
	total += object[item];
	console.log( item + " has been added to your cart");
	return cart;
};

function viewCart() {
	cart.forEach(function(item) {
		var key = Object.keys(item)[0];
		console.log("In your cart you have: " + key + " $" + item[key]);
	})
}

function addCreditCard(number) {
	cardNumber = number;//could use hoisting but not good practice.
	console.log("Your credit card number has been saved.");
	return cardNumber;
}

function removeFromCart(itemName) {
	cart.forEach(function(item, index) {
		if (!item.hasOwnProperty(itemName)) {
			console.log("That item is not in your cart");
		} else {
			total -= item[itemName];
			cart.pop(item);
		}
	})
}

function placeOrder() {
	if (cardNumber === undefined) {
		console.log("We don't have a credit card on file for you to place your order")
	} else {
		console.log("Your total cost is: $" + total +
		" and will be charged to the credit card on file (" +
		cardNumber +"). Your order number is " + orderNumber);
		orderNumber++;
		total = 0;
	}
}


