const fs = require('fs');
console.log(fs) 
//asynchronous version
// fs.mkdir('Dogs' , {recursive : true} , (err) => {
// console.log("in callback")
// if (err) throw err;
// })
// console.log("i come after")

// //synchronous version
// fs.mkdirSync('Cats');
// asasd
// console.log('i come after')
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/styles.css`)
} catch(e) {
    console.log("Something went wrng");
    console.log(e);
}