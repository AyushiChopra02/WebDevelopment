const express = require("express");
const app = express();
app.use((req , res) => {
console.log("we got reqst")
res.send("hello , we got rqst")
})
app.listen(8080, () => {
console.log("listening on port")
})
