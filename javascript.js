//Pseudocode
//- Calculate randomised input for computerHand -> function getComputerChoice (uses Math.random)
//2 , 3 - "Lose! Scissors beats paper!"
//- Assign the above computerHand return to variable
//- Assign shorthand variables for rock / paper / scissors. r / p / s, or 1 = Rock, 2 = Paper, 3 = Scissors.
//- Calculate win / lose / draw, code all scenarios. Below table.
//- Display outcome to user. Below table.
//
//1 - 1 - "Draw!"
//1 , 2 - "Lose! Paper beats rock!"
//1 , 3 - "Win! Rock beats paper!"
//
//2 , 1 - "Win! Paper beats rock!"
//2 , 2 - "Draw!"
//3 , 3 - "Draw!"
//
//3 , 1 - "Lose! Rock beats scissors!"
//3 , 2 - "Win! Scissors beats paper!"
//- Update score - need to research this




//Three possible hands (pick)
const pick = ['Rock', 'Paper', 'Scissors'];
//The computers chosen hand
const computerHand = computerChoice();


//FUNCTION - Calculates random computer choice of hand
function computerChoice() {
    return pick[(Math.floor(Math.random()*3))];
}

// Ask input for playerHand
const playerInput = prompt("Make a choice. Rock... Paper... Scissors!").toLowerCase();

//The players chosen hand
const playerHand = playerChoice();

// Tidy player input to reduce input errors
function playerChoice() {
    if (playerInput == "r" || playerInput == "rock") {
        return "Rock"
    } else if (playerInput == "p" || playerInput == "paper") {
        return "Paper"
    } else if (playerInput == "s" || playerInput == "scissors") {
        return "Scissors"
    } else {
        return ("Not a valid answer");
    }
}

//**DEBUG - ARE BOTH HANDS WORKING**//
console.log(playerHand);
console.log(computerHand);

// Declare the player score variable
const humanScore = 0
const computerScore = 0

//function playRound(playerHand, computerHand) {
//    if (playerHand == computerHand) {
//        console.log("It's a tie! You both chose ${playerHand}");
//    } else if (playerHand == Rock && computerHand == Paper){
//        console.log("You lose! Paper beats Rock.");
//        const humanScore++1
//    } else if (playerHand)
//}








