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
var startBtn = document.getElementById("start");

// creating object array and its properties
var quizQuestion = [
    {
        quest: "Commonly used data types DO Not Include",
        choices: ["strings","booleans","alerts","numbers"],
        answer: "alerts"
    },
    {
        quest: "The condition in an if/else statement is enclosed with _____.",
        choices: ["quotes","curly brackets","parenthesis","square brackets"],
        answer: "parenthesis"
    },
    {
        quest: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings","other arrays","booleans","all of the above"],
        answer: "all of the above"
    },
    {
        quest: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas","curly brackets","quotes","parenthesis"],
        answer: "quotes"
    },
    {
        quest: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript","terminal/bash","for loops","console.log"],
        answer: "console.log"
    }
];
// starting the quiz and clear the page, start time clock
function quizStart(){
StartScreenEL.setAttribute("class","hide");
questionsEL.removeAttribute("class");
timerClock = setInterval(clock, 1000);
timeEL.textContent = time;


    makeQuestions();
}
// iterate the questions array and create clickable buttons for each choice
function makeQuestions(){
// get current question object from array
var currentQuiz = quizQuestion[indexQuestion];

//taret in html where the quest will go -- declare the variable
//then create a texContent
questionEL.textContent = currentQuiz.quest;

//clear out the old question choices using innerHTML medthod
optionsEL.innerHTML = "";

//create a for loop using .forEach on your object.property array of choices
//the task of your loop function will be to create buttons -- need to create a variable that will represent create Element (button)
//set an setattribute of class and choice as the class name
//create a setattribute of the value and the choice
currentQuiz.choices.forEach(function(choice, i ){
    var btnChoice = document.createElement("button");
    btnChoice.setAttribute("class", "choice");
    btnChoice.setAttribute("value",choice);
    btnChoice.textContent = i + 1 + ". " + choice;
    //attache an onclie to each choice -- one line of code
    //display on the page
    btnChoice.onclick = clickAnswer;
    optionsEL.appendChild(btnChoice);
});







}
//user chooses answer if right or wrong. If wrong deduct time, are there questions left do you go back to make questions or go back to game end function.
function choice(){

}
//stop timer, clear questions, unhide final div, code for local storage, create submit button
function gameEnd(){


}

//create clock
function clock(){
    time--;
    timeEL.textContent = time;

    if(time <= 0){
        gameEnd();
    }
}
//create save score
//create button to start quiz
startBtn.onclick = quizStart;
//create button to submit initials








startBtn.onclick = startQuiz;