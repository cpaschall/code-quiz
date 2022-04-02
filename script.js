// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

var timer = $("#timer");
var startPage = $("#start-page");
var startBtn = $("#start-quiz");
var question1 = $("#question-1");
var question2 = $("#question-2");
var question3 = $("#question-3");
var question4 = $("#question-4");
var question5 = $("#question-5");
var questionList = $("question-list");
var logScore = $("#log-score");
var scoreDisplay = $("#quiz-score")
var answrBtns = $(".answer-btn");
var rightAnswer = $(".correct-answer");
var checkAnswer = $(".check-answer");
var currDisplay = $(".current-display")
var currentPage = "start";
var anchorEl = $("a")
var user = document.querySelector("#usr-init");
var subScoreBtn = document.querySelector("#submit-score");
var scoreForm = document.querySelector("#score-form");
var highScores = $("#high-scores");
var showScores = document.querySelector("#show-scores")


var seconds = 10;
var timerInterval = 0;
var finalScore = 0

var allDisplays = [startPage, question1, question2, question3, question4, question5, logScore, highScores];
var questionPage = ["question1", "question2", "question3", "question4", "question5"];
var questionNum = [question1, question2, question3, question4, question5]

function hideAllDisplay() {
    for(var i=0; i < allDisplays.length; i++) {
        allDisplays[i].css("display", "none")
    }
    highScores.css("display", "flex")
}

startPage.css("display", "flex");

// checks to see if currently on start page when button is clicked and if it is, changes start page display to none
// and changes the Question #1 page display from "none" to "flex"
function renderTimer() {
    var sec = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
    var min = Math.floor(seconds / 60);
    timer.text(`${min}:${sec}`);
    if(seconds <= 0 || typeof seconds !== 'number') {
        timer.text("0:00");
        clearInterval(timerInterval);
    }
}

function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        --seconds;
        renderTimer()
    if(seconds <= 0){
        alert("Time is up!");
        currentPage = "log-score";
        for(var i=0; i < allDisplays.length; i++) {
            console.log("time's up!")
            allDisplays[i].css("display", "none");
        }
        logScore.css("display", "flex");  
    }
    }, 1000)
}

function checkCurrPage(){   
    if (seconds <= 0){
        for(var i = 0; i < questionPage.length; i++){
            if(questionPage[i] === currentPage) {
                currentPage = "log-score";
                questionNum[i].css("display", "none");
                logScore.css("display", "flex");
            }
        }
    }
}

function correctAnswer(currentAnswer, callBack) {
    if (currentAnswer.classList.contains("correct-answer")) {
        console.log("correct answer");
        checkAnswer.text("Correct Answer");
        finalScore++;
    }else{
        checkAnswer.text("Wrong answer");
        seconds -= 5;
    }
    setTimeout(function() {
        checkAnswer.text("");
        callBack()
    }, 1000);
}

// Function check the current value of "currentAnswer" then changes the display of the current page to none
// and displays the next page after a button click

function nextQuestion(event) {
    event.preventDefault();
    var currentAnswer = event.target;
    console.log(currentAnswer);
    if(currentPage === "question1") {
       
        currentPage = "question2";
        correctAnswer(currentAnswer, function() {
            question1.css("display", "none");
            question2.css("display", "flex");
            isTimeUp();
        });
    } else if(currentPage === "question2") {      
        currentPage = "question3";  
        correctAnswer(currentAnswer, function(){
            question2.css("display", "none");
            question3.css("display", "flex");
            isTimeUp();
        })   
    } else if(currentPage === "question3") {    
        currentPage = "question4";   
        correctAnswer(currentAnswer, function(){
            question3.css("display", "none");
            question4.css("display", "flex");
            isTimeUp();
        })      
    } else if(currentPage === "question4") {
        currentPage = "question5";   
        correctAnswer(currentAnswer, function(){
            question4.css("display", "none");
            question5.css("display", "flex");
            isTimeUp();
        })
    } else if(currentPage === "question5") {
        currentPage = "log-score";  
        correctAnswer(currentAnswer, function(){
            question5.css("display", "none");
            logScore.css("display", "flex");
            isTimeUp();
            scoreDisplay.text(`Final Score: ${finalScore}`);
            console.log(finalScore);
            clearInterval(timerInterval);
        });
    }
};

for(var i = 0; i < answrBtns.length; i++) {
    answrBtns[i].addEventListener("click", nextQuestion)
};

var allScores = [];

function renderHighScore() {
    showScores.style.display = "flex";
    showScores.innerHTML = "";
    for (var i = 0; i < allScores.length; i++) {
        var score = allScores[i];
        var liEl = document.createElement("li");
        liEl.textContent = score[0] + ": " + score[1];
        liEl.setAttribute("class", "score-list");
        showScores.appendChild(liEl)
    }
}

function initDisplay() {
    var highScores = JSON.parse(localStorage.getItem("allScores"));
    if (highScores !== null) {
        allScores = highScores;
    }
    renderHighScore();
}

function storedScores() {
    localStorage.setItem("allScores", JSON.stringify(allScores))
}

subScoreBtn.addEventListener("click", function(event){
    event.preventDefault();
    currentPage = "end-game";
    logScore.css("display", "none");
    highScores.css("display", "flex");
    showScores.style.display = "flex";
    var highScore = {
        initials: user.value,
        score: finalScore,
    };
    
    if (user === "") {
        return;
    }
    allScores.push([highScore.initials, highScore.score]);
    user.value="";  
    storedScores();
    renderHighScore();
})

initDisplay();

var restartQuizBtn = document.getElementById("restart-quiz");
var clearScoreBtn = document.getElementById("clear-scores");

restartQuizBtn.addEventListener("click", function() {
    currentPage = "start"; 
    var questionPage = ["question1", "question2", "question3", "question4", "question5"];
    var questionNum = [question1, question2, question3, question4, question5];
        for(var i = 0; i < questionPage.length; i++){
            if(questionPage[i] === currentPage) {
                questionNum[i].css("display", "none");
            }
        }
    highScores.css("display", "none");
    startPage.css("display", "flex");
    seconds = 10;
    finalScore = 0;
});

clearScoreBtn.addEventListener("click", function(){
    localStorage.removeItem("allScores");
    allScores = [];
    showScores.style.display = "none";
});

startBtn.on("click", function(event) {
    event.preventDefault();
    var currBtn = event.target;
    console.log(currBtn);
    if (currentPage === "start") {
        currentPage = "question1";
        startPage.css("display", "none");
        startTimer();
        question1.css("display", "flex");
    } else{
        currentPage = "start";
        startPage.css("display", "flex")
    }
})

function isTimeUp() {
    if (currentPage === "log-score"){
    question1.css("display", "none");
    question2.css("display", "none");
    question3.css("display", "none");
    question4.css("display", "none");
    question5.css("display", "none");
    }
}