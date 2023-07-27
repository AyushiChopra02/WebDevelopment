// Function Scope
// using different variable
// collectEggsis scoped to totalEggs function
let totalEggs = 0 ;
function collectEggs() {
    totalEggs = 6 ;
}
// yea console jo function se pahle totalegg declare h uski value dega 
console.log(totalEggs);
collectEggs();
// ab hmne collecteggs declare krdia to ab ye fnction vale ka ans dega
console.log(totalEggs);


// block scope
// isme jo b hmne declare kia like msg vo incide curly breaces hi valid h
//  mtlb blck me e valid h uske baar undefined
// for(let i = 0 ; i<5 ; i++){
//     let msg = "HEYYYY" ;
//     console.log(msg)
// }
// console.log(msg) //undefined
// console.log(i)


// Lexical Function :-nested function...and nested function has access to same stuff 
// as a parent function 
function bankRobbery() {
    const heroes = ['Spiderman' , 'ironMan' , 'thor']
    function cryforhelp(){
        // function inner(){
            for (let hero of heroes){
                console.log(`please help me, ${hero.toUpperCase()}`)
            }
        
    }
    cryforhelp();
}   
