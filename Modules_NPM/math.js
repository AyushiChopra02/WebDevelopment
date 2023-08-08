const add = (x,y) => x +y ; 
const PI = 3.14159;
const square = x => x * x ;

// module.exports se math.js and app.js dono js file connect hogi h ek dsre k sath
//jo jo app.js m console m likha h usay mdle.exprt m alg alg likhna pdega yha

module.exports.add = add ;
module.exports.PI = PI ;
module.exports.square = square ;

//short syntx but isme strings nai ho skti mdle m ho skti
exports.square = square ;
exports.PI = PI ;