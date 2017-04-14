var cart = []

function getCart() {
    return cart
}

function setCart(c) {
    cart = c
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100) + 1;
    cart.push({[item]: price})
    console.log(`${item} has been added to your cart.`)
    return cart
}


function viewCart() {
    var contents = [];
    var cart = getCart();
    var reply = '';
    if (cart.length === 0) {
        reply += "Your shopping cart is empty.";
    } else {
        reply += "In your cart, you have";
        for (var i = 0; i < cart.length; i++){
            for (var item in cart[i]){
                reply += ` ${item} at $${cart[i][item]},`;
            }
        }
    }
    reply = reply.slice(0,-1) + '.';

    console.log(reply);
    return reply;
}

function total() {
    var ammount = 0;
    for (var i = 0; i < cart.length; i++){
            for (var item in cart[i]){
                ammount += cart[i][item];
            }
        }
    return ammount;
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++){
        if (cart[i].hasOwnProperty(item)){
            cart.splice(i,1);
            return cart;
        }
    }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
    if (!cardNumber){
        console.log('We don\'t have a credit card on file for you to place your order.')
    } else {
        var t = total();
        console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
        setCart([])
    }
}

