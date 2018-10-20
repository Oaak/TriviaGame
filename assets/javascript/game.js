var time = 20;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var arrayFinder = 0;


var question01 = {
	question: "Which champion has the highest base movement speed in the game at 400?",
	answers: ["Kled", "Cassiopeia", "Pantheon", "Janna"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Cassiopeia",
	image: "./assets/images/Cassiopeia.png"
};
var question02 = {
	question: "Which champion Garen deems as a worthy opponent on the battlefield?",
	answers: ["Katarina", "Urgot", "Swain", "Sion"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Katerina",
	image: "./assets/images/Katarina.gif"
};
var question03 = {
	question: "What is Miss Fortune's first name?",
	answers: ["Sandra", "Samantha", "Shauna", "Sarah"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Sarah",
	image: "./assets/images/MFSarah.png"
};
var question04 = {
	question: "Which of the following pairs of champions are not originally from Runetera?",
	answers: ["Mordekaiser and Evelynn", "Trundle and Gnar", "Rammus and Malphite", "Teemo and Lulu"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Rammus and Malphite",
	image: "./assets/images/RammusAndMalphite.png"
};
var question05 = {
	question: "Twisted Fate dated which of the following champions?",
	answers: ["Evelynn", "Vayne", "LeBlanc", "Sivir"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Evelynn",
	image: "./assets/images/Evelynn.png"
};
var question06 = {
	question: "Which pair of champions were never human?",
	answers: ["Soraka and Yorick", "Sion and Warwick", "Urgot and Cassiopeia", "Wukong and Orianna"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Wukong and Orianna",
	image: "./assets/images/Wukong.png"
};
var question07 = {
	question: "Sacrificing her divinity, Soraka cursed which champion?",
	answers: ["Trundle", "Warwick", "Sion", "Karthus"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Warwick",
	image: "./assets/images/Warwick.png"
};
var question08 = {
	question: "Which of these champions is not a bad/evil character?",
	answers: ["Malzahar", "Singed", "Kassadin", "Dr. Mundo"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Kassadin",
	image: "./assets/images/Kassadin.png"
};
var question09 = {
	question: "Who bears the title of 'The Thunder's Roar'? ",
	answers: ["Kennen", "Garen", "Volibear", "Fizz"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Volibear",
	image: "./assets/images/Volibear.png"
};
var question10 = {
	question: "Which champion is the owner of a Sunscreen brand? ",
	answers: ["Taric", "Fiora", "Udyr", "Miss Fortune"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Taric",
	image: "./assets/images/Taric.png"
};


var questionsArray = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];

// Functions

	function start () {
		$(".content-div").empty();
		var startButton = $("<button>");
		startButton.text("Start");
		startButton.addClass("start btn btn-default answerBtn");
		$(".content-div").append(startButton);
	};

	function run() {
      intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
      time--;
      $(".timer-div").html("Time Remaining: " + time + " Seconds");
      if (time == 0) {
        if (arrayFinder < questionsArray.length-1) {
        	setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
        	solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      	else if (arrayFinder < questionsArray.length) {
      		setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      };
    };

    function stop() {
      clearInterval(intervalId);
    };

	function questionWrite (obj) {
		time = 20;
		$(".timer-div").empty();
		$(".timer-div").html("Time Remaining: " + time + " Seconds");
		$(".question-div").empty();
		$(".content-div").empty();
		run ();
		$(".question-div").html(obj.question);
		for (var i = 0; i < obj.answers.length; i++) {
			var answerButton = $("<button>");
			answerButton.addClass("answer btn btn-default answerBtn");
			answerButton.text(obj.answers[i]);
			answerButton.attr("value", obj.values[i]);
			$(".content-div").append(answerButton);
			$(".content-div").append("<br>");
		};
	};

	function solutionWrite (obj) {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".content-div").html("The correct answer was " + obj.correct + "<br>");
		var characterImage = $("<img>");
		characterImage.attr("height", "250");
		characterImage.attr("src", obj.image);
		characterImage.addClass("character")
		$(".content-div").append(characterImage);
		arrayFinder++;
	};

	function startWrite () {
		questionWrite(question01);
	};

	function answerSelect () {
		stop();
		if ($(this).attr("value") == "correct") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Correct!");
			correct++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
		else if ($(this).attr("value") == "incorrect") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Incorrect!");
			incorrect++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
	};

	function endWrite () {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".question-div").html("Here's how you did!");
		$(".content-div").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>" + "<p> Unanswered: " + unanswered + "</p>");
		var resetButton = $("<button>");
		resetButton.addClass("reset btn btn-default answerBtn");
		resetButton.text("Start Over?");
		$(".content-div").append(resetButton);
	}

	function resetClick () {
		arrayFinder = 0;
		incorrect = 0;
		correct = 0;
		unanswered = 0;
		startWrite();
	}

	$(document).on("click", ".start", startWrite);

	$(document).on("click", ".answer", answerSelect);

	$(document).on("click", ".reset", resetClick);
// Running Code

start();