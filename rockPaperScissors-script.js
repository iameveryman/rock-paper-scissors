let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let compChoice = Math.random();
    if (compChoice >= 0.667){
        return 'rock'
    }
    else if (compChoice >= 0.334){
        return 'paper'
    }
    else {
        return 'scissors'
    }
};

function getHumanChoice(string){
    let userChoice = prompt('What do you choose?', 'rock, paper, or scissors');
    return userChoice.toLowerCase();
};

function playRound(humanChoice, computerChoice){
    
        //tie scenarios
    if (humanSelection === computerSelection){
        console.log('We have a tie! Try again')
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

    //trying to see each function's return
// console.log(computerSelection);
// console.log(humanSelection);

console.log(playRound(humanSelection, computerSelection));