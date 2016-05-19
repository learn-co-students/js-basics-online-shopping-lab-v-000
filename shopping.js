var cart = [];
var totalz = 0;

function getCart(){
	return cart;
}

function setCart(kart){
	cart = kart;
	return cart;
}

function addToCart(item){
	var price = Math.floor(Math.random()*100);
	itemPrice = {};
	itemPrice[item] = price;
	cart.push(itemPrice);
	console.log(item + ' has been added to your cart.');
	return cart;
}

function viewCart(){
	if (cart == []){
		console.log('Your shopping cart is empty.')
	} else {
		var statement = 'In your cart, you have ';
		for(let i = 0; i < cart.length; i++){
			var pair = cart[i];
			for (let cartItem in pair){
				statement += cartItem + ' at ' + '$' + pair[cartItem] + ', ';
			}
		}
		statement = statement.slice(0,-2);
		statement += '.';
		console.log(statement);
	}
}

function removeFromCart(name){
	for(var i = 0; i < cart.length; i++){
		for(var key in cart[i]){
			if(key == name){
				cart.splice(i,1);
				return cart;
			}
		}
	}
	console.log('That item is not in your cart.');
}

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }
  totalz = t;
  return totalz;
}

function placeOrder(cc){
	if (cc == null){
		console.log("We don't have a credit card on file for you to place your order.");
	} else {
		t = totalz;
		console.log(`Your total cost is $${t}, which will be charged to the card ${cc}.`);
		cart = [];

	}
}


