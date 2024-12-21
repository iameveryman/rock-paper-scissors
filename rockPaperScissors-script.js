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


console.log(getComputerChoice());
