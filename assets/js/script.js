
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
  
];

// Define variables
var currentQuestion = 0;
var score = 0;
var timeLeft = 20;
var deductTime= 1
var timer;


// Define functions

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
  } else {
    displayQuestion();
  }
}


function endGame() {
  clearInterval(timer);
  var quizEl = document.getElementById("quiz");
  quizEl.style.display = "none";
  var endEl = document.getElementById("end");
  endEl.style.display = "block";
  var scoreEl = document.getElementById("score");
  scoreEl.textContent = score;
  var submitBtn = document.getElementById("submit");
  submitBtn.onclick = saveScore;
}

function saveScore(event) {
  event.preventDefault();
  var initials = document.getElementById("initials").value;
  var scoreData = {
    initials: initials,
    score: score
  };
  
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(scoreData);
  highScores.sort(function(a, b) {
    return b.score - a.score;
  });
  highScores = highScores.slice(0, 10);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  
}

function startTimer() {
  timer = setInterval(function() {
    timeLeft--;
    var timeId = document.getElementById("timer");
    timeId.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
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
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
    
  }


countdown();












