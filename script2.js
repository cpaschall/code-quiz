



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
var logScore = $("#log-score");
var scoreDisplay = $("#quiz-score")
var answrBtns = $(".answer-btn");
var rightAnswer = $(".correct-answer");
var checkAnswer = $(".check-answer");
var currentPage = $("start");


var seconds = 180;
var timerInterval = 0;
var finalScore = 0

startPage.css("display", "flex");

// checks to see if currently on start page when button is clicked and if it is, changes start page display to none
// and changes the Question #1 page display from "none" to "flex"
function renderTimer() {
    var sec = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
    var min = Math.floor(seconds / 60);
    timer.text(`${min}:${sec}`);
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        --seconds;
        renderTimer()
        if(seconds <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

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

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// function resetAnswer() {
//     checkAnswer.text("")
//     question1.css("display", "none");
//     question2.css("display", "flex");
// }

// function questionDelay() {
//     question2.css("display", "none");
// }

function subtractTime() {

}

function correctAnswer(currentAnswer, callBack) {
    if (currentAnswer.classList.contains("correct-answer")) {
        console.log("correct answer");
        checkAnswer.text("Correct Answer");
        finalScore++;
        // setTimeout(resetAnswer, 2000);

    }else{
        checkAnswer.text("Wrong answer");
        seconds -= 5;
        // setTimeout(resetAnswer, 2000);
    }
    setTimeout(function() {
        checkAnswer.text("");
        callBack()
    }, 1000);
}

// Function check the current value of "currentAnswer" then changes the display of the current page to none
// and displays the next page after a button click
function nextQuestion (event) {
    event.preventDefault();
    var currentAnswer = event.target;
    console.log(currentAnswer);
    if(currentPage === "question1") {
        currentPage = "question2";
        correctAnswer(currentAnswer, function() {
            question1.css("display", "none");
            question2.css("display", "flex");
        });
        // question1.css("display", "none");
        // question2.css("display", "flex");
    } else if(currentPage === "question2") {
        currentPage = "question3";
        correctAnswer(currentAnswer, function(){
            question2.css("display", "none");
            question3.css("display", "flex");
        });
        // question2.css("display", "none");
        // question3.css("display", "flex");
    } else if(currentPage === "question3") {
        currentPage = "question4";
        correctAnswer(currentAnswer, function(){
            question3.css("display", "none");
            question4.css("display", "flex");
        });
    }else if(currentPage === "question4") {
        currentPage = "question5";
        correctAnswer(currentAnswer, function(){
            question4.css("display", "none");
            question5.css("display", "flex");
        });
    } else if(currentPage === "question5") {
        currentPage = "log-score";
        correctAnswer(currentAnswer, function(){
            question5.css("display", "none");
            logScore.css("display", "flex");
            // scoreDisplay.textContent = "Final Score: " + finalScore;
            scoreDisplay.text(`Final Score: ${finalScore}`);
            console.log(finalScore);
            // logScore.append(scoreDisplay);
            // console.log(scoreDisplay);
            clearInterval(timerInterval);
            // seconds = 0;
            // renderTimer();
        });
    }
};

for(var i = 0; i < answrBtns.length; i++) {
    answrBtns[i].addEventListener("click", nextQuestion)
};


function logScore(event) {
    event.preventDefault();
    var initials = event.target;
    if(currentPage === "log-score");
}


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
function endQuiz() {
    if(seconds === 0 || (currentPage === "log-score")) {
        console.log("Game over")
    }
}




// WHEN the game is over
// THEN I can save my initials and my score

// var todoInput = document.querySelector("#todo-text");
var user = document.querySelector("#usr-init");
// var button = document.createElement("button");
var subScoreBtn = document.querySelector("#submit-score");
// var todoForm = document.querySelector("#todo-form");
var scoreForm = document.querySelector("#score-form");
var highScores = $("#high-scores");
// var todoList = document.querySelector("#todo-list");
var showScores = document.querySelector("#show-scores")
// var initials = document.querySelector("#initials"); chenged value
// var todoCountSpan = document.querySelector("#todo-count");
var totEntry = document.querySelector("#total-entries")


var allScores = [];

function renderHighScore() {
    // currentPage = "end-game";
    // logScore.css("display", "none");
    // highScores.css("display", "flex");

    showScores.innerHTML = "";
    totEntry.textContent = allScores.length;

    for (var i = 0; i < allScores.length; i++) {
        var score = allScores[i];
        var liEl = document.createElement("li");
        liEl.textContent = score[0] + ": " + score[1];
        liEl.setAttribute("class", "score-list");
        showScores.appendChild(liEl)
       

    }
}

function initDisplay() {
    // currentPage = "end-game";
    // logScore.css("display", "none");
    // highScores.css("display", "flex");

    var highScores = JSON.parse(localStorage.getItem("allScores"));

    if (highScores !== null) {
        allScores = highScores;
    }

    renderHighScore();
}

function storedScores() {
    localStorage.setItem("allScores", JSON.stringify(allScores))
}

// subScoreBtn.addEventListener("click", function(event) {
//     event.preventDefault();
    
// })
    
    // liEl.setAttribute("class", "highscore-list");
    // liEl.textContent = highScore.initials + " : " + highScore.score;
//     allScores += [highScore.initials, highScore.score];
//     console.log(scoreArray);
//     showScores.append(liEl);
    
//     console.log(highScore);
//     console.log(highScore.initials);
    
//     console.log(liEl)
    

// }

subScoreBtn.addEventListener("click", function(event){
    event.preventDefault();

    currentPage = "end-game";
    logScore.css("display", "none");
    highScores.css("display", "flex");

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
    // initDisplay();
    

    // localStorage.setItem("scoreList", JSON.stringify(highScore));
    // renderHighScore();

})


// subScoreBtn.addEventListener("click", initDisplay);

initDisplay();

// var initials = $("enter-initials")

// function saveHighScore() {
    
//     var highScore = {
//         user: initials.value,
//         score: finalScore.value,
//     }
// }
// var scoreArray = [];

