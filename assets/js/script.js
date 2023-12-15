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

function getcomputerselection() {

}

function determineWinner() {

}

function increaseScore() {

}

function displayResult() {

}