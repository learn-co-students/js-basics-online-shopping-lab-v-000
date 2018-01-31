var cart = [];

// [
//   {
//     key: "name",
//     anotherkey: "anothername"
//   },
//   {
//     kj: "slkjdf"
//   }
// ]

function getCart() {
	return cart;
}

function setCart(c) {
	cart = c;
	return cart;
}

function addToCart(item) {
	// write your code here
	let price = Math.floor(Math.random() * 10) + 1;
	cart.push({ [item]: price });
	console.log(`${item} has been added to your cart.`);
	return cart;
}

function viewCart() {
	// write your code here
	let itemsAndPrices = [];

	for (var obj in cart) {
		let key = Object.keys(cart[obj])[0];
		let value = cart[obj][key];
		itemsAndPrices.push(`${key} at $${value}`);
	}

	switch (cart.length) {
		case 0:
			console.log('Your shopping cart is empty.');
			break;
		case 1:
			console.log(`In your cart, you have ${itemsAndPrices[0]}.`);
			break;
		case 2:
			let twoItems = itemsAndPrices.join(' and ');
			console.log(`In your cart, you have ${twoItems}.`);
			break;
		default:
			itemsAndPrices[cart.length - 1] = 'and '.concat(
				itemsAndPrices[cart.length - 1]
			);
			let multipleItems = itemsAndPrices.join(', ');
			console.log(`In your cart, you have ${multipleItems}.`);
			break;
	}
}

function total() {
	// write your code here
	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		for (let item in cart[i]) {
			total += cart[i][item];
		}
	}
	return total;
}

function removeFromCart(item) {
	// write your code here
	let itemInCart = false;

	for (let i = 0; i < cart.length; i++) {
		if (cart[i].hasOwnProperty(item)) {
			itemInCart = true;
			cart = cart.slice(0, i).concat(cart.slice(i + 1));
			return cart;
		}
	}

	if (!itemInCart) {
		console.log('That item is not in your cart.');
	}
}

function placeOrder(cardNumber) {
	// write your code here
	if (cardNumber) {
		console.log(
			`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
		);
		cart = [];
	} else {
		console.log("Sorry, we don't have a credit card on file for you.");
	}
}
