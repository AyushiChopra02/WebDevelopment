 const allImages =document.getElementsByTagName('img') ;
for(let img of allImages) {
     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"'
 }


// Selecting Method :-
// 1  .getElementsByTagName
// 2  .getElementsById
// 3  .getElementsByClassName

// we can replace selecting method by querySelector and querySelectorAll
// queryselctr se bs phli chz e select hoke show hogi qrySelterAll se sara 
const links = document.querySelectorAll('p a');
for(let link of links){
    console.log(link.href)
}

// Manipulating 
// document.querySelector('h1').innerText = '<i>bgfds</i>'
// '<i>bgfds</i>'
// document.querySelector('h1').innerHTML = '<i>bgfds</i>'
// bgfds



// TransversingParentChildSibling
// squareImg
// <img class=​"square" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​commons/​thumb/​e/​e2/​Silky_bantam.jpg/​440px-Silky_bantam.jpg" alt>​
// squareImg.nextSibling
// #text
// squareImg.previousSibling
// #text
// squareImg.nextElementSibling
// <img class=​"square" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​en/​thumb/​e/​e0/​Male_Silkie.png/​460px-Male_Silkie.png" alt>​
// squareImg.previousElementSibling
//<p>​…​</p>​

// newImg.classList.add('square') to change size of image