'use strict'; 
var cart=[], total=0, orderNumber, cardNumber;

function addToCart(item) {
	var price=Math.floor(Math.random()*100);
	var itemHash={}
	itemHash[item]=price
	cart.push(itemHash);
	total+=price;
	console.log(item+" has been added to your cart")
}

function viewCart() {
	//debugger;
	for(var index=0; index<cart.length; index+=1){
		var item=Object.keys(cart[index])[0];
		console.log( "In your cart you have: "+item+" $"+cart[index][item] )
	}
}

function addCreditCard(number) {
	cardNumber=number;
	console.log("Your credit card number has been saved.")
	return number;
}

function removeFromCart(item) {
	var itemIndex=indexOfHash(cart, item);
	if (itemIndex!=null){
		total-=cart[itemIndex][item]
		cart.splice(itemIndex, 1);
	} else {console.log("That item is not in your cart")}
}

function indexOfHash(array, hashName) {
	var location=null;
	for(var i=0; i<array.length; i+=1){
		if (Object.keys(array[i])[0]===hashName) location=i;
	}
	return location;
}

function placeOrder(){
	if(typeof(cardNumber)==='number'){
		console.log('Your total cost is: $'+total+' and will be charged to the credit card on file ('+cardNumber+'). Your order number is '+orderNumber);
		orderNumber+=1;
		total=0;
	} else {console.log("We don't have a credit card on file for you to place your order")}
}