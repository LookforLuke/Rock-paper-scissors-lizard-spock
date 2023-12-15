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

//code from https://torstencurdt.com/tech/posts/modulo-of-negative-numbers/
function mod(a, b) {
    c = a % b
    return (c < 0) ? c + b : c
}
//code from https://torstencurdt.com/tech/posts/modulo-of-negative-numbers/

/**
 * Called when generating computer selection
 */
function getComputerSelection() {
    
    //Creates a random number between 0 and 4
    let pcChoice = Math.floor(Math.random() * 5);

}

/**
 * called when retrieving user selection
 */
function getUserSelection() {

}

function determineWinner() {

}

function increaseScore() {

}

function displayResult() {

}