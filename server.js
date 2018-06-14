const express = require('express')
const app = express()
// let path = require('path')

// app.get('/', (req, res) => res.send('Hello'))
// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
// app.use('/static', express.static(path.join(__dirname, 'src')))
app.use('/', express.static('src'));
// var process = process || {env:{PORT : 3000}};
// var port = process.env.PORT;

app.listen(process.env.PORT, () => console.log('Example app listening on port ' + process.env.PORT));
