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

