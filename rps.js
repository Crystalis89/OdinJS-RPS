let pscore = 0
let cscore = 0
let tscore = 0

function getComputerChoice()
{
   let choices = ['rock', 'paper', 'scissors']
   return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection) {

let computerSelection = getComputerChoice()
let result = ""


    if (playerSelection == computerSelection)
     {
        result="Player choose " + playerSelection + " and computer choose " + computerSelection + ", you are tied."
          }
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
       result="Player choose " + playerSelection + " and computer choose " + computerSelection + ", the player wins."
       pscore += 1
       tscore += 1
    }
   else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper')) {
       result="Player choose " + computerSelection + " and computer choose " + playerSelection + ", the computer wins." 
       cscore += 1
       tscore += 1
    }
       document.getElementById('rollresult').textContent=result;
       document.getElementById('hps').textContent=("Your score: " + pscore);
       document.getElementById('hcs').textContent=("Computer's score: " + cscore);
       document.getElementById('hts').textContent=("Total rounds: " + tscore);

       if (pscore === 5)
       {
        document.getElementById('rollresult').textContent="Player is first to 5 wins! Time to start a new game.";
        pscore = 0
        cscore = 0
       }

       if (cscore === 5)
       {
        document.getElementById('rollresult').textContent="Computer is first to 5 wins! Time to start a new game.";
        cscore = 0
        pscore = 0
       }
    }
        


