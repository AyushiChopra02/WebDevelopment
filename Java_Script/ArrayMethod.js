const numbers = [1,2,3,4,5,6,7,8,9,10]
// Call Back Array Method

// forEach Method
numbers.forEach(function(el){
if (el % 2 ===0){
    console.log(el)
}
})

// map method
const doubles = numbers.map(function (num){
    return num * 2 ;
})

// arrow function
const add = (x,y) => {
    return x + y ;
}

const square = num => {
    return num * num ;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

// implicnt fnction mtlb hm return nai likhre h aur function retrn hora
// lekin tbi hoga jb paranthesis k andr ek e ho fnction usy jyada m return ni krega