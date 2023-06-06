function getComputerChoice() {
    let compChoice  = Math.floor(3 * Math.random());
    switch (compChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}

function getPlayerChoice(){
    let choice = prompt("Enter your Choice", "")
    choice = choice.toLowerCase();
    if ( choice=="rock" || choice=="paper" || choice=="scissors" ) {
        return choice;
    }else {
        alert("You have entered an Invalid Choice");
        return getPlayerChoice();
    }
}

function playRound(playerSelection,computerSelection) {
    let player = 0;
    let comp = 0;
    if ((playerSelection=="rock"&&computerSelection=="scissors") ||
        (playerSelection=="paper"&&computerSelection=="rock") ||
        (playerSelection=="scissors"&&computerSelection=="paper")) {
            player = 1;
            return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if ((playerSelection=="rock"&&computerSelection=="paper") ||
    (playerSelection=="paper"&&computerSelection=="scissors") ||
    (playerSelection=="scissors"&&computerSelection=="rock")) {
            comp = 1;
            return `You Lose! ${computerSelection} beats ${playerSelection}`
    }else {
        return `Match Drawn!`
    }
}
