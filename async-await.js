const makeTimeOut = (ms) => {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`All done! The time is: ${ms}!`);
    }, ms);
  });
  return prom;
};

// Program order.

console.log("Program Starting") // 1

// .then() promises
makeTimeOut(1000).then((res) => { //3
  console.log(`From then() promise ${res}`);
});
// Async Await Promise l8-P

// 1. async has to be a function & stored in a variable
// 2. specify keyword
// 3. arrow function
const fetchedData = async () => { //3
  // 4. make a variable storing the resolve() value coming from the promise
  const value = await makeTimeOut(1000);
  // 5.see data value here
  console.log(`From async function ${value}`)
};
// call the async function
fetchedData()

console.log("Program Complete") //2
