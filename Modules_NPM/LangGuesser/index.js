const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
const langCode = franc(input);
if(langCode === 'und'){
    console.log("sorry")
}else{
const language = langs.where("3" , langs);
console.log(`our best guess is :${language.name}`)
}