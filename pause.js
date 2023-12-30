const makeTimeOut = (ms) => {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`All done! The time is: ${ms}!`);
    }, ms);
  });
  return prom;
};

console.log("Program started...");

const fetchData = async () => {
  console.log("Fetching first set of data...");
  const result1 = await makeTimeOut(2000);
  console.log("Fetch second set of data...", result1);
  const result2 = await makeTimeOut(2000);
  console.log("Done Fetching data...", result2);
};

fetchData();

console.log("Program complete...");
