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

    let pcChoice = Math.floor(Math.random() * 5);

    if (userChoice === "scissors") {
        displayResultScissors(userChoice, pcChoice);
    } else {
        alert(`unknown user choice: ${userChoice}`);
        throw `Unknown user choice: ${userChoice}. Aborting`;
    }
}

/**
 * Called when generating computer selection
 */
function getComputerSelection() {
    
    //Creates a random number between 0 and 4
    let pcChoice = Math.floor(Math.random() * 5);

}

function getUserSelection() {

}

function determineWinner() {

}

function increaseScore() {

}

function displayResultScissors(userpick, computerpick) {
    document.getElementById('userpick').textContent = userpick;
    document.getElementById('computerpick').textContent = computerpick;
    document.getElementById('winner').textContent = winner;
}