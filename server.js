const express = require('express')
const app = express();
const fs = require('fs')
const path = require('path')
const request = require('request')
const { PORT } = require('./config.js')
const { API_KEY } = require('./config.js')

/* const server = app.listen(8081,function (){
    const host = server.address().address
    const port = server.address().port
    console.log("Exemple app ok ", host, port);
})


 */
const url = 'https://api.nasa.gov/planetary/apod?start_date=2023-05-01&api_key=' + API_KEY;

request.get({
    url: url,
    json: true,
    headers: { 'User-Agent': 'request' }
}, (err, res, data) => {
    if (err) {
        console.log('Error : ', err)
    } else if (res.statusCode !== 200) {
        console.log('Status', res.statusCode)
    } else {
        //console.log(data)
        const newData = JSON.stringify(data)
        fs.writeFile('frontend/static/js/views/posts.json', newData, err => {
            if (err) throw err
            console.log('suceasfdss')
        })
    }
})


/* app.get('/ticker-result=:id', function (req, res) {
    const ticker = req.params.id
    fs.readFile(__dirname + "/static/js/views/posts.json", "utf8", function (err, data) {
        res.send(JSON.parse(data))
    })
}) */
app.listen(PORT || 4001, () => {
    console.log('Server running on port', PORT)
})

app.use("/static", express.static(path.resolve(__dirname, 'frontend', 'static')))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})