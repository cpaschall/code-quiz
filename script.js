



// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// var time = document.querySelector("#time-clock");
// var start = document.querySelector("#start-timer");
// var stop = document.querySelector("#stop-timer");

// var seconds = 120;
// var timerInterval = 120;





// var answeredQuestions = [];

// function timeDisplay() {
//     var sec = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
//     var min = Math.floor(seconds/60);
//     time.textContent = `${min}:${sec}`;

// }

// function startTimer() {
//     clearInterval(timerInterval);
//     timerInterval = setInterval(function() {
//         --seconds;
//         timeDisplay();
//         if(seconds === 0) {
//             clearInterval(timerInterval);
//         }
//     }, 1000);

// }

// function stopTimer() {
//     clearInterval(timerInterval);
// }

// function startTest() {
//     start.addEventListener("click", function(event) {
//         startTimer()
//     });
// }

// stop.addEventListener("click", function(event) {
//     stopTimer()
// })

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// 1. Create all pages in javascript then append to html file.  Each question/start pg/high-score has to take up the same space
//     - possible I can create each question in html, all under a single div so it takes up the same space.  Then give each question an id and switch display for each id to "none" then use javascript to change the display attribut so only that question shows when it's time.
var buttonEl = document.querySelector(".answerBtn");
var displayEl = document.querySelector(".current-display");
var getSection = document.querySelectorAll("section");
var answerConfirm = document.createElement("p");
var createBtnAnswer = document.createElement("button");
var createBtnWrong1 = document.createElement("button");
var createBtnWrong2 = document.createElement("button");
var createBtnWrong3 = document.createElement("button");
var allBtns = document.querySelectorAll("button");
var createH2 = document.createElement("h2");
var startPage = document.querySelector("#start-page")
var startQuiz = document.querySelector("#start-quiz")
var answerBtn = document.querySelector("#answer-btn");
var wrongBtn = document.querySelector(".wrong-btn");
createBtnAnswer.setAttribute("id", "answer-btn");
createBtnWrong1.setAttribute("class", "wrong-btn");
createBtnWrong2.setAttribute("class", "wrong-btn");
createBtnWrong3.setAttribute("class", "wrong-btn");

// var answerBtn = document.querySelector("#answer-btn");
// var wrongBtn = document.querySelector(".wrong-btn");


var q1 = {
    question: "Test Question1",
    wrongAns1 : "wrong 1",
    wrongAns2 : "wrong 2",
    wrongAns3 : "wrong 3",
    rightAns : "right",
}; 
var q2 = {
    question: "Test Question2",
    wrongAns1 : "wrong 1",
    wrongAns2 : "wrong 2",
    wrongAns3 : "wrong 3",
    rightAns : "right",
}; 
var q3 = {
    question: "Test Question3",
    wrongAns1 : "wrong 1",
    wrongAns2 : "wrong 2",
    wrongAns3 : "wrong 3",
    rightAns : "right",
}; 
var q4 = {
    question: "Test Question4",
    wrongAns1 : "wrong 1",
    wrongAns2 : "wrong 2",
    wrongAns3 : "wrong 3",
    rightAns : "right",
}; 
var q5 = {
    question: "Test Question5",
    wrongAns1 : "wrong 1",
    wrongAns2 : "wrong 2",
    wrongAns3 : "wrong 3",
    rightAns : "right",
}; 

// var questions = [q1, q2, q3, q4, q5];




function chooseAnswer() {
    // var answerBtn = document.querySelector("#answer-btn");
    // var wrongBtn = document.querySelector(".wrong-btn");

    answerBtn.addEventListener("click", function() { 
        answerConfirm.textContent = "Correct Answer";
        getSection[1].appendChild(answerConfirm);
        return
    });
    wrongBtn.addEventListener("click", function() { 
        answerConfirm.textContent = "Wrong Answer";
        getSection[1].appendChild(answerConfirm);
        return
    });
}
function displayFirstQuestion() {
    createH2.textContent = q1.question;
    getSection[1].appendChild(createH2);
    createBtnWrong1.textContent = q1.wrongAns1;
    getSection[1].appendChild(createBtnWrong1);
    createBtnWrong2.textContent = q1.wrongAns2;
    getSection[1].appendChild(createBtnWrong2);
    createBtnWrong3.textContent = q1.wrongAns2;
    getSection[1].appendChild(createBtnWrong3);
    createBtnAnswer.textContent = q1.rightAns;
    getSection[1].appendChild(createBtnAnswer);
    chooseAnswer();
   
}


function displayQuestion() {
    var questions = [q1, q2, q3, q4, q5];
    for(var i = 1; i < questions.length; i++){
        // chooseAnswer()
        createH2.textContent = questions[i].question;
        getSection[1].appendChild(createH2);
        createBtnWrong1.textContent = questions[i].wrongAns1;
        getSection[1].appendChild(createBtnWrong1);
        createBtnWrong2.textContent = questions[i].wrongAns2;
        getSection[1].appendChild(createBtnWrong2);
        createBtnWrong3.textContent = questions[i].wrongAns2;
        getSection[1].appendChild(createBtnWrong3);
        createBtnAnswer.textContent = questions[i].rightAns;
        getSection[1].appendChild(createBtnAnswer);
        // chooseAnswer();
        if(answerBtn || wrongBtn) {
            console.log("you hit a button")
        }
    }
    
}



function nextQuestion() {
    var questions = [q1, q2, q3, q4, q5];
    for(i = 1; i < questions.length; i++){
        displayQuestion(questions[i]);
        
    }
}

startQuiz.addEventListener("click", function() {
    startPage.setAttribute("style", "display: none;");
    displayFirstQuestion();
});    
    



// function displayQuestion() {
//     for(var i = 0; i < questions.length; i++) {
//         // if(i === 0){
//         getSection[1].children[i].style.display = "flex";
//         buttonEl.addEventListener("click", function() {
//             if(buttonEl === document.querySelector(".correct-answer")) {
//                 answerConfirm.textContent = "correct";
//             }else{
//                 answerConfirm.textContent = "incorrect";
//             };
//         });
//     // getSection[1].children[i].style.display = "none";
//     };
    
// }


// function testFunction () {
//     getSection[1].children[0].style.display = "flex";
// }



// 2. create a nav-bar with highscores on the left, timer on the right.  This can be done in html file directly

// 3. user is presented with start page on home page with a start button that beigins the quiz

// 4. questions pages are generated (acceptabce criteria does not same questions have to be random).

// 5. when user selects their answer (button) they are told if the answer is correct/incorrect and total score is updated.  If is not the last question, the next question is presented after a brief time delay.

// 6. after last question, "all don" page is shown.  It confirms the final score and asked for user to submit their initials. 

// 7. once initials are submitted, the high scores page is shown with each high score.  user with highest score shoul be at the top (sort by key-value pare with highest score at top).  Store via local storage

// 8. on high score pg, user is given option to go back to start page or clear highscores.