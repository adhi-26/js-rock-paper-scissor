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
function game() {
    let rounds = prompt("Enter best of how many rounds you want to play", 5);
    firstTo = Math.ceil(rounds/2);
    let playerWins = 0;
    let compWins = 0;
    console.log(`Current scoreline is ${playerWins}-${compWins}`);
    while (playerWins<firstTo && compWins<firstTo) {
        let p = getPlayerChoice();
        let c = getComputerChoice();
        console.log(playRound(p,c));
        playerWins += player;
        compWins += comp;
    }
    if (playerWins>compWins) {
        return `You win the game ${playerWins}-${compWins}`;
    }else {
        return `You lose the game ${playerWins}-${compWins}`;
    }
}

game();