// evt = event
document.querySelector('button').addEventListener('click' , function (evt){
console.log(evt)
})

//  const input = document.querySelector('input');
// input.addEventListener('keydown' , function(e){
//     // isme hm input dere h type kre h box m
//    // e.key mtlb jo type kia hai aur code mtlb jo key press kri h actual location on keybrd ike key a shift right dono cheeze console m print hogi
//     console.log(e.key)
//     console.log(e.code)
// })

// input.addEventListener('keyup', function(){
//     console.log("KEYUP")
// })

// isme hme box jo h usme likhne ki need nai simply press krni h keys bss
window.addEventListener('keydown' , function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break ;
            case 'ArrowDown':
            console.log("DOWN!");
            break ;
            case 'ArrowRight':
            console.log("RIGHT!");
            break ;
            case 'ArrowLeft':
            console.log("LEFT!");
            break ;
            default:
                console.log("IGNORED!");
    }
})