const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var operation = req.body.operation;
    var result = calculate(num1, num2, operation);
    res.send("The result is: " + result);
});

function calculate(num1, num2, operation) {
    if (operation === '+') {
        return num1 + num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else if (operation === '*') {
        return num1 * num2;
    } else if (operation === '/') {
        return num1 / num2;
    }
}

app.listen(3000, function() {
    console.log("Server started on port 3000");
});