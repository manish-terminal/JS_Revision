//callback hell
//callback hell is when we have multiple callbacks inside a callback

function getData(dataId, getNextData) {
  //2 seconds
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
getData(1);
getData(2);
getData(3);

//data1
//data2
//data3

getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});

const cart = ["shoes", "pants", "kurta"];
createrorder(cart, () => {
  proceedtopayment(() => {
    showordersummary(() => {
      updateWallet();
    });
  });
});
//issues due to this
//callback hell
//inversion of control

