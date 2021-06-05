const express = require('express');
const https = require('https');

const app = express();



app.get("/", function(req, res) {

    const url = "https://restcountries.eu/rest/v2/name/viet";
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
            const vietnam = JSON.parse(data);
            // console.log(vietnam);
            const capital = vietnam[0].capital;
            const currency = vietnam[0].currencies[0].code;
            console.log("Capital of Vietnam is " + capital + ", and their \
currency is " + currency);
        });

    res.send("Up and running");

    });
});





app.listen(3000, function() {
    console.log("Server started on port 3000");
});