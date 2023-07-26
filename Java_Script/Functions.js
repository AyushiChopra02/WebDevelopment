function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("ME");
}
function greet(firstName) {
    console.log(`firstName is : ${firstName}`)
}

function greet(firstName , lastName){
    console.log(`hey there ${firstName} ${lastName[0]}.`)
}

function repeat(str , numTimes){
    let result = '' ;
    for(let i =  0 ; i <numTimes ; i++){
        result += str ;
    }
    console.log(result);
}