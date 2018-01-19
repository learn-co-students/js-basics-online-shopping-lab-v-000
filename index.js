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

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
	return cart;
};

function addToCart(item) {
	var price = Math.floor(Math.random() * 100);
	var items = {[item]: price};
	cart.push(items);
	console.log(item + " has been added to your cart.");
	return cart;
};

function viewCart() {
	if (cart.length > 0) {
		let price_items = [];
		cart.forEach(function(price_item) {
			for (var key in price_item) {
				price_items.push(key + " at $" + price_item[key]);
			};
		});
		console.log(`In your cart, you have ${price_items.join(", ")}.`);
	} else {
		console.log("Your shopping cart is empty.");
	};
};

// test:
// In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone
// at $${iPhoneCost}.

function removeFromCart(item) {
	var check = false;

	for (var i = 0; i < cart.length; i++) {
	  if (cart[i].hasOwnProperty(item)) {
	  	check = true;
	  	cart.splice([i], 1);
	  };
	};
  if (check === false) {
    console.log("That item is not in your cart.");
  };
	return cart;
};

function placeOrder(cardNumber) {
	if (!cardNumber) {
		console.log("We don't have a credit card on file for you to place your order.");
	} else {
		console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
		cart = [];
	};
};



