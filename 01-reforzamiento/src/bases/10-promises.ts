const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //!YO quiero ganar dinero
    resolve(100);
  }, 2000);
});

myPromise
  .then((myMoney) => console.log(myMoney))
  .catch((reason) => console.log(reason))
  .finally(() => console.log("a seguir con la vida"));
