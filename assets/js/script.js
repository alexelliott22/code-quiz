score = 0;
currentQuestion = 0;
timeLeft = 75;
parent = document.querySelector('.body');
timer = document.querySelector('.timer');
scoreboard = document.querySelector('.table');

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

//create array to hold highscores
var leaderboard = [];

//start timer with start game
var startTimer = function countdown() {


    var timeInterval = setInterval(function() {
        if(timeLeft < 1) {
            timer.textContent = 0;
            clearInterval(timeInterval);
            finalScoreScreen();
        }
        else if (currentQuestion >= questions.length) {
            timer.textContent = 0;
            clearInterval(timeInterval);
        }
        else {
            timer.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        }
    }, 1000);
}

//wipe screen for next set of content
var cleanScreen = function() {

    parent.removeChild(document.querySelector('.main-screen'));

    if (currentQuestion <= questions.length - 1) {
    createQuestionEl();
    }
}


// start quiz
var startQuiz = function() {

    startTimer();
    cleanScreen();
}

//create question element
var createQuestionEl = function() {    

    //create question element
    questionEl = document.createElement('section');
    questionEl.className = 'main-screen';
    parent.appendChild(questionEl);

    //create question
    var questionContent = document.createElement('h1');
    questionContent.textContent = questions[currentQuestion].question;
    questionEl.appendChild(questionContent);

    //create container for answers
    var answerContainer = document.createElement('div');
    answerContainer.className = 'answer-container';
    questionEl.appendChild(answerContainer);

    //create question answers
    for (i = 0; i < questions[currentQuestion].choices.length; i++) {
        var questionAnswer = document.createElement('button');
        questionAnswer.textContent = questions[currentQuestion].choices[i];
        questionAnswer.className = 'btn';
        questionAnswer.id = i
        answerContainer.appendChild(questionAnswer);
        questionAnswer.addEventListener('click', checkAnswer);
    }
    
}


//check answer submitted
var checkAnswer = function(e) {

    //check if correct button was clicked and add a point
    if( e.target.id == questions[currentQuestion].answer) {
        var showResult = document.createElement('h2');
        showResult.textContent = 'Correct';
        showResult.className = '.show-result';
        questionEl.appendChild(showResult);
        
        //add 1 to score
        score += 5;
        
        currentQuestion++;

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
        
        currentQuestion++;

        setTimeout(cleanScreen, 1000);
    }
        
    if (currentQuestion >= questions.length) {
        setTimeout(finalScoreScreen, 1000);
    }
    
    
}


//game ends with answering all questions or timer running out
var finalScoreScreen = function() {

    //cleanScreen();

    //create container
    var scoreInputContainer = document.createElement('section');
    scoreInputContainer.className = '.main-screen';
    parent.appendChild(scoreInputContainer);

    //create ALL DONE title
    var displayTitle = document.createElement('h1');
    displayTitle.textContent = 'All Done!';
    scoreInputContainer.appendChild(displayTitle);

    //show final score
    var displayScore = document.createElement('h2');
    displayScore.textContent = 'Your final score is ' + score + '!';
    scoreInputContainer.appendChild(displayScore);

    //create container for input and submit button
    var initialsContainer = document.createElement('div');
    scoreInputContainer.appendChild(initialsContainer);

    // create input for initials
    var initialsInput = document.createElement('input');
    initialsInput.type = 'text';
    initialsInput.name = 'initials';
    initialsInput.placeholder = 'Enter your initials here';
    initialsContainer.appendChild(initialsInput);

    //create submit button
    var submitScoreBtn = document.createElement('button');
    submitScoreBtn.textContent = 'Submit';
    submitScoreBtn.className = 'btn';
    submitScoreBtn.id = 'submit-btn';
    initialsContainer.appendChild(submitScoreBtn);



        //submit score
        submitScoreBtn.addEventListener('click', submitScore);

    
}

// submit score of quiz
var submitScore = function() {
    var submittedInitials = document.querySelector('input[name="initials"]').value;

    if(!submittedInitials) {
        window.alert('ERROR: You need to input your initials!');
        return false;
    }

    var currentScore = {
        name: submittedInitials,
        score: score
    };

    saveScoretoLocalStorage(currentScore);
}

// save score to local storage
var saveScoretoLocalStorage = function(currentScore) {
    //pull down localstorage
    leaderboard = JSON.parse(localStorage.getItem('highscores')) || [];

    //add score to leaderboard 
    leaderboard.push(currentScore);
    

    //add leaderboard to local storage
    localStorage.setItem('highscores', JSON.stringify(leaderboard));

    window.location.href='./scoreboard.html';

    createLeaderboard();
}

// create scoreboard
var renderLeaderboard = function() {
    
    
    //create table rows
    var createTable = document.createElement('section');
    createTable.className = 'rows';
    scoreboard.appendChild(createTable);

    for (i = 0; i < leaderboard.length; i++) {
        //create container with score data
        createScoreContainer = document.createElement('div');
        createScoreContainer.textContent = i + 1 + ' ' + leaderboard[i].name + ' ' + leaderboard[i].score;
        createTable.appendChild(createScoreContainer);
    }

    console.log('blue');
    
}

// save score to local storage
var onSubmit = function() {
    
    

    loadScore();
}

// load score into scoreboard
var loadScore = function() {

    renderLeaderboard();
}


var clearLeaderboard = function() {
  var clearScores = document.querySelector('.rows');  

  clearScores.remove();
}

document.querySelector('#start-quiz').addEventListener('click', startQuiz);
document.querySelector('.header-btn').addEventListener('click', loadScore);