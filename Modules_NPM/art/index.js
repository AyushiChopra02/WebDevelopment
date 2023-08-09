//npm stnds for node package mananger
//figlet krne se hello world alg style se tirmnal m dikha
const figlet = require("figlet");
// ise color chnge krdia
const colors =require("colors");
figlet('Hello World' , function(err,data){
    if (err){
        console.log('Something went wrong');
        console.dir(err);
        return ;
    }
    console.log(data.yellow)
})