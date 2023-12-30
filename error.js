const makeTimeOut = (ms) => {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      // try
      //   resolve(`All done!`);
      // can switch between the blocks
      // catch
      reject("Uh oh!");
    }, ms);
  });
  return prom;
};

const fetchData = async () => {
  try {
    const results = await makeTimeOut(1000);
    console.log(results);
  } catch (e) {
    console.log("We are in the catch block");
    console.error(e);
  }
};
console.log("Program started");
fetchData();
console.log("Program done");
