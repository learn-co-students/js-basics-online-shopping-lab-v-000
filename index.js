var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart(){
	return cart;
}

function addToCart(item){
	var price = Math.floor(Math.random(0,1));
	var thing = {};
	thing[item] = price;
	cart.push(thing);
	console.log(item + " has been added to your cart.");
	return cart;
}


// cart = [
//  { oranges: 1}
// ] 
//
function viewCart(){
	var items = [];
	if (cart.length === 0){
		console.log("Your shopping cart is empty.")
	}else{
		for (var i = 0; i < cart.length; i++){
			for (var item in cart[i]){
				if (i < cart.length-1){
					items.push(" " + item + " at $" + cart[i][item]);
				}else{
					items.push(" " + item + " at $" + cart[i][item] + ".");
				}
			}
		}
		console.log("In your cart, you have" + items);
	}
}
		

function removeFromCart(thing){
	var foundItem = false;
	for (var i = 0; i < cart.length; i++){
		for (var item in cart[i]){
			if (item == thing){
				foundItem = true;
				cart.splice(i,1);
			}
		}
	}
	if (foundItem == false){
		console.log("That item is not in your cart.");
	}

}

function placeOrder(creditCardNumber){
	if (creditCardNumber == "undefined" || creditCardNumber == null){
		console.log('We don\'t have a credit card on file for you to place your order.');
	}else{
		console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCardNumber + ".");
	}
	cart = [];
}
