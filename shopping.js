var cart=[];

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

function setCart(array) {
  var car = array;
}

function addToCart(item, cart) {
  var price = Math.floor(Math.random() * 100 + 0); //create a random number for price between 0 and 100
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return getCart(); //return cart
}


function viewCart() {
  getCart();
	for (var item in object) {
		if(object[item].length !==0) {
			console.log(`In your cart, you have ${item} at ${object[item]}`);
		}else{
			console.log("Your shopping cart is empty.");
		}
	}
}
