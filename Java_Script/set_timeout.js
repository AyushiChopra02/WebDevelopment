// isme sbse pahle hello goodbye aajega aur 3000millisec mtlb 3 sec
//  baad aayega are u still there kuki settimeout lgaya h
console.log("hello")
setTimeout(() => {
    console.log("are u still there ")
} , 3000)
console.log("goodbye")


// setintervl mtlb hr 2 sec baad ab khud print hota rhega baar baar 
// stop krne k lie id dekr stop hoga
setInterval(()=> {
    console.log(Math.random())
} , 2000) ;