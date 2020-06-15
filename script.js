// Promise.resolve
// Promise.fetch
// Promise.then
// Promise.catch
// Promise.reject

//===============================================================

// const request = fetch("https://api.chucknorris.io/jokes/random")
// console.log("Before result", request);

// //Cette partie du code ne bloquera pas la suite du code
// request.then(
//     (response) => console.log("Success", response),
//     (error) => console.warn("Failure", error),
// );

// // Syntaxe identique à celui de dessus (short)
// // request.then(console.log, console.warn);

// //Call back dans un cas d'erreur
// request.catch()
// console.log("After then");

//===============================================================

// const request = fetch("https://api.chucknorris.io/jokes/random");
// request
//   .then(
//     function onResolved(chuckJoke) {
//       return fetch("https://icanhazdadjoke.com/");
//     },
//     function onRejected() {
//       console.warn("Chuck Norris Joke Not Received"); // Not called
//     }
//   )
//   .then(
//     function onResolved(dadJoke) {
//       console.log("Dad Joke Received", dadJoke);
//       // Dad Joke Received: Response { ... }
//     },
//     function onRejected() {
//       console.warn("Dad Joke Not Received"); // Not called
//     }
//   );

  //===============================================================

// fetch("https://api.chucknorris.io/jokes/random")

//     .then((response) => response.json())
//     .then((jokeObject) => jokeObject.value)
//     .then((joke) => console.log("Heard a new joke!", joke))
//     ;
// response.status

var myObj = { firsname : "John", lastname : "Doe" };
console.warn(myObj.lastname);








