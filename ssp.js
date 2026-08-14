let userCount = 0;
let compCount = 0;

let choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

let UserScore = document.querySelector("#user-score");
let CompScore = document.querySelector("#comp-score");


// Function to generate computer choice
const compChoiceGet = () => {

    const options = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];
};


// Main game function
const playGame = (userChoice) => {

    const compChoice = compChoiceGet();

    // Draw condition
    if (userChoice === compChoice) {

        msg.innerText = "The game is Draw";

        msg.style.backgroundColor = "yellow";

    }

    else {

        let UserWin = true;

        if (userChoice === "rock") {

            UserWin = compChoice === "paper" ? false : true;

        }

        else if (userChoice === "paper") {

            UserWin = compChoice === "scissors" ? false : true;

        }

        else if (userChoice === "scissors") {

            UserWin = compChoice === "rock" ? false : true;

        }

        showWinner(UserWin, userChoice, compChoice);
    }
};


// Add click event to Rock, Paper and Scissors
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);

    });

});


// Display winner
const showWinner = (UserWin, userChoice, compChoice) => {

    if (UserWin === true) {

        userCount++;

        UserScore.innerText = userCount;

        msg.innerText =
            `You Win! ${userChoice} beats ${compChoice}`;

        msg.style.backgroundColor = "green";

    }

    else {

        compCount++;

        CompScore.innerText = compCount;

        msg.innerText =
            `You Lose! ${compChoice} beats ${userChoice}`;

        msg.style.backgroundColor = "red";
    }
};