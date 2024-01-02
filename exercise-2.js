/*
    1. Create a function called "fetchFast" that returns 
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns 
       a Promise that resolves with the String "Slow Done"
       after 6 seconds 
    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    5. Call the async function you created
    6. Log out "Program complete!"

    7. How long does this take and why?
    8. How could you speed it up?
*/

const fetchFast = () => {
  return new Promise((resolves, reject) => {
    setTimeout(() => {
      resolves("Fast Done!");
    }, 2000);
  });
};

const fetchSlow = () => {
  return new Promise((resolves, reject) => {
    setTimeout(() => {
      resolves("Slow Done");
    }, 4000);
  });
};

console.log("Program Started");

let firstTimeStamp = new Date()

const asyncFunction = async () => {
  let fast = await fetchFast();
  console.log(fast);
  let slow = await fetchSlow();
  console.log(slow);

  let secondTimeStamp = new Date()
  let timeLapse = secondTimeStamp - firstTimeStamp
  console.log(timeLapse)
};

asyncFunction()
// asyncFast();
// asyncSlow();

// Promise.all([asyncFast(), asyncSlow()]).then((values) => {
//   console.log(values);
// });

console.log("Program Complete");
