// console.dir(btn) use in console give all properties can use with button
const btn =document.querySelector('#v2');
btn.onclick = function() {
    console.log("you clicked me")
    console.log("it works!!")
}

function scream(){
    console.log("AAAHHHHHH")
    console.log("stop touching me!!!")
}
btn.onmouseenter= scream ;
//  on mouse enter mtlb jaise e mouse layege btn pr

function Twist(){
    console.log("TWIST")

}
function Shout(){
    console.log("SHOUT")
}
const tasButton = document.querySelector('#tas');
tasButton.addEventListner('click' , Twist)
tasButton.addEventListner('click' , Shout)

// addEventListner se do cheeze ek e btn pr sath kr skte h agr hm
// pahle jaise likhde fr dono cmmnd sath na chlege dusra vala replace krdega