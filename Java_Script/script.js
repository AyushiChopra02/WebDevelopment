console.log("Hello!!!")
let total = 1+3;

// if statement
console.log("before condition")
if(1+2==3){
    console.log("Math still work")
}
console.log("after condition")

// else-if
const dayOfWeek = 'friday';
if(dayOfWeek == 'Monday'){
    console.log("I Hate Mondays")
}
else if (dayOfWeek == 'saturday'){
    console.log("Yoo!!")
}
else if(dayOfWeek == 'friday'){
    console.log("decent")
}

const age = 34 ;
if(age < 5){
    console.log("u are baby.")
}else if(age<10){
console.log("you are child")
}
else if(age<65){
    console.log("you r adult")
}

// true false
const userInput = prompt("enter smthng");
if(userInput){
console.log("truthy")
} else {
    console.log("falsy")
}

// logical And
const password = prompt("enter password");
if(password.length >=6 && password.indexOf(' ')== -1){
    console.log("Valid Password")
}else{
    console.log("Incorrect Format Password")
}

// logical Or And
// const Age = 100 ;
// if((Age <= 0 && Age<5) || Age>=65){
// console.log("Free");
// } else if (age >= 5 && age<10){
//         console.log("$10")
// }else if (age >= 10 && age < 65){
//     console.log("$20")
// }else{
//     console.log("invalid age")
// }

// logical not
let firstName = prompt("enter number");
if(!firstName){
    firstName = prompt("try again");
}

const Age = 8 ;
if (!(age >= 0 && age<5 || age >= 65)){
    console.log("you r not baby nor senior")
}

// switch
const day =3 ;
switch (day) {
    case 1 :
        console.log("Monday");
        break ;
case 2 :
    console.log("tuesday");
    break ;
    case 3 :
    console.log("wednesday");
    break ;
    case 4 :
    console.log("thrusdayy");
    break ;
    case 5 :
    console.log("friday");
    break ;
    case 6 :
    console.log("weekend");
    break ;
    default :
    console.log("i dont know")
}