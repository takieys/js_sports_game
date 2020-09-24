let teamOneButton = document.querySelector("#teamone-shoot-button");
let teamOneShotSpan = document.querySelector("#teamone-numshots");
let teamOneGoalSpan = document.querySelector("#teamone-numgoals");

teamOneButton.addEventListener("click", function () {
  let newShotSpan = Number(teamOneShotSpan.innerHTML) + 1;
  teamOneShotSpan.innerHTML = newShotSpan;

  if (Math.random() * 100 < 50) {
    let newGoalSpan = Number(teamOneGoalSpan.innerHTML) + 1;
    teamOneGoalSpan.innerHTML = newGoalSpan;
  }
});

let teamTwoButton = document.querySelector("#teamtwo-shoot-button");
let teamTwoShotSpan = document.querySelector("#teamtwo-numshots");
let teamTwoGoalSpan = document.querySelector("#teamtwo-numgoals");

teamTwoButton.addEventListener("click", function () {
  let twoShotSpan = Number(teamTwoShotSpan.innerHTML) + 1;
  teamTwoShotSpan.innerHTML = twoShotSpan;

  if (Math.random() * 100 < 50) {
    let newTwoGoalSpan = Number(teamTwoGoalSpan.innerHTML) + 1;
    teamTwoGoalSpan.innerHTML = newTwoGoalSpan;
  }
});

let resetButton = document.querySelector("#reset-button");
let numResetSpan = document.querySelector("#num-resets");

resetButton.addEventListener("click", function () {
  let newResetSpan = Number(numResetSpan.innerHTML) + 1;
  numResetSpan.innerHTML = newResetSpan;

  let twoShotSpan = 0;
  teamTwoShotSpan.innerHTML = twoShotSpan;

  let newShotSpan = 0;
  teamOneShotSpan.innerHTML = newShotSpan;

  let newGoalSpan = 0;
  teamOneGoalSpan.innerHTML = newGoalSpan;

  let newTwoGoalSpan = 0;
  teamTwoGoalSpan.innerHTML = newTwoGoalSpan;
});
