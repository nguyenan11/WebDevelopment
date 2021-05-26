/**
 * JS represents an event listener. When user clicks on the button, the dice
 * numbers will be refreshed and the winner of the 2 players will be announced.
 */

document.querySelector("button").addEventListener("click", rollDice);

/**
 * Roll 2 dices into new number, result will be updated correspondingly.
 */
function rollDice() {
    var randomNumber1 = createNewDice(".img1");
    var randomNumber2 = createNewDice(".img2");
    setResult(randomNumber1, randomNumber2);
}


/**
 * Helper function to create a new random dice number from 1 - 6 and also assign
 * a new dice image corresponding to specific dice.
 * @param {string} imgClass - the class tag for dice; either ".img1" or ".img2"
 * @returns the new dice number
 */
function createNewDice(imgClass) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var imgSource = "images/dice" + randomNumber + ".png";
    document.querySelector(imgClass).setAttribute("src", imgSource);
    return randomNumber;
}


/**
 * Helper function to set the result on top the page after 2 dices are rolled.
 * @param {int} number1 - the first number to be compared
 * @param {int} number2 - the second number to be compared
 */
function setResult(number1, number2) {
    if (number1 > number2) {
        document.querySelector("h1").innerHTML = "🎉 Player 1 wins!";
    } else if (number1 < number2) {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🎉";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}