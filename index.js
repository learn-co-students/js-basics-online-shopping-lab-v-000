var cart = [];

function getCart(){
	return cart;
}

function addToCart(item){
	var price = Math.floor(Math.random()*100);
	var newHash = {};
	newHash[item] = price;
	cart.push(newHash);
	console.log(item+" has been added to your cart.");
	return cart;
}

function viewCart(){
	var output = [];
	if (cart.length==0){
		console.log("Your shopping cart is empty.");
		return undefined;
	}
	for (var i = 0, l = cart.length; i < l; i++) {
	    for (var item in cart[i]) {
	      output.push(item+" at $"+cart[i][item]);
	    }
	  }
	console.log("In your cart, you have "+output.join(", ")+".");
	//console.log("Your shopping cart is empty.");
}

function removeFromCart(itemToRemove){
	var beginLength = cart.length;
	for (var i = 0, l = cart.length; i < l; i++) {
	   for (var item in cart[i]) {
	      if (itemToRemove == item){
	      	 cart.splice(i,1);
	      }
	   }
	}
	var endLength = cart.length;
	if (beginLength == endLength){
		console.log("That item is not in your cart.")
	}
	return cart;
}

function placeOrder(card){
	if (card == undefined){
		console.log("We don't have a credit card on file for you to place your order.");
	} else {
		console.log("Your total cost is $"+total()+", which will be charged to the card "+card+".");
	}
	cart = [];
}

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
