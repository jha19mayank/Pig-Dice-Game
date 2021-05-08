//  For Player 1----------------------------------------------------------

let banda1 = {
  turnSco: 0,
  totalSco: 0,
};

// wired dice to roll and give different number

document.getElementById("p1-roll").addEventListener("click", p1Roll);

function p1Roll() {
  var rollNum = Math.floor(Math.random() * 6) + 1;
  document.getElementById("p1-roll-img").src = "dice/dice-" + rollNum + ".png";

  // Checking what if we rolled 1 or not

  if (rollNum != 1) {
    banda1.turnSco += rollNum;
    document.getElementById("p1-current-score").innerHTML = banda1.turnSco;
  } else {
    banda1.turnSco = 0;
    document.getElementById("p1-current-score").innerHTML = banda1.turnSco;

    document.getElementById("p1-header").classList.remove("active");
    document.getElementById("p2-header").classList.add("active");

    document.getElementById("p1-roll").disabled = true;
    document.getElementById("p1-hold").disabled = true;
    document.getElementById("p2-roll").disabled = false;
    document.getElementById("p2-hold").disabled = false;
  }
}

// For Player 2------------------------------------------------------------------
