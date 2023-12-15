document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-again") {
                alert("You chose play again");
            } else {
                let userChoice = this.getAttribute("data-type");
                alert(`You selected ${userChoice}`);
            }
        })
    }
})

function runGame() {

}

/**
 * Called when generating computer selection
 */
function getcomputerselection() {
    
    //Creates a random number between 0 and 4
    let pcChoice = Math.floor(Math.random() * 5);

}

function determineWinner() {

}

function increaseScore() {

}

function displayResult() {

}