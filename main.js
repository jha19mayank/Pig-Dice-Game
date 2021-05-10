// Global variable

var banda1 = {
  turnSco: 0,
  totalSco: 0,
};

// var banda2 = {
//   turnSco: 0,
//   totalSco: 0,
// };

// wired dice to roll and give different number
document.getElementById("p1-roll").addEventListener("click", p1Roll);
document.getElementById("p1-hold").addEventListener("click", p1hold);
// document.getElementById("p2-roll").addEventListener("click", p2Roll);
// document.getElementById("p2-hold").addEventListener("click", p2hold);

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

    // switching turn of players
    switchturn();
  }
}

function p1hold() {
  // adding current score to the total score
  banda1.totalSco += banda1.turnSco;
  document.getElementById("p1-total-score").innerHTML = banda1.turnSco;

  if (banda1.totalSco >= 100) {
    alert("Hey!  Player-1 wins!!!🥳");
    document.location.reload();
  } else {
    banda1.turnSco = 0;
    document.getElementById("p1-current-score").innerHTML = 0;

    // switching turn of players
    switchturn();
  }
}

function switchturn() {
  document.getElementById("p1-header").classList.remove("active");
  document.getElementById("p2-header").classList.add("active");

  document.getElementById("p1-roll").disabled = true;
  document.getElementById("p1-hold").disabled = true;
  document.getElementById("p2-roll").disabled = false;
  document.getElementById("p2-hold").disabled = false;
}

// For Player 2------------------------------------------------------------------

// function p2Roll() {
//   var rollNum = Math.floor(Math.random() * 6) + 1;
//   document.getElementById("p2-roll-img").src = "dice/dice-" + rollNum + ".png";

//   // Checking what if we rolled 1 or not
//   if (rollNum != 1) {
//     banda2.turnSco += rollNum;
//     document.getElementById("p2-current-score").innerHTML = banda2.turnSco;
//   } else {
//     banda2.turnSco = 0;
//     document.getElementById("p2-current-score").innerHTML = banda2.turnSco;

//     // switching turn of players
//     switchturn();
//   }
// }

// function p2hold() {
//   // adding current score to the total score
//   banda2.totalSco += banda2.turnSco;
//   document.getElementById("p2-total-score").innerHTML = banda2.turnSco;

//   if (banda2.totalSco >= 100) {
//     alert("Hey!  Player-2 wins!!!🥳");
//     document.location.reload();
//   } else {
//     banda2.turnSco = 0;
//     document.getElementById("p2-current-score").innerHTML = 0;

//     // switching turn of players
//     switchturn();
//   }
// }

// function switchturn() {
//   document.getElementById("p2-header").classList.remove("active");
//   document.getElementById("p1-header").classList.add("active");

//   document.getElementById("p2-roll").disabled = true;
//   document.getElementById("p2-hold").disabled = true;
//   document.getElementById("p1-roll").disabled = false;
//   document.getElementById("p1-hold").disabled = false;
// }
