let first = document.getElementById("firstNumber");
let second = document.getElementById("secondNumber");
let random = Math.ceil(Math.random() * 99);
let random1 = Math.ceil(Math.random() * 99);
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult")
let add = random + random1;
first.textContent = random;
second.textContent = random1;

function checkButton() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber === add) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.color = "white";
        gameResult.style.backgroundColor = "green";

    } else {
        gameResult.textContent = "Please Try Again!";
        gameResult.style.color = "white";
        gameResult.style.backgroundColor = "blue"
    }
}

function restartButton() {
    userInput.value = "";
    gameResult.textContent = "";
    let random2 = Math.ceil(Math.random() * 99);
    let random3 = Math.ceil(Math.random() * 99);
    first.textContent = random2;
    second.textContent = random3;
}