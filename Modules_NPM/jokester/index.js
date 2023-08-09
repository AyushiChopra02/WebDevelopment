const jokes = require("give-me-a-joke");
const colors = require("colors");
jokes.getRandomDadJoke(function(joke){
console.log(joke.rainbow);
});
// we can install evrything locally using command... npm i or npm install
// npm i -g stands for global and it will install global node package