var score = 0;
var currentQuestion = 0;
var titleScreen = document.querySelector('#begin');
var startQuizBtn = document.querySelector('#start-quiz');
var screen = document.querySelector('.body');

//start timer with start game

// start quiz
var startQuiz = function(event) {

    //clean screen
    titleScreen.parentNode.removeChild(titleScreen);

    
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

    checkAnswer();
}

//check answer submitted
var checkAnswer = function() {
    
    if() {
        var showAnswer = document.createElement('h2');
        showAnswer.textContent = 'Correct';
        showAnswer.className = 'show-answer';
        screen.appendChild(showAnswer);
        
        //add 1 to score
        score++;
    }

    else {
        var showAnswer = document.createElement('h2');
        showAnswer.textContent = 'Incorrect';
        showAnswer.className = 'show-answer';
        screen.appendChild(showAnswer);

        // subtract 10 seccounds from timer
    }
}





//if question is right add to the scoreboard
    //if question is wrong subtract 10 sec from the timer
    

//game ends with answering all questions or timer runs out

// input initials for scoreboard

//show the scoreboard 
    //store the scoreboard if they play again



startQuizBtn.addEventListener('click', startQuiz);

