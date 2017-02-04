var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
	return cart;
}

function addToCart(item) {
	var itemHash = {};
	itemHash[item] = Math.floor(Math.random()*101);
	cart.push(itemHash);
	console.log(item + " has been added to your cart.");
	return cart;
}

function viewCart() {
	if (cart.length === 0) {
		console.log("Your shopping cart is empty.");
	} else {
		var output = "In your cart, you have ";
		for (var i=0; i<cart.length; i++) {
			var item = Object.keys(cart[i])[0];
			output += item + " at $" + cart[i][item] + ", ";
		}
		output = output.replace(/, $/, ".");
		console.log(output);
	}
}

function hasItem(cart, item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return i + 1;
    }
  }
  return false;
}

function removeFromCart(itemName) {
	var itemPosition = hasItem(cart, itemName)
	if (!itemPosition) {
		console.log("That item is not in your cart.");
	} else {
		cart.splice(itemPosition-1, 1);
		return cart;
	}
}

function placeOrder(ccNum) {
	if (typeof(ccNum) === 'undefined') {
		console.log("We don't have a credit card on file for you to place your order.");
	} else {
		console.log("Your total cost is $" + total() + ", which will be charged to the card " + ccNum + ".");
		cart = []
	}
}