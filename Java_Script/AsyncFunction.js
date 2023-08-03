//  async function hello() {
//}

const sing = async () => {
    throw "OH NO, problem"
    return 'LA LA LA'
}

sing()
.then(data =>{
    console.log("Promise resolved with:" , data)
})
.catch(err =>{
    console.log("oh  no , promise rejected")
    console.log(err)
})

const login = async (username , password) => {
    if(!username || !password) throw 'missing '
    if(password == 'corgifeet') return 'welcome'
    throw 'invalid password'
}

login('askjrngv')
.then (msg => {
    console.log("Logged in")
    console.log(msg)
})
.catch(err => {
    console.log("error")
    console.log(err)
})