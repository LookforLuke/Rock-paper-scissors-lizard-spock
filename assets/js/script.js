document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-again") {
                alert("You chose play again");
            } else {
                let userChoice = this.getAttribute("data-type");
                runGame(userChoice);
            }
        })
    }
})

function runGame(userChoice) {

    const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

    const pcNumber = Math.floor(Math.random() * 5);
    const pcChoice = computerOptions[pcNumber];

    if (userChoice === "scissors") {
        displayResultScissors(userChoice, pcChoice);
    } else if(userChoice === "paper") {
        displayResultPaper(userChoice, pcChoice);
    } else if(userChoice === "rock") {
        displayResultRock(userChoice, pcChoice);
    } else if(userChoice === "lizard") {
        displayResultLizard(userChoice, pcChoice);
    } else if(userChoice === "spock") {
        displayResultSpock(userChoice, pcChoice);
    } else {
        alert(`unknown user choice: ${userChoice}`);
        throw `Unknown user choice: ${userChoice}. Aborting`;
    }
}

/**
 * gets choices from DOM, returns correct result.
 */
function determineWinner() {
    let userpick = parseInt(document.getElementById('userpick').innerText);
    let computerpick = parseInt(document.getElementById('computerpick').innerText);
    let winner = parseInt(document.getElementById('winner').innerText)
}

function displayResultScissors(userpick, computerpick) {
    document.getElementById('userpick').textContent = userpick;
    document.getElementById('computerpick').textContent = computerpick;
    document.getElementById('winner').textContent = winner;
}

function displayResultPaper(userpick, computerpick) {
    document.getElementById('userpick').textContent = userpick;
    document.getElementById('computerpick').textContent = computerpick;
    document.getElementById('winner').textContent = winner;
}

function displayResultRock(userpick, computerpick) {
    document.getElementById('userpick').textContent = userpick;
    document.getElementById('computerpick').textContent = computerpick;
    document.getElementById('winner').textContent = winner;
}

function displayResultLizard(userpick, computerpick) {
    document.getElementById('userpick').textContent = userpick;
    document.getElementById('computerpick').textContent = computerpick;
    document.getElementById('winner').textContent = winner;
}

function displayResultSpock(userpick, computerpick) {
    document.getElementById('userpick').textContent = userpick;
    document.getElementById('computerpick').textContent = computerpick;
    document.getElementById('winner').textContent = winner;
}