const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const country = req.body.countryName;

    const url = "https://restcountries.eu/rest/v2/name/" + country;
    https.get(url, function(response) {
        console.log(response.statusCode);

        var data;
        response.on("data", function(chunk) {
        if (!data) {
            data = chunk;
        } else {
            data += chunk;
        }
        });

        response.on("end", function() {
            const countryData = JSON.parse(data);
            // console.log(vietnam);
            const capital = countryData[0].capital;
            const currency = countryData[0].currencies[0].code;
            res.write("<p>Capital of " + country + " is " + capital + "</p>");
            res.write("<h1>Their currency is " + currency +".</h1>");
            res.send();
        });

    });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});