/*
    1. Create a function called "fetchPokemon" that returns 
       a Promise that resolves with the value :
       { data: {name: "Pickachu", power: 20} } after 2 seconds
    2. Print out "Program starting..."
    
    3. Create an async function that uses await to wait for
       the data to comes back from "fetchPokemon" then log out
       the data

    4. Call the async function you created
    5. Log out "Program complete!"

    After your're done the above ^:
    6. Change "fetchPokemon" to reject after 2 seconds instead
       with a new Error Object with the message "Danger, danger!"
    7. How can you modify your async function to catch this error?
*/
// 1.
const fetchPokemon = () => {
  return new Promise((resolves, reject) => {
    // setTimeout(() => {
    //   resolves({ data: { name: "Pickachu", power: 20 } });
    // }, 2000);
    setTimeout(() => {
      reject(new Error("Danger, Danger!"));
    }, 2000);
  });
};

// 2.
console.log("Program started");

// 3.
const asyncFunction = async () => {
  try {
    let result = await fetchPokemon();
    console.log(result);
  } catch (e) {
    console.log(e);
    console.log("We're error handling now");
  }
  console.log("Our code can still execute even though we had an error in our code")
};
// 4.
asyncFunction();
// 5.
console.log("Program complete");
