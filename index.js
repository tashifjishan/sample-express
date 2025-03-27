const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("OK")
})

app.get("/contact", (req, res)=>{
    res.send("trying to contact")
})
app.listen(8080)