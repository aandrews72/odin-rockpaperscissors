let playerScore = 0;
let compScore = 0;

/* function to randomize computer choice */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
        
/* function to get computer selection */ 
function computerPlay() {
    if (getRandomInt(3) === 0) {
        return computerGuess = "rock";
    } else if (getRandomInt(3) === 1) {
    return computerGuess = "paper";
    } else {
    return computerGuess = "scissors";
    }
};

/* CHANGE THIS TO RECEIVE EVENT LISTENER function guess() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
};
        
const playerGuess = guess();
*/

/* function to assess the match, and return a string */
function playRound(playerGuess, computerGuess) {
    if (playerGuess === "rock" && computerGuess === "rock") {
        console.log("It\'s a tie!");
    } else if (playerGuess === "paper" && computerGuess === "paper") {
        console.log("It\'s a tie!");
    } else if (playerGuess === "scissors" && computerGuess === "scissors") {
        console.log("It\'s a tie!");
    } else if (playerGuess === "rock" && computerGuess === "scissors") {
        console.log("You win! Rock beats scissors.");
        return playerScore++;
    } else if (playerGuess === "paper" && computerGuess === "rock") {
        console.log("You win! Paper beats rock.");
        return playerScore++;
    } else if (playerGuess === "scissors" && computerGuess === "paper") {
        console.log("You win! Scissors beat paper.");
        return playerScore++;
    } else if (playerGuess === "rock" && computerGuess === "paper") {
        console.log("You lose! Paper beats rock.");
        return compScore++;
    } else if (playerGuess === "paper" && computerGuess === "scissors") {
        console.log("You lose! Scissors beat paper.");
        return compScore++;
    } else if (playerGuess === "scissors" && computerGuess === "rock") {
        console.log("You lose! Rock beats scissors.");
        return compScore++;
    }
};

function game() {
    for /*(let i = 0; i < 5; i++)*/ {
        console.log(computerPlay());
        guess();
        playRound(playerGuess, computerGuess);
        console.log("You have: " + (playerScore));
        console.log("The machine has: " + (compScore));
    };
};

game();