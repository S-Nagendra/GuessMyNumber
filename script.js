'use strict'

let secretNumber = createSecretNumber();
let score = 20;
let highScore = 0;

const updateScore = function (msg) {
    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(msg);
    } else {
        displayMessage('You lose the game!');
        document.querySelector('.score').textContent = 0;
    }
}

function createSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1
}

const displayMessage = function (msg) {
    document.querySelector('.message').textContent = msg
}

const updateStyles = function (bodyBgColor, numWidth) {
    document.querySelector('body').
        style.backgroundColor = bodyBgColor;
    document.querySelector('.number').style.width = numWidth
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) return displayMessage('No Number');
    switch (true) {
        case guess < 1 || guess > 20:
            updateScore('Enter value between 1 and 20');
            break;
        case guess === secretNumber:
            updateScore('Correct Number!');
            updateStyles("#60b347", "30rem");
            document.querySelector('.number').textContent = secretNumber;
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            break;
        case guess > secretNumber:
            updateScore('Too High!');
            break;
        case guess < secretNumber:
            updateScore('Too Low!');
            break;
        default:
            break;
    }
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = createSecretNumber();
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = "?";
    updateStyles("#222", "15rem");
    displayMessage("Start guessing...");
})