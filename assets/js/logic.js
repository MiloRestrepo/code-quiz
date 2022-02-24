// creating varibles to track the array and time
var indexQuestion = 0;
var time = quizQuestion.length*10;
var timerClock;
// declare variables on the html element
var timeEL = document.getElementById("time");
var StartScreenEL = document.getElementById("StartScreen");
var startBtn = document.getElementById("start");
var questionsEL = document.getElementById("questions");
var questionEL = document.getElementById("question");
var optionsEL = document.getElementById("options");
var finalEL = document.getElementById("final");
var scoreEL = document.getElementById("score");
var submitEL = document.getElementById("submit");
var initialsEL = document.getElementById("initials");

// creating object array and its properties
var quizQuestion = [
    {
        quest: "question",
        choices: ["","","",""],
        answer: ""
    }
];

function startQuiz(){



    makeQuestions();
}
function makeQuestions(){




}










startBtn.onclick = startQuiz;