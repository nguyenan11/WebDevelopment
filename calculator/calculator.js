const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    res.send("Thanks for posting");
    console.log(req.body.num1);
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});