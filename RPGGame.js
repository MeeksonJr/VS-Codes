// Your JavaScript code goes here
const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

let userScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.id));
});

function playRound(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Implement the game logic
    if (userChoice === computerChoice) {
        resultDiv.textContent = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDiv.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        userScore++;
    } else {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        computerScore++;
    }

    updateScore();
}

function updateScore() {
    scoreDiv.textContent = `Score: You ${userScore} - ${computerScore} Computer`;
}
