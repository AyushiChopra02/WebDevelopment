// XML is used earlier. pahle onload callback then onerror callback fr
// open req. then send req
const req = new XMLHttpRequest();
req.onload = function () {
    console.log("all done with request!!")
    //  console.log(this)used forobject for the req itself
    console.log(data.ticker.request);
}

req.onerror = function () {
    console.log("ERROR!!")
        console.log(this);
}

req.open('GET' , 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send();