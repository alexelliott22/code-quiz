var score = 0;
var currentQuestion = 0;
var timeLeft = 75;
var titleScreen = document.querySelector('#begin');
var startQuizBtn = document.querySelector('#start-quiz');
var questionContainer = document.querySelector('.main-screen');
var screen = document.querySelector('.body');
var timer = document.querySelector('.timer');
var goBackBtn = document.querySelector('#go-back')


//start timer with start game
var startTimer = function countdown() {


    var timeInterval = setInterval(function() {
        if(timeLeft >= 1) {
            timer.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        }
        else {
            timer.textContent = 0;
            clearInterval(timeInterval);
        }
    }, 1000);
}

var cleanScreen = function() {

    titleScreen.parentNode.removeChild(titleScreen);
}


// start quiz
var startQuiz = function(event) {

    cleanScreen();

    startTimer();

    createQuestionEl();
}


//create array for holding questions
var questions = [
    {
        question: 'JavaScript is a ___ -side programming language.',
        choices: ['client', 'server', 'both', 'none'],
        answer: 2
    },
    {
        question: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
        choices: ['alertBox(“Hello DataFlair!”);', 'alert(Hello DataFlair!);', 'msgAlert(“Hello DataFlair!”);', 'alert(“Hello DataFlair!”);'],
        answer: 3
    },
    {
        question: 'How do you find the minimum of x and y using JavaScript?',
        choices: ['min(x,y);', 'Math.min(x,y)', 'Math.min(xy)', 'min(xy);'],
        answer: 1
    },
    {
        question: 'What was the name of the person who invented Javascript?',
        choices: ['Bill Gates', 'Barrack Obama', 'Brenden Eich', 'Dave Portnoy'], 
        answer: 2
    },
    {
        question: 'What language makes up the content on a webpage?',
        choices: ['HTML', 'CSS', 'Javasciprt', 'Ruby'],
        answer: 0
    },
    {
        question: 'What language styles a webpage?',
        choices: ['HTML', 'CSS', 'Javasciprt', 'Ruby'],
        answer: 1
    },
    {
        question: 'Which language makes the webpage interactive and was created by Brenden Eich?',
        choices: ['HTML', 'CSS', 'Javasciprt', 'Ruby'],
        answer: 2
    },
    {
        question: 'Who invented CSS?',
        choices: ['Jack Baur', 'John Wick', 'Jason Bourne', 'Håkon Wium Lie'],
        answer: 3
    }
];


//create question element
var createQuestionEl = function() {
    
    //create question element
    var questionEl = document.createElement('section');
    questionEl.className = 'main-screen';
    questionEl.setAttribute('question-id', currentQuestion);
    screen.appendChild(questionEl);

    //create question
    var questionContent = document.createElement('h1');
    questionContent.textContent = questions[currentQuestion].question;
    questionEl.appendChild(questionContent);

    //create question answers
    for (i = 0; i < questions[currentQuestion].choices.length; i++) {
        var questionAnswers = document.createElement('button');
        questionAnswers.textContent = questions[currentQuestion].choices[i];
        questionAnswers.className = 'btn';
        questionAnswers.setAttribute('button-id', i);
        questionEl.appendChild(questionAnswers);
    }

    //change which question we are on
    currentQuestion++;

    //checkAnswer();
}


//check answer submitted
var checkAnswer = function() {
    
//    console.log('blue whales');

    // //check if correct button was clicked and add a point
    // if() {
    //     var showResult = document.createElement('h2');
    //     showResult.textContent = 'Correct';
    //     showResult.className = 'show-result';
    //     screen.appendChild(showResult);
        
    //     //add 1 to score
    //     score++;
    // }

    // //if wrong anser was clicked subtract 10 seconds
    // else {
    //     var showResult = document.createElement('h2');
    //     showResult.textContent = 'Incorrect';
    //     showResult.className = 'show-result';
    //     screen.appendChild(showResult);

    //     // subtract 10 seccounds from timer
    //     timeLeft - 10;
    // }
}


//game ends with answering all questions or timer running out
var endgame = function() {

    //show score

        // input initials for scoreboard

        //submit score
    saveScore();
}

var saveScore = function() {
    
    //store the scoreboard in local storage if they play again
    localStorage.setItem('highscore', score);
}


var goBack = function() {
    score = 0;
    timeLeft = 75;
    currentQuestion = 0;

    console.log('blue whales!');
}

startQuizBtn.addEventListener('click', startQuiz);
goBackBtn.addEventListener('click', goBack);