var cart = [];

function getCart() {
    return cart;
}

function setCart(c) {
    cart = c;
    return cart;
}

function addToCart(item) {
    var newItem = {[item]: Math.floor(Math.random() * (100 - 2) + 1)};
    cart.push(newItem);
    console.log(`${item} has been added to your cart.`)

    return cart;
}

function viewCart() {
    var message = [];
    var addToJoin = '';

    if (cart.length === 0) {
        console.log("Your shopping cart is empty.");
    } else {
        for (var i = 0; i < cart.length; i++) {
            var keyName = Object.keys(cart[i])[0]
            
            if (cart.length > 1 && i === cart.length - 1) {
                message.push(`and ${keyName} at $${cart[i][keyName]}`)
            } else {
              message.push(`${keyName} at $${cart[i][keyName]}`)
            }
        }
    
        if (message.length === 2) {
            addToJoin = ' ';
        } else if (message.length >= 3) {
            addToJoin = ', ';
        }

        console.log(`In your cart, you have ${message.join(addToJoin)}.`);
  
    }
}

function total() {
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        total += cart[i][Object.keys(cart[i])[0]];
    }

    return total;
}

function removeFromCart(item) {
    var deletedItem = false;

    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(`${item}`)) {
            var deletedItem = cart.splice(i, 1);
        }
    }

    if (deletedItem === false) {
        console.log("That item is not in your cart.");
    }

    return cart;
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
        console.log("Sorry, we don't have a credit card on file for you.")
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
    }
}
