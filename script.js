const choices = ["rock","paper","scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerscoreDisplay = document.getElementById("ComputerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "You Win!": "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!": "You Lose!";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "You Win!": "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `player : ${playerChoice}` ;
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext","redtext","bluetext");

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redtext");
            computerScore++;
            computerscoreDisplay.textContent = computerScore;
            break;
        case "It's TIE!":
            resultDisplay.classList.add("bluetext");
            break;
    }
}