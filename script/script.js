// script.js

// Start Game
function startGame() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("ready").style.display = "block";
}

// Go to Clue 1 after confirmation
function startClue() {
  document.getElementById("ready").style.display = "none";
  document.getElementById("clue1").style.display = "block";
}

// Check Answer for Clue #1
function checkAnswer1() {
  const answer = document.getElementById("answer1").value.toLowerCase();
  if (answer === "class") { // Correct answer for clue
    document.getElementById("response1").innerText = "Correct! Moving to the next step...";
    setTimeout(() => {
      document.getElementById("clue1").style.display = "none";
      document.getElementById("puzzle").style.display = "block";
    }, 2000);
  } else {
    document.getElementById("response1").innerText = "Oops! Try again!";
  }
}

// Check Answer for MCQ (puzzle section)
function checkAnswer(answer) {
  if (answer === 'D') { // Correct answer is D (All of the Above)
    document.getElementById("puzzle-response").innerText = "Correct! Moving to the balloon game!";
    setTimeout(() => {
      document.getElementById("puzzle").style.display = "none";
      document.getElementById("game").style.display = "block";
      startBalloonGame();
    }, 2000);
  } else {
    document.getElementById("puzzle-response").innerText = "Oops! Try again!";
  }
}

// Start Balloon Game
function startBalloonGame() {
  const balloonContainer = document.getElementById("balloon-container");
  const gameStatus = document.getElementById("game-status");
  balloonContainer.innerHTML = "";
  gameStatus.innerText = "Pop all the balloons!";

  // Create balloons
  const balloonCount = 10;
  let poppedCount = 0;

  for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.backgroundColor = getRandomColor();
    balloon.addEventListener("click", () => {
      balloon.remove();
      poppedCount++;
      if (poppedCount === balloonCount) {
        gameStatus.innerText = "Congratulations! All balloons popped!";
        setTimeout(() => {
          document.getElementById("game").style.display = "none";
          document.getElementById("final").style.display = "block";
        }, 2000);
      }
    });
    balloonContainer.appendChild(balloon);
  }
}

// Get random color for balloons
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
