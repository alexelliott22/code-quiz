var score = 0;
var questionCounter = 0;
var titleScreen = document.querySelector('#begin')
var startQuizBtn = document.querySelector('#start-quiz')

//start timer with start game

// start quiz
var startQuiz = function(event) {

    //clean screen
    titleScreen.parentNode.removeChild(titleScreen);

    
    createQuestion();
}













//create array for holding questions
var questions = [];




//ask a random question
var createQuestion = function() {
    var questionEl = document.createElement('section');
    questionEl.className = 'question';
    questionEl.setAttribute('question-counter', questionCounter);

}
    //if question is right add to the scoreboard
    //if question is wrong subtract 10 sec from the timer
    

//game ends with answering all questions or timer runs out

// input initials for scoreboard

//show the scoreboard 
    //store the scoreboard if they play again



startQuizBtn.addEventListener('click', startQuiz);