var cart = [] 

function setCart(newCart) {
  cart = newCart;
}

function total() {
  var t = 0

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

function addToCart(item){
	var price = Math.floor(Math.random()* 101);
	cart.push({ [item]: price})
	console.log(`${item} has been added to your cart.`);
	return cart;
}

function viewCart(){
	var keyValue = [];
	if (cart.length == 0){
		console.log("Your shopping cart is empty.")
	}
	else {

	 for (var i = 0; i < cart.length; i++){
	 	for (var item in cart[i]){
	 		keyValue.push(`${item} at \$${cart[i][item]}`);
	 	}
	 }	
	}
	console.log(`In your cart, you have ${keyValue.join(', ')}.`)   	
}

function removeFromCart(item) {
	var i = 0
	while (i < cart.length){
		if (item in cart[i]){
			cart.splice(i, 1)
			return  cart;
		}
		i++;
	}

	console.log("That item is not in your cart.");
	//debugger;
}

function placeOrder(num) {
	if (num) {
		console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
		cart = [];
	} else {
		console.log("We don't have a credit card on file for you to place your order.");
	}
}