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
