let humanScore = 0;
let computerScore = 0;
let draw = 0;

function getComputerChoice(){
    let compChoice = Math.random();
    //console.log(compChoice);
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
    const rockWins = ' Rock breaks scissors';
    const scissorsWins = ' Scissors cut paper';
    const paperWins = ' Paper covers rock';
    const youLose = 'Oh no! ';
    
        //tie scenarios
    if (humanChoice === computerChoice){
        draw++;
        console.log('We have a tie! Try again')
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        return console.log('You win!' + rockWins)
    } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        return console.log('You win!' + scissorsWins)
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        return console.log('You win!' + paperWins)
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
        return console.log(youLose + paperWins)
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++;
        return console.log(youLose + scissorsWins)
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++;
        return console.log(youLose + rockWins)
    }
    
};

function showVariables(){
    console.log('User: ' + humanScore + ' Computer: ' + computerScore + ' Draw: ' + draw);
}
function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        showVariables();
    }
}


playGame();
// console.log('User: ' + humanScore);
// console.log('Computer: ' + computerScore);
// console.log('Draw: ' + draw);
