// function rollDie(numSides = 6) {
    // return Math.floor(Math.random() * numSides) + 1
// }
// ab jb hm print krge agrsrf rollDie() likheh to 1 to 6 numsides di h to 
// number inke beech e ayega aur agr rollDie()parenthsis k beech koi no. dege jaise 20
// to vha tk no. print hojege


function greet(person , msg = "Hey there" , punc = '!'){
    console.log(`${msg}, ${person}${punc}`)
}

// Spread in function call mtlb space between letters ya no.
console.log('hello')
// output :- hello

console.log(...'hello') // is sytnx se space khud aajega beech m
// output :- h e l l o

//Rest
function raceResults(gold, silver , ...everyoneElse){
    console.log(`Gold Medal goes to : ${gold}`)
    console.log(`silver Medal goes to : ${silver}`)
    console.log(`and thanks to everyone else : ${everyoneElse}`)
}
