// Fetch
// Using Promises
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log("RESPONSE" , res)
//     return res.json()
// })
// .then(data => {
//     console.log("DATA PARSED...")
//     console.log(data.ticker.price)
// })
// .catch(e => {
// console.log("OH NO!!" , e)
// })


// using async
const fetchBitcoinPrice = async () => {
    try {
   const res =await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
   const data = await res.json();
   console.log(data.ticker.price)
} catch (e) {
    console.log("something went wrong" , e)
}
}     