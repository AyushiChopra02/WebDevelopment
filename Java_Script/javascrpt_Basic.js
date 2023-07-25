let numLives=9;
undefined
numLives=numLives+2
11
numLives--
11
numLives--
10
numLives++
9
numLives
10
numLives++
10
numLives++
11
const hens=4;
undefined
const hens=4;
undefined
hens
4
const hens ++ ;
VM720:1 Uncaught SyntaxError: Missing initializer in const declaration
let islooged = false;
undefined
islooged
false
islooged=3342;
3342
islooged;
3342

// strings

let animal="Dumb octopus"
undefined
animal
'Dumb octopus'
// sq brcket m index dala and it will tell which alphbet is on that index
animal[1]
'u'

undefined
animal[3]
'b'
let phone="(231)342-44"
undefined
phone[0]
'('
phone[8]
'-'
animal.length
12
animal[9]
'p'
"coco".length
4
"coco"[2]
'c'
1+3
4

//  this is called concatenation adding two strings
"coco"+"coco"
'cocococo'
let firstName="River"
undefined
let lastName="ride";
undefined
firstName + lastName
'Riverride'
firstName + " " + lastName
'River ride'
let fullName = firstName + " " + lastName
undefined
fullName
'River ride'
let result = 1 +"hi"
undefined
typeof result
'string'

// StringMethods
let msg ="leave me alone right now i hate you"
undefined
msg.toUpperCase()
'LEAVE ME ALONE RIGHT NOW I HATE YOU'
msg
'leave me alone right now i hate you'

let angryMsg = msg.toUpperCase()
undefined
angryMsg
'LEAVE ME ALONE RIGHT NOW I HATE YOU'
// template literals
`hello ${1 + 2 + 4}`
'hello 7'
'hello${1+2+9}'
'hello${1+2+9}'
// math object
Math.PI 
3.141592653589793
Math.E
2.718281828459045
Math.floor(23.90)
23
Math.floor(23.9999999999)
23
Math.ceil(34.99)
35
Math.ceil(34.1)
35
Math.random()
0.12585278342946826
console.warn("UH OH WARNING)
VM200:1 Uncaught SyntaxError: Invalid or unexpected token
console.warn("UH OH WARNING!")
VM213:1 UH OH WARNING!
(anonymous) @ VM213:1
undefined
alert("HI THERE!")
undefined
prompt("please enter number")
'22'
let userInput = prompt("please enter number")
undefined
userInput
'33'
parseInt("101asnhcb2")
101

// push & pop
let movieLine = ['tom' , 'jerry']
undefined
movieLine[2] = 'pablo'
'pablo'
movieLine.push('eva')
4
movieLine
(4) ['tom', 'jerry', 'pablo', 'eva']
movieLine.pop()
'eva'
movieLine
(3) ['tom', 'jerry', 'pablo']

// shift & unshift
movieLine.unshift('VIP')
4
movieLine
(4) ['VIP', 'tom', 'jerry', 'pablo']
movieLine.shift()
'VIP'
movieLine
(3) ['tom', 'jerry', 'pablo']

//concact
let cats = ['kitty' , 'rai' , 'bruno']
undefined
let dogs = ['car' , 'gai']
undefined
dogs.concat(dogs)
(4) ['car', 'gai', 'car', 'gai']
dogs.concat(cats)
(5) ['car', 'gai', 'kitty', 'rai', 'bruno']

cats.includes('blue')
false
cats.includes('kitty')
true

// slice
let colors = ['red' ,'orange' , 'blue' , 'violent'] ;
undefined
colors.slice()
(4) ['red', 'orange', 'blue', 'violent']
colors.slice(1)
(3) ['orange', 'blue', 'violent']