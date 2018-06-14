const express = require('express')
const app = express()
let path = require('path')

// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
