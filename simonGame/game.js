buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColors[nextSequence()];

gamePattern = [];
gamePattern.add(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100);

function nextSequence() {
    var randomNumber = Math.floor(Math.random * 3) + 1;
    return randomNumber;
}