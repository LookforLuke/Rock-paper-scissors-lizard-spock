document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.selection-area .btn--big').forEach(btn => {
        btn.addEventListener('click', (ev) => {
            userSelection = getUserSelection(ev.target);
        console.log(userSelection);
            
            startGame();
        } )
    })
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
function getUserSelection(target) {
    console.log(target);
    if (target.nodeName === 'i') {
        return target.parentElement.classList[1];
    }
    return target.classList[1];
}

function determineWinner(choice1, choice2) {
    x = choices.indexOf(choice1);
    y - choice1.indexOf(choice2);
    if (x === y) {
        return "Tie";
    }
    if (mod((x - y), choices.length) < choices.length / 2) {
        return choice1 + "wins";
    } else {
        return choice2 + "wins";
    }
}

function increaseScore() {

}

function displaySelections() {

}