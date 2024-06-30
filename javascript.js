
let humanScore = 0;
let computerScore = 0;
const handOptions = ["Rock", "Paper", "Scissors"]; // 0 Rock, 1 Paper, 2 Scissors

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    return computerChoice = handOptions[randomNumber];
}

function getHumanChoice() {
    for (let i = 0; i < Infinity; i++) {

    let input = prompt("What do you choose? Rock... Paper... Scissors!"); 
    if (input.toLowerCase().charAt(0) === "r"){
        return humanChoice = handOptions[0];
    } else if (input.toLowerCase().charAt(0) === "p"){
        return humanChoice = handOptions[1];
    } else if (input.toLowerCase().charAt(0) === "s"){
        return humanChoice = handOptions[2];
    } else {
        alert("No matching option. Try again");
    }
}
}

function playRound(i) {
    getComputerChoice();
    getHumanChoice();
    console.log("You: " + humanChoice);
    console.log("Computer: " + computerChoice);

    if (humanChoice === computerChoice){
        console.log(`It's a tie! You both chose ${computerChoice}!`)
        console.log("SCOREBOARD", '\n', 'You: ' + humanScore, '\n', 'Computer: ' + computerScore);
        } else if ((humanChoice === "Rock" && computerChoice === "Paper") 
            || (humanChoice === "Paper" && computerChoice === "Scissors") 
            || (humanChoice === "Scissors" && computerChoice === "Rock")) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
            console.log("SCOREBOARD", '\n', 'You: ' + humanScore, '\n', 'Computer: ' + computerScore);
            } else {
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
                humanScore++;
                console.log("SCOREBOARD", '\n', 'You: ' + humanScore, '\n', 'Computer: ' + computerScore);
            }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        console.log(`***ROUND ${i}/5***`)
        playRound();
    }
        if(humanScore === computerScore) {
            console.log("The game is a tie!")
        } else if (humanScore > computerScore) {
            console.log(`You win! You won ${humanScore} out of 5 games!`)
        } else {
            console.log(`You lose! The computer won ${computerScore} out of 5 games!`)
        }
    }