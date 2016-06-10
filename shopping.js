var cart = [];


function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
	return cart
}

function setCart(arr) {
	cart = arr;
}

function addToCart(item) {
	var h = {};
	h[item] = Math.floor(Math.random() * 100);
	cart.push(h);
	console.log(item + " has been added to your cart.")
	return cart
}


function viewCart() {
	if (cart.length < 1) {
		console.log("Your shopping cart is empty.")
	} else {
		var msg = "In your cart, you have ";
		var arr = [];
		for (var i = 0; i < cart.length; i++) {
			for (let key in cart[i]) {
				arr.push(key + " at $" + cart[i][key]);
			}
		}
		console.log(msg + arr.join(', ') + ".");
	}
}

function removeFromCart(itemName) {
	var notFound = true;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].hasOwnProperty(itemName)) {
			cart.splice(i, 1);
			notFound = false;
			i = cart.length;
		}
	}
	if (notFound) {
		console.log("That item is not in your cart.")
	}
}

function placeOrder(cnum) {
	if (cnum === undefined) {
		console.log("We don't have a credit card on file for you to place your order.");
	}else {
		console.log("Your total cost is $" + total() + ", which will be charged to the card " + cnum + ".");
		setCart([]);
	}
}
