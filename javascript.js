// -------COMPUTER HAND------- //

const pick = ['Rock', 'Paper', 'Scissors']; //Three possible hands (pick)

function computerChoice() {
    return pick[(Math.floor(Math.random()*3))]; //Calculates the computer hand
}

let computerHand = computerChoice(); //The computers chosen hand
//-----------------------------//


// -------PLAYER HAND------- //
let playerHand = playerChoice();

function playerChoice() {
    let playerInput = prompt("Make a choice. Rock... Paper... Scissors!").toLowerCase();
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


// Scoreboard starts at zero
let humanScore = 0
let computerScore = 0

// Scoring Logic


// Game logic for 1 game
function playRound(playerHand, computerHand) {
    if (playerHand === computerHand) {
        console.log(`It's a tie! You both chose ${playerHand}.`);
        console.log ("Your score: " + humanScore)
        console.log ("Computer score: " + computerScore)
    } else if (playerHand === "Rock" && computerHand === "Paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
        console.log ("Your score: " + humanScore)
        console.log ("Computer score: " + computerScore)
    } else if (playerHand === "Rock" && computerHand === "Scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;    
        console.log ("Your score: " + humanScore)
        console.log ("Computer score: " + computerScore)
    } else if (playerHand === "Paper" && computerHand === "Rock"){
        console.log("You win! Paper beats Rock.");    
        humanScore++;  
        console.log ("Your score: " + humanScore)
        console.log ("Computer score: " + computerScore)
    } else if (playerHand === "Paper" && computerHand === "Scissors"){
        console.log("You lose! Scissors beats Paper.");    
        computerScore++;
        console.log ("Your score: " + humanScore)
        console.log ("Computer score: " + computerScore)
    } else if (playerHand === "Scissors" && computerHand === "Rock"){
        console.log("You lose! Rock beats Scissors.");    
        computerScore++;
        console.log ("Your score: " + humanScore)
        console.log ("Computer score: " + computerScore)
    } else if (playerHand === "Scissors" && computerHand === "Paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++; 
        console.log ("Your score: " + humanScore)
        console.log ("Computer score: " + computerScore)   
    }
}

function playGame(){
playerChoice();
computerChoice();
console.log("Player: " + playerHand);
console.log("Computer: " + computerHand);
playRound(playerHand, computerHand);

console.log("*****ROUND 2*****")
playerChoice();
computerChoice();
console.log("Player: " + playerHand);
console.log("Computer: " + computerHand);
playRound(playerHand, computerHand);
}

playGame();