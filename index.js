var cart = [];

function showObject(obj) {
    var result = "";
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            result += p + " at $" + obj[p] + ",";
        }
    }
    return result;
}

function getValue(obj) {
    for (var p in obj)  {
        if (obj.hasOwnProperty(p)) {
            return obj[p];
        }
    }
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

var Item = {
    itemName: "goods",
    itemPrice: 10
};

function addToCart(item) {
    var newItem = {[item]: Math.floor(Math.random() * 100) + 1};
    cart.push(newItem);
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
    let check = cart.length;
    if (check < 1) {
        console.log("Your shopping cart is empty.");
        return result;
        return cart;
    } else if (check < 2) {
        for(let index in cart) {
            var result = showObject(cart[index]);
            result = result.slice(0, -1);
            console.log("In your cart, you have " + result + ".")
        }
    } else if (check < 3) {
        var bigun = "";
        for (let index in cart) {
            var oneGood = showObject(cart[index]);
            bigun += oneGood + " ";
        }
        bigun = bigun.slice(0, -2);
        var commaChange = bigun.lastIndexOf(",");
        var firstBigun = bigun.slice(0, commaChange);
        var secondBigun = bigun.slice(commaChange +1);
        console.log("In your cart, you have " + firstBigun + " and" + secondBigun + ".")
    } else {
        var bigun = "";
        for (let index in cart) {
            var oneGood = showObject(cart[index]);
            bigun += oneGood + " ";
        }
        bigun = bigun.slice(0, -2);
        var commaChange = bigun.lastIndexOf(",");
        var firstBigun = bigun.slice(0, commaChange +1);
        var secondBigun = bigun.slice(commaChange +1);
        console.log("In your cart, you have " + firstBigun + " and" + secondBigun + ".");
        }
 }


function total() {
  var totalArr = [];
    for(let index in cart) {
        var val = getValue(cart[index]);
        totalArr.push(val);
    }
    var totalArrTotal = totalArr.reduce(function(sum, total) {
        return sum + total
    }, 0);
    return totalArrTotal;
}

function removeFromCart(item) {
    var check = cart.length;
    for(var index in cart) {
        if (cart[index].hasOwnProperty(item)) {
        cart.splice(index, 1);
        return cart;
      }
    }
    var check2 = cart.length;
    if (check == check2) {
        console.log("That item is not in your cart.");
        return cart;
      }
   }


function placeOrder(cardNumber) {
    if (cardNumber == null) {
        console.log("Sorry, we don\'t have a credit card on file for you.")
    } else {
        var tot = total();
        console.log("Your total cost is $" + tot + ", which will be charged to the card " + cardNumber + ".");
        cart = [];
        return cart;
    }
}
