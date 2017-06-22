// RULES
// 1. Player with the highest value of height (centimeters) + five times his age wins


var playerOneHeight = prompt("Please enter Player 1's height (in centimeters please!)");
var playerTwoHeight = prompt("Please enter Player 2's height (in centimeters please!)");
var playerThreeHeight = prompt("Please enter Player 3's height (in centimeters please!)");

var playerOneAge = prompt("Please enter Player 1's age");
var playerTwoAge = prompt("Please enter Player 2's age");
var playerThreeAge = prompt("Please enter Player 3's age");

var playerOneTotal = playerOneHeight + ( playerOneAge * 5 )
var playerTwoTotal = playerTwoHeight + ( playerTwoAge * 5 )
var playerThreeTotal = playerThreeHeight + ( playerThreeAge * 5 )

// if ( playerOneTotal > playerTwoTotal ) {
//   alert("Player 1 Total: " + playerOneTotal +  " // Player 2 Total: " + playerTwoTotal + " // PLAYER 1 WINS!");
// } else if ( playerTwoTotal > playerOneTotal ) {
//   alert("Player 1 Total: " + playerOneTotal +  " // Player 2 Total: " + playerTwoTotal + " // PLAYER 2 WINS!");
// } else {
//   alert("Player 1 Total: " + playerOneTotal +  " // Player 2 Total: " + playerTwoTotal + " // CONTEST IS A DRAW!");
// };

if ( playerOneTotal > playerTwoTotal && playerThreeTotal ) {
  alert("Player 1 Total: " + playerOneTotal +  " // Player 2 Total: " + playerTwoTotal +  " // Player 3 Total: " + playerThreeTotal + " // PLAYER 1 WINS!");
} else if ( playerTwoTotal > playerOneTotal && playerThreeTotal ) {
  alert("Player 1 Total: " + playerOneTotal +  " // Player 2 Total: " + playerTwoTotal +  " // Player 3 Total: " + playerThreeTotal + " // PLAYER 2 WINS!");
}  else if ( playerThreeTotal > playerOneTotal && playerTwoTotal ) {
  alert("Player 1 Total: " + playerOneTotal +  " // Player 2 Total: " + playerTwoTotal +  " // Player 3 Total: " + playerThreeTotal + " // PLAYER 3 WINS!");
} else {
  alert("Player 1 Total: " + playerOneTotal +  " // Player 2 Total: " + playerTwoTotal +  " // Player 3 Total: " + playerThreeTotal + " // CONTEST IS A DRAW!");
};
