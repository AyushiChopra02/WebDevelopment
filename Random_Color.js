const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click' , function(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() *  255);
    // making new string
    const newColor = `rgb(${r} , ${g} , ${b} )`;
    // h1.innerText=newcolor se jo h1 h ab vha newcolor jo ayege uske no. aajege
    h1.innerText = newColor ;
})