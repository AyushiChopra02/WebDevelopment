// let count = 0 ;
// while (count < 10){
    // count ++ ;
    // console.log(count)
//  }


// const SECRET = "BabyHippo";
// let guess = prompt("enter the secret code");
// while (guess !== SECRET){
    // guess = prompt("enter the secret code");
//  }
// console.log("congrats you got secret")


// let input = prompt("Hey , say something")
// while(true) {
//     input = prompt(input);
//     if(input.toLowerCase()=== "stop copying me")  {
//         break ;
//     }
// }
// console.log("ok you win")


// writing a guessing game
// let maximum = parseInt(prompt("enter number"));
// while(!maximum){
//     maximum = parseInt(prompt("enter a valid number"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1 ;
// console.log(targetNum);
// let guess = prompt("enter your first guess");
// let attempts =1 ;
// while (guess !== targetNum){
//     attempts ++ ;
//     if(guess > targetNum){
//         guess = parseInt(prompt("too high! enter a new guess"))
//     } else{
//         guess =parseInt(prompt("too low! enter a new guess"))
//     }
// }
// console.log(`you got it! it took ${attempts}guesses`)


// const seatingChart =[
//     ['kri' , 'preeti' , 'garima'],
//         ['geo' , 'yuma' , 'jack']
// ]

// for(let i = 0 ; i<seatingChart.length ;i++){
//     const row =seatingChart[i];
//     for(let j=0 ; j<row.length ;j++){
//         console.log(row[j]) 
//     }
// }
// // 2nd method
// this is for...of   can be used commonly anywhere
// for(let  row of seatingChart){
//     for(let student of row){
//         console.log(student);
//     }
// }

const testScore = {
    keenan : 60 ,
    shaw : 34 ,
    raiya : 66 ,
    by : 45 ,
}
// for(let person in testScore){
    // console.log(`${person} scored ${testScore[person]}`);
// }

let total = 0 ;
let scores = Object.values(testScore);
for(let score of scores){
    total += score ;

}
console.log(total/ scores.length)
