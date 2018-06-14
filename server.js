const express = require('express')
const app = express()
let path = require('path')

// app.get('/', (req, res) => res.send('Hello'))
// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.use('/', express.static('src'));
// var process = process || {env:{port : 3000}};
// var port = process.env.port;

app.listen(process.env.port, () => console.log('Example app listening on port ' + process.env.port));
