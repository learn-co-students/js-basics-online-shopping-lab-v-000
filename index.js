var cart = []

function getCart() {
 return cart
}
function setCart(c) {
  cart = c
}
function addToCart(item) {
    var price = Math.floor(Math.random() * 101);
    var stuff = { [item]: price };
    cart.push(stuff);
    console.log(`${item} has been added to your cart.`);
    return(cart);
}
//addToCart('flour');
function viewCart() {
    if (cart.length == 0) {
        console.log('Your shopping cart is empty.');
    } else {
        var gear = [];
        var i, item;
        for (i=0; i < cart.length; i++) {
            for (item in cart[i]) {
                gear.push(`${item} at $${cart[i][item]}`)
            }
        }
        console.log(`In your cart, you have ${gear.join(", ")}.`);
    }
}
//viewCart();
function total() {
    var totalCost = 0;
    var i, item;
    for (let i = 0; i < cart.length; i++){
        for (item in cart[i]) {
        totalCost += Math.floor(cart[i][item]);
        }
    }
    return totalCost;
}
//total()
function removeFromCart(item) {
      if (cart == 0) {
      console.log("That item is not in your cart.");
    } else {
        var i, stuff;
        for (let i = 0; i < cart.length; i++){
            for (stuff in cart[i]) {
                if (cart[i].hasOwnProperty(item)) {
                    cart.splice(i, 1);
                    console.log(cart);
                }
            }
        }
    }
}
//removeFromCart('bed');
function placeOrder(cardNumber) {
    if (arguments.length == 0) {
        console.log("We don't have a credit card on file for you to place your order.");
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart.splice(0);
        console.log(cart);
    }
}
//placeOrder(578)
