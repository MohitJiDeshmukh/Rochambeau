let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".container");
const resultMsg = document.querySelector("#msg");

const userPoint = document.querySelector("#userscore");
const compPoint = document.querySelector("#compscore");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

choices.forEach((container) => {
  container.addEventListener("click", () => {
    const userChoice = container.getAttribute("id");
    playGame(userChoice);
  });
});

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userPoint.innerHTML = userScore;

    resultMsg.innerHTML = `You Win! ${userChoice} beats ${compChoice}`;
    resultMsg.style.backgroundColor = "green";;
  } else {
    compScore++;
    compPoint.innerHTML = compScore;

    resultMsg.innerHTML = `You Lose! ${compChoice} beats ${userChoice}`;
    resultMsg.style.backgroundColor = "red";
  }
};

const draw = () => {
  resultMsg.innerHTML = "Game is Draw , Try Again.";
  resultMsg.style.backgroundColor = "rgb(74, 73, 75)";
};

const playGame = (userChoice) => {
  console.log("User : " + userChoice);

  const compChoice = genCompChoice();
  console.log("comp choice : " + compChoice);

  if (userChoice == compChoice) {
    draw();
  } else {
    let userWin = true;

    if (userChoice == "rock") {
      //paper , scissors
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      //rock , scissors
      userWin = compChoice == "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
