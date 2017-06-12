var cart = []

function getCart() {
    return cart
}

function setCart(c) {
    cart = c
}

function addToCart(item) {
    var price = Math.floor((Math.random() * 100) + 1);
    //var newcart = {[item]: price}
    console.log(`${item} has been added to your cart.`)
    cart.push({
        [item]: price
    })
    return cart
}

function viewCart() {
    if (!cart.length) {
        console.log("Your shopping cart is empty.")
    } else {
        var array = []
        for (var i = 0; i < cart.length; i++) {
            var itemandprice = cart[i] //itemandprice = {socks: 30}
            var item = Object.keys(itemandprice)[0] // "socks"
            var price = Object.values(itemandprice)[0] //itemandprice[item] // 30
            array.push(`${item} at $${price}`)
        }
        console.log(`In your cart, you have ${array.join(", ")}.`)
    }
}


function total() {
    var totalprice = 0
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i]
        for (var itemCost in item) {
            totalprice = totalprice + item[itemCost]
        }
    }
    return totalprice
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i, 1)
        } else {
            return cart
        }
    }
    console.log("That item is not in your cart.")

}

function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
        console.log("We don't have a credit card on file for you to place your order.")
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    }
    return cart.length = 0
}
