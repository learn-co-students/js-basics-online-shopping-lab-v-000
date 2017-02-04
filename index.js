var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart()
{
  return cart;
}


function addToCart(item)
{
  debugger;
var price= Math.random()*100;
var p=Math.floor(price);
cart.push({[item] : p})
 console.log(item+ " has been added to your cart.")
 return cart;
}

function viewCart()
{
  debugger ;
  if(cart.length!=0)
  {
    var s="In your cart, you have ";
  for (var i=0;i<cart.length;i++)
  {
   for(var key in cart[i])
   {
     if(i!=cart.length-1)
   s=s+ key + " at " + "$" + cart[i][key] + ", ";
   else
     s=s+ key + " at " + "$" + cart[i][key] + ".";

   }
 }
   console.log(s);
}
else
console.log("Your shopping cart is empty.");
}

function total() {
  var t = 0 ;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item] ;
    }
  }

  return t ;
}



function removeFromCart(item)
{
  var found=false;
for(var i=0;i<cart.length;i++)
{
if(cart[i].hasOwnProperty(item))
{
  cart.splice(i,1);
  found=true;
}
}
if(found==false)
console.log("That item is not in your cart.")
}
  /*console.log("That item is not in your cart.". )
  If the item is in your cart, it should remove the object
   from the cart array. Then return the cart.
   (HINT: Check each object's key to see if it
   matches the parameter, then remove it if it matches.
    You might find hasOwnProperty to be useful.)*/



function placeOrder(creditcardnumber)
{
  if(typeof creditcardnumber == "undefined")
  {
  console.log("We don't have a credit card on file for you to place your order.")

}
else
  {
  console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditcardnumber + ".")
  cart=[];
}

}
