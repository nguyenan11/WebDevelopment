const express = require('express');
const https = require('https');

const app = express();



app.get("/", function(req, res) {

    const url = "https://restcountries.eu/rest/v2/all?fields=name;capital;";
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const countriesData = JSON.parse(data)
            for (country in countriesData) {
                console.log(country['name']);
            }
        });
    });

    res.send("Up and running");

});





app.listen(3000, function() {
    console.log("Server started on port 3000");
});