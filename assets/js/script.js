var score = 0;
var currentQuestion = -1;
var timeLeft = 75;
var startQuizBtn = document.querySelector('#start-quiz');
var parent = document.querySelector('.body');
var timer = document.querySelector('.timer');
var goBackBtn = document.getElementById('go-back');


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
            endgame();
        }
    }, 1000);
}

var cleanScreen = function() {

    parent.removeChild(document.querySelector('.main-screen'));

    createQuestionEl();
}


// start quiz
var startQuiz = function() {

    startTimer();
    cleanScreen();
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
    
    //change which question we are on
    currentQuestion++;

    //create question element
    questionEl = document.createElement('section');
    questionEl.className = 'main-screen';
    questionEl.setAttribute('question-id', currentQuestion);
    parent.appendChild(questionEl);

    //create question
    var questionContent = document.createElement('h1');
    questionContent.textContent = questions[currentQuestion].question;
    questionEl.appendChild(questionContent);

    //create question answers
    for (i = 0; i < questions[currentQuestion].choices.length; i++) {
        var questionAnswer = document.createElement('button');
        questionAnswer.textContent = questions[currentQuestion].choices[i];
        questionAnswer.className = 'btn';
        questionAnswer.id = i
        questionEl.appendChild(questionAnswer);
        questionAnswer.addEventListener('click', checkAnswer);
    }
    
}


//check answer submitted
var checkAnswer = function(e) {

    // console.log(e.target.id);
    // console.log(questions[currentQuestion].answer);
    //check if correct button was clicked and add a point
    if( e.target.id == questions[currentQuestion].answer) {
        var showResult = document.createElement('h2');
        showResult.textContent = 'Correct';
        showResult.className = '.show-result';
        questionEl.appendChild(showResult);
        
        //add 1 to score
        score++;
        
        setTimeout(cleanScreen, 1000);

    }

    //if wrong anser was clicked subtract 10 seconds
    else {
        var showResult = document.createElement('h2');
        showResult.textContent = 'Incorrect';
        showResult.className = '.show-result';
        questionEl.appendChild(showResult);

        // subtract 10 seccounds from timer
        timeLeft -= 10;
        
        setTimeout(cleanScreen, 1000);
    }

    if (currentQuestion >= questions.length - 1) {
        endgame();
    }
}


//game ends with answering all questions or timer running out
var endgame = function() {
    console.log('blue whales');
    //show score

        // input initials for scoreboard

        //submit score
    saveScore();
}

var saveScore = function() {
    console.log('yellow whale');
    //store the scoreboard in local storage if they play again
    localStorage.setItem('highscore', score);
}



startQuizBtn.addEventListener('click', startQuiz);