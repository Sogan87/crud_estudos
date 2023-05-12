const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('teste de mensagem')
})

app.listen(8080, ()=> {
    console.log(`Node API app is running on port 8080`)
})