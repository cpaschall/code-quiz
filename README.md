# code-quiz


## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

1. Create all pages in javascript then append to html file.  Each question/start pg/high-score has to take up the same space
    - possible I can create each question in html, all under a single div so it takes up the same space.  Then give each question an id and switch display for each id to "none" then use javascript to change the display attribut so only that question shows when it's time.

2. create a nav-bar with highscores on the left, timer on the right.  This can be done in html file directly

3. user is presented with start page on home page with a start button that beigins the quiz

4. questions pages are generated (acceptabce criteria does not same questions have to be random).

5. when user selects their answer (button) they are told if the answer is correct/incorrect and total score is updated.  If is not the last question, the next question is presented after a brief time delay.

6. after last question, "all don" page is shown.  It confirms the final score and asked for user to submit their initials. 

7. once initials are submitted, the high scores page is shown with each high score.  user with highest score shoul be at the top (sort by key-value pare with highest score at top).  Store via local storage

8. on high score pg, user is given option to go back to start page or clear highscores.