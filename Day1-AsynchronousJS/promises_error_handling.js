const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then(() => {
  //proceedToPayment(orderId)
});

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    //createorder
    //validatecart
    //orderid
    //resolve
    if (!validateCart(cart)) {
      const err = new Error("cart is invalid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}
function validateCart(cart) {
  return false;
}
promise.then((orderId) => {
  console.log(orderId);
})
.catch((err)=>{
    
})
