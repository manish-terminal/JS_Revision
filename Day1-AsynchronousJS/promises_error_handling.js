// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);

// promise.then(() => {
//   //proceedToPayment(orderId)
// });

// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     //createorder
//     //validatecart
//     //orderid
//     //resolve
//     if (!validateCart(cart)) {
//       const err = new Error("cart is invalid");
//       reject(err);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }
// function validateCart(cart) {
//   return false;
// }
// promise.then((orderId) => {
//   console.log(orderId);
// })
// .catch((err)=>{

// })

//------------------------
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    console.log(promise);
    //   resolve("success");
    reject("error");
  });
};
//promise has 3 states - pending, fulfilled, rejected

//generally we dont create promises like this, we use fetch api, axios, etc

let promise = getPromise();
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
