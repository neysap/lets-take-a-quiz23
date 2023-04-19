var initialsInput = document.getElementById("initials");
var scoreDisplay = document.getElementById("score");
var savedNameDisplay = document.getElementById("saved-name");
var savedScoreDisplay = document.getElementById("saved-score");


var questions = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    choices: ["var x;", "variable x;", "vrb x;"],
    answer: "var x;"
  },
  {
    question: "What is the result of 6 + '5' in JavaScript?",
    choices: ["11", "65", "undefined"],
    answer: "65"
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    choices: ["string", "boolean", "float", "number"],
    answer: "float"
  },
  {
    question: "What is JavaScript reference abbrieviation?",
    choices: ["html", "css", "js"],
    answer: "js"
  },
  {
    question: "Who designed Java Script",
    choices: ["Guido van Rossum", "Brendan Eich", "Rasmus Lerdorf"],
    answer: "Brendan Eich"
  },
];

//variables
var currentQuestion = 0;
var score = 0;
var timeLeft = 20;
var deductTime= 2;
var timer;


// functions

function displayQuestion() {
  var questionEl = document.getElementById("question");
  var choicesEl = document.getElementById("choices");
  var question = questions[currentQuestion];
  questionEl.textContent = question.question;
  choicesEl.innerHTML = "";
  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var button = document.createElement("button");
    button.textContent = choice;
    button.onclick = checkAnswer;
    choicesEl.appendChild(button);
  }
}

var startBtn = document.getElementById("start");
startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
});

function endGame() {
  clearInterval(timer);
  var quizEl = document.getElementById("quiz");
  quizEl.style.display = "none";
  var endEl = document.getElementById("end");
  endEl.style.display = "block";
  // var saveEl = document.getElementById("save");
  // saveEl.style.display = "block";
  var scoreEl = document.getElementById("score");
  scoreEl.textContent = score;
  var submitBtn = document.getElementById("submit");
  submitBtn.onclick = saveScore;
}

function checkAnswer(event) {
  var selectedAnswer = event.target.textContent;
  var question = questions[currentQuestion];
  if (selectedAnswer === question.answer) {
    score++; 
  } else {
    timeLeft -= deductTime;
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endGame();
  } 
  else {
    displayQuestion();
  }
}


var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", saveScore);

function saveScore(event) {
  event.preventDefault(); 
  var initials = initialsInput.value;
  var score = scoreDisplay.textContent;
  localStorage.setItem("score", score);
  localStorage.setItem("initials", initials);
  savedNameDisplay.textContent = initials;
  savedScoreDisplay.textContent = score;
}
  
// Start quiz when start button is clicked
var startBtn = document.getElementById("start");
startBtn.onclick = function countdown() {
   displayQuestion();
  timeLeft;
    var timerEl = document.getElementById('countdown');
    var timeInterval = setInterval(function () {
      
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } 
      else if (timeLeft === 0) {
        endGame()
      }
      
      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
    
  }













