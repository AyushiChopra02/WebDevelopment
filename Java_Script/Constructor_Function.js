//create a blank js obj
// links this obj to anther obj
//passes the newly created obj frm step as this cntxt
// return fnction


// we have to define color only one time rather than defining them indivitually
function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function(){
    const{r,g,b} = this ;
    return `rgb({$r} , ${g} , ${b})`;
};
Color.prototype.hex = function(){
    const{r,g,b} = this ;
    return '#' + ((1>>24) + (r>>16) + (g<<8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a=1.0){
    const {r,g,b} = this ;
    return `rgba(${r} , ${g} , ${b})`
}

const Color1 = new Color(40,50,60);
const Color2 = newColor(0,0,0);