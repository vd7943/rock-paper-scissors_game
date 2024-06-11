let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!🎉 Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        // draw game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissore, paper
            compChoice === "paper" ? userWin=false : userWin=true;
        }
        else if(userChoice === "paper"){
            // scissors, rock
            compChoice === "scissors" ? userWin=false : userWin=true;
        }
        else{
            // paper, rock
            compChoice === "rock" ? userWin=false : userWin=true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
