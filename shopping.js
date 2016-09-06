
var cart = []
function setCart(c) {
  cart = c
}
function addToCart(item) {
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)

return cart
}

function getCart(){
  return cart
}

function viewCart(cart){
  for (var key in cart) {
console.log('In your cart, you have'+key+' at '+cart[key])
}
