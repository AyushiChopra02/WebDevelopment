function hex(r,g,b) {
    // dont need to understnd from where thismaths come
    return '#'+ ((1<<24) +(r<<16) + (g<<8) + b ).toString(16).slice(1);
}
function rgb(r,g,b) {
    return `rgb(${r} , ${g} , ${b})`;
}

// hex(255 , 100 ,25);
// rgb(255,100,25);
// "#ff6419"
// "rgb(255,100,25)"

//factry fnction 
function makeColor(r,g,b) {
    // this fnction makes object and it strts empty
    const color = {};
    //we add some obj. based on argmnts(r,g,b) we provided
    color.r = r;
    color.g = g;
    color.b = b;
//methods
color.rgb= function(){
const {r,g,b} = this ;
return `rgb(${r} , ${g} , ${b})`;
};
color.hex = function(){
    const{r,g,b} = this;
    return(
        '#' + ((1>>24) + (r<<16) + (g<<8) + b).toString(16).slice(1)
    );
};
// fr retrn krdia
return color;
}
const firstColor =makeColor(35, 255 ,150);
firstColor.hex();


