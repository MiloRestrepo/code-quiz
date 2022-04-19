
// declare variables on the html element
var timeEL = document.getElementById("time");
var StartScreenEL = document.getElementById("StartScreen");
var startBtn = document.getElementById("start");
var questionsEL = document.getElementById("questions");

var optionsEL = document.getElementById("options");
var finalEL = document.getElementById("final");
var scoreEL = document.getElementById("score");
var submitEL = document.getElementById("submit");
var initialsEL = document.getElementById("initials");
var startBtn = document.getElementById("start");

// creating object array and its properties
var quizQuestion = [
    {
        quest: "Commonly used data types DO Not Include",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        quest: "The condition in an if/else statement is enclosed with _____.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        quest: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        quest: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        quest: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

// creating varibles to track the array and time
var indexQuestion = 0;
var time = quizQuestion.length * 10;
var timerClock;

// starting the quiz and clear the page, start time clock
function quizStart() {
    StartScreenEL.setAttribute("class", "hide");
    questionsEL.removeAttribute("class");
    timerClock = setInterval(clock, 1000);
    timeEL.textContent = time;


    makeQuestions();
}
// iterate the questions array and create clickable buttons for each choice
function makeQuestions() {
    // get current question object from array
    var currentQuiz = quizQuestion[indexQuestion];

    //taret in html where the quest will go -- declare the variable
    var questionEL = document.getElementById("question");
    //then create a texContent
    questionEL.textContent = currentQuiz.quest;

    //clear out the old question choices using innerHTML medthod
    optionsEL.innerHTML = "";

    //create a for loop using .forEach on your object.property array of choices
    //the task of your loop function will be to create buttons -- need to create a variable that will represent create Element (button)
    //set an setattribute of class and choice as the class name
    //create a setattribute of the value and the choice
    currentQuiz.choices.forEach(function (choice, i) {
        var btnChoice = document.createElement("button");
        btnChoice.setAttribute("class", "choice");
        btnChoice.setAttribute("value", choice);
        btnChoice.textContent = i + 1 + ". " + choice;
        //attache an onclie to each choice -- one line of code
        //display on the page
        btnChoice.onclick = choice;
        optionsEL.appendChild(btnChoice);
    });
}



    //user chooses answer if right or wrong. If wrong deduct time, are there questions left do you go back to make questions or go back to game end function.
    function choice() {
        if (this.value !== quizQuestion[indexQuestion].answer) {
            time -= 10;
            if (time < 0) {
                time = 0;
            }
            timeEL.textContent = time;
        }
        indexQuestion++;
        
        if (indexQuestion === quizQuestion.length) {
            gameEnd();
        } else {
            makeQuestions();
        }
    }
    //stop timer, clear questions, unhide final div, code for local storage, create submit button
    function gameEnd() {
        clearInterval(timerClock);
        finalEL.removeAttribute("class");
        scoreEL.textContent = time;
        questionsEL.setAttribute("class", "hide");

    }

    //create clock
    function clock() {
        time--;
        timeEL.textContent = time;

        if (time <= 0) {
            gameEnd();
        }
    }
    //create save score
    function saveScore() {
        var initials = initialsEL.value.trim();
        if (initials !== "") {
            var scores = JSON.parse(localStorage.getItem("scores")) || [];
            var newScore = {
                score: time,
                initials: initials

            };
            scores.push(newScore);
            localStorage.setItem("scores", JSON.stringify(scores));
        }

    }

    submitEL.onclick = saveScore;

    function inputEntry(e) {
        if (e.key === "Enter") {
            saveScore();
        }

    }
    //create button to submit initials
    initialsEL.onclick = inputEntry;
    //create button to start quiz
    startBtn.onclick = quizStart;