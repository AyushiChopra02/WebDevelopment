// function callTwice(func){
//     func();
//     func();
// }
// function callTenTimes(f) {
//     for(let i = 0 ; i<10 ; i++){
//         f()
//     }
// }
// function rollDice(){
//     const roll = Math.floor(Math.random()*6) + 1
//     console.log(roll)
// }

// function makemysteryFunc() {
//     const rand = Math.random();
//     if(rand > 0.5) {
//         return function () {
//             console.log("congrats")
//             console.log("you win")
//         }
//     }else{
//         return function() {
//             alert("oh no!!!")
//         }
//     }
// }

function makeBetweenFunc(min , max) {
    return function (num) {
        return num >= min && num <= max ;
    }
}

// makeBetweenFunc(50 , 100)

// function isBetween(num) {
    // return num >= 50 && num <= 100
// }

