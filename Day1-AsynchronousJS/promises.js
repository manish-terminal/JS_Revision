// const cart = ["shoes", "pants", "kurtas"];

// createOrder(cart, () => {
//   proceedToPayment(orderId);
// }); //orderId

// //-------------------------

// const promise = createOrder(cart);
// // {data:undefined}
// // {data:orderDetails}
// promise.then(() => {
//   proceedToPayment(orderId);
// });
//------------------------
const GITHUB_API = "https://api.github.com/users/manish-terminal";

const user = fetch(GITHUB_API);
console.log(user);

user.then((data) => {
  console.log(data);
  console.log(user);
});

//promise is an object that represents the eventual completion or failure of an asynchronous operation

//promise chaining
const promise = createOrder(cart)
  .then((orderId) => {
    return proceedtoPayment(orderId);
  })
  .then((orderId) => {
    return showOrderSummary(orderId);
  });

  