var guessesLeft = 10;
var magicNumber = Math.floor((Math.random()*100)+1);

$(function() {
  updateScore(guessesLeft);
  $("h3#feedbackHigh").hide();
  $("h3#feedbackLow").hide();
  
  $("input:button#btnGuess").click(function() {
  	guessesLeft--;
  	if ($("input:text#guess").val() == magicNumber) {
  		winner();
  	} else if (guessesLeft < 1) {
  		loser();
  	} else {
	  	$("span#guessesLeft").text(guessesLeft);
	  	giveFeedback();
  	}
  });

});

function updateScore(score) {
  $('h2#score span#guessesLeft').append(score);
}

function giveFeedback() {
	if ($("input:text#guess").val() < magicNumber) {
		$("h3#feedbackLow").fadeIn(1000);
		$("h3#feedbackLow").fadeOut(1000);
	} else {
		$("h3#feedbackHigh").fadeIn(1000);
		$("h3#feedbackHigh").fadeOut(1000);
	}
}

function playagain() {
	var optin = confirm("Dare to play again?");
	if (optin == true){
		location.reload();
	} else {
		alert("Fine then. But if you change your mind, you're gonna have to refresh the page yourself! Mwahaha! *coughsputter* Ahem.");
		magicNumber = Math.floor((Math.random()*100)+1); //Prevent cheating
	}
}

function winner() {
	alert("You escape this time. Next time you won't be so lucky! Mwahaha!");
  	var name = prompt("So what shall the minstrels call you, hero?", "FraidyKnight");
  	highScores.push([guessesLeft+1, name]);
  	highScores.sort(sortfunc);
  	$("div#highScores").text("");
  	populateHighScores(highScores);
  	playagain();
}

function sortfunc(a, b) {
	return b - a;
}

function loser() {
  	alert("You lose puny human! Mwahaha!");
  	playagain();
}
	