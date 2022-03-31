
var startQuiz = document.getElementById("start-quiz");
var timeDisplay = document.getElementById("timer");
var countDown = 180

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
function quizTimer() {
    var timeInterval = setInterval(function() {
        countDown--;

    })
}

startQuiz.addEventListener("click", quizTimer)
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
// var buttonEl = document.querySelector(".answerBtn");
// var displayEl = document.querySelector(".current-display");
// var getSection = document.querySelectorAll("section");
// var answerConfirm = document.createElement("p");
// var createBtnAnswer = document.createElement("button");
// var createBtnWrong1 = document.createElement("button");
// var createBtnWrong2 = document.createElement("button");
// var createBtnWrong3 = document.createElement("button");
// createBtnAnswer.setAttribute("id", "answer-btn");
// createBtnWrong1.setAttribute("class", "wrong-btn");
// createBtnWrong2.setAttribute("class", "wrong-btn");
// createBtnWrong3.setAttribute("class", "wrong-btn");
// var allBtns = document.querySelectorAll("button");
// var createH2 = document.createElement("h2");
// var startPage = document.querySelector("#start-page")
// var startQuiz = document.querySelector("#start-quiz")
// var answerBtn = document.querySelector("#answer-btn");
// var wrongBtn = document.querySelector(".wrong-btn");


// var answerBtn = document.querySelector("#answer-btn");
// var wrongBtn = document.querySelector(".wrong-btn");

var startPage = $(".current-display")
var questionList = $("#question-list")
var currentQues = $(".current-question")
var divEl = $("<div>")
var h3El = $("<h3>")
var buttonEL = $("<button>")
var allBtns = document.querySelectorAll(".answer-btn");
var startBtn = $("#start-quiz")
// var answerBtn = $(".answer-btn")
var answer1 = $("<button>")
var answer2 = $("<button>")
var answer3 = $("<button>")
var answer4 = $("<button>")

var q1 = {
    question : "Test answer1",
    answer1 : "wrong 1",
    answer2 : "right",
    answer3 : "wrong 2",
    answer4 : "wrong 3",
}; 
var q2 = {
    question : "Test answer2",
    answer1 : "wrong 1",
    answer2 : "wrong 2",
    answer3 : "wrong 3",
    answer4 : "right",
}; 
var q3 = {
    question : "Test answer3",
    answer1 : "right",
    answer2 : "wrong 1",
    answer3 : "wrong 2",
    answer4 : "wrong 3",
}; 
var q4 = {
    question : "Test answer4",
    answer1 : "wrong 1",
    answer2 : "wrong 2",
    answer3 : "right",
    answer4 : "wrong 3",
}; 
var q5 = {
    question : "Test Question5",
    answer1 : "wrong 1",
    answer2 : "wrong 2",
    answer3 : "wrong 3",
    answer4 : "right",
}; 

// q1.attr("id", "question-1")
// q2.attr("id", "question-2")
// q3.attr("id", "question-3")
// q4.attr("id", "question-4")
// q5.attr("id", "question-5")


function homePage() {
    startPage.css("display", "flex");
    questionList.css("display", "none");
    startBtn.on("click", nextQues);
}

homePage()


function checkAnswer(event) {
    // event.preventDefault();
    // console.log(event);
    // console.log("check answer function");
    // for(i = 0; i <5; i++) {
    //     if(event.currentTarget == q1.answer2) {
    //         event.preventDefault();
    //         console.log("correct answer");
    //     }else{
    //         event.preventDefault();
    //         console.log("wrong answer");
    //     }
    // }
}

// allBtns.on("click", checkAnswer)   
//     event.preventDefault();
//     if(event.currentTarget == q1.answer2) {
//         console.log("correct answer");
//     }else{
//         console.log("wrong answer");
//     }
// })
// // works!

function nextQues(event) {
    event.preventDefault();
    if (startPage) {
        createQuestion(q1);
        // allBtns.on("click", checkAnswer);
        // answerBtn.on("click", answerMsg(q1));  
    } else if ($("#answer-1")) {
        createQuestion(q2)
    }

}




function createQuestion(question) {
    console.log("Create Question func working");
    startPage.css("display", "none");
    console.log("What's next?");
    divEl.attr("class", "current-question");
    if (question === q1) {
        divEl.attr("id", "question-1");
    } else if (question === q2) {
        divEl.attr("id", "question-2");;
    } else if (question === q3) {
        divEl.attr("id", "question-3");;
    }else if (question === q4) {
        divEl.attr("id", "question-4");;
    } else if (question === q5) {
        divEl.attr("id", "question-5");;
    } else {
        return
    }
    questionList.append(divEl);
    h3El.text(question.question);
    divEl.append(h3El);
    answer1.text(question.answer1);
    answer1.attr({class:"answer-btn", id:"answer-1"});
    divEl.append(answer1);
    answer2.text(question.answer2);
    answer2.attr({class:"answer-btn", id:"answer-2"});
    divEl.append(answer2);
    answer3.text(question.answer3);
    answer3.attr({class:"answer-btn", id:"answer-3"});
    divEl.append(answer3);
    answer4.text(question.answer4);
    answer4.attr({class:"answer-btn", id:"answer-4"});
    divEl.append(answer4);
    questionList.css("display", "flex");
};

// var allBtns = document.querySelectorAll(".answer-btn");

function answerMsg(question) {
    // for(i=1; i<5; i++) {
    //     q1.children[i].addEventListener("click", function(event) {
    //         if(event.currentTarget == document.getElementById("correct-answer")) {
    //             console.log("correct answer");
    //             return;
    //         }else{
    //             console.log("wrong answer");
    //             return;
    //         }
    //     })
    var allAnswers = [question.answer1, question.answer2, question.answer3, question.answer4];
    for(i = 0; i < allAnswers.length; i++) {
        allAnswers[i].addEventListener("click", function(event) {
            if (question === q1) {
                event.preventDefault();
                if(event.currentTarget == q1.answer2) {
                    console.log("correct answer");
                }else{
                    console.log("wrong answer");
                }
            }
            
        })
    }
    
}
/* <div class="current-display" id="answer-1">
<h3>test 1</h3>
<button class="answer-btn">Wrong</button>
<button class="answer-btn">Wrong</button>
<button class="answer-btn" id="correct-answer">Right</button>
<button class="answer-btn">Wrong</button>
</div> */
// var questions = [q1, q2, q3, q4, q5];




// function chooseAnswer() {
    // var answerBtn = document.querySelector("#answer-btn");
    // var wrongBtn = document.querySelector(".wrong-btn");

//     answerBtn.addEventListener("click", function() { 
//         answerConfirm.textContent = "Correct Answer";
//         getSection[1].appendChild(answerConfirm);
//         return
//     });
//     wrongBtn.addEventListener("click", function() { 
//         answerConfirm.textContent = "Wrong Answer";
//         getSection[1].appendChild(answerConfirm);
//         return
//     });
// }
// function displayFirstQuestion() {
//     createH2.textContent = q1.question;
//     getSection[1].appendChild(createH2);
//     createBtnWrong1.textContent = q1.wrongAns1;
//     getSection[1].appendChild(createBtnWrong1);
//     createBtnWrong2.textContent = q1.wrongAns2;
//     getSection[1].appendChild(createBtnWrong2);
//     createBtnWrong3.textContent = q1.wrongAns2;
//     getSection[1].appendChild(createBtnWrong3);
//     createBtnAnswer.textContent = q1.rightAns;
//     getSection[1].appendChild(createBtnAnswer);
//     answerBtn.addEventListener("click", function() {
//         console.log("it worked!");
//     });
   
// }


// function displayQuestion() {
//     var questions = [q1, q2, q3, q4, q5];
//     for(var i = 1; i < questions.length; i++){
//         // chooseAnswer()
//         createH2.textContent = questions[i].question;
//         getSection[1].appendChild(createH2);
//         createBtnWrong1.textContent = questions[i].wrongAns1;
//         getSection[1].appendChild(createBtnWrong1);
//         createBtnWrong2.textContent = questions[i].wrongAns2;
//         getSection[1].appendChild(createBtnWrong2);
//         createBtnWrong3.textContent = questions[i].wrongAns2;
//         getSection[1].appendChild(createBtnWrong3);
//         createBtnAnswer.textContent = questions[i].rightAns;
//         getSection[1].appendChild(createBtnAnswer);
//         // chooseAnswer();
//         if(answerBtn || wrongBtn) {
//             console.log("you hit a button")
//         }
//     }
    
// }



// function nextQuestion() {
//     var questions = [q1, q2, q3, q4, q5];
//     for(i = 1; i < questions.length; i++){
//         displayQuestion(questions[i]);
        
//     }
// }

// startQuiz.addEventListener("click", function() {
//     startPage.setAttribute("style", "display: none;");
//     displayFirstQuestion();
// });    
    



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

// q1 = document.getElementById("answer-1");
// q2 = document.getElementById("answer-2");
// q3 = document.getElementById("answer-3");
// q4 = document.getElementById("answer-4");
// q5 = document.getElementById("question-5");
// var allSections = document.querySelectorAll(".current-display")
// var allQuestions = document.querySelectorAll(".answer-btn")


// // works!
// function answerMsg() {
//     // for(i=1; i<5; i++) {
//     //     q1.children[i].addEventListener("click", function(event) {
//     //         if(event.currentTarget == document.getElementById("correct-answer")) {
//     //             console.log("correct answer");
//     //             return;
//     //         }else{
//     //             console.log("wrong answer");
//     //             return;
//     //         }
//     //     })
//     for(i = 0; i < allQuestions.length; i++) {
//         allQuestions[i].addEventListener("click", function(event) {
//             if(event.currentTarget == document.getElementById("correct-answer")) {
//                 console.log("correct answer");
//                 nextQuestion()
//             }else{
//                 console.log("wrong answer");
//             }
//         })
//     }
    
// }
    
// // var sec = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
// function nextQuestion() {
//     for(i=1; i < allSections.length; i++) {
//         allSections[i].setAttribute("style", "display: none;");
//     }
// }


// function selectAnswer() {
//     for(i=1; i < allSections.length; i++) {
//         allSections[i].setAttribute("style", "display: flex;");
//         answerMsg();
//         nextQuestion();
//         // allSections[i].setAttribute("style", "display: none;");
//     }
// }


// // function showDisplay(event) {
// //     // event.stopPropagation();
// //     event.currentTarget.setAttribute("style","display: flex")
// // };

// // function hideDisplay(event) {
// //     // event.stopPropagation();
// //     event.currentTarget.setAttribute("style","display: none")
// };

// 2. create a nav-bar with highscores on the left, timer on the right.  This can be done in html file directly

// 3. user is presented with start page on home page with a start button that beigins the quiz

// 4. questions pages are generated (acceptabce criteria does not same questions have to be random).

// 5. when user selects their answer (button) they are told if the answer is correct/incorrect and total score is updated.  If is not the last question, the next question is presented after a brief time delay.

// 6. after last question, "all don" page is shown.  It confirms the final score and asked for user to submit their initials. 

// 7. once initials are submitted, the high scores page is shown with each high score.  user with highest score shoul be at the top (sort by key-value pare with highest score at top).  Store via local storage

// 8. on high score pg, user is given option to go back to start page or clear highscores.