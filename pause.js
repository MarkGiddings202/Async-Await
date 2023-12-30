const makeTimeOut = (ms) => {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`All done!`);
    }, ms);
  });
  return prom;
};

console.log("Program started...");

const fetchData = async () => {
  console.log("Fetching first set of data...");
  const result1 = await makeTimeOut(2000);
//   console.log("Fetch second set of data...", result1);
  const result2 = await makeTimeOut(2000);
  const finalPromise = await Promise.all([result1 , result2])
  console.log("Done Fetching data...", finalPromise);

};

fetchData();

console.log("Program complete...");
