scoreboard = document.querySelector('.table');

//pull down localstorage
var leaderboard = JSON.parse(localStorage.getItem('highscores')) || [];

console.log(leaderboard);

// create scoreboard
var renderLeaderboard = function() {
    
    //create table rows
    var createTable = document.createElement('section');
    createTable.className = 'rows';
    scoreboard.appendChild(createTable);

    for (i = 0; i < leaderboard.length; i++) {
        //create container with score data
        createScoreContainer = document.createElement('div');
        createScoreContainer.className = 'highscores';
        createScoreContainer.textContent = i + 1+ '.' + ' ' + leaderboard[i].name + ' ' + leaderboard[i].score;
        createTable.appendChild(createScoreContainer);
    }
    
}
renderLeaderboard();

// remove all scores from the leaderboard
var clearLeaderboard = function() {
    //remove rows from html
    document.querySelector('.rows').remove();

    //clear score from local storage
    localStorage.removeItem('highscores');

}


//change window
var changeWindow = function() {
    window.location.href = './index.html';
}

document.querySelector('#clear').addEventListener('click', clearLeaderboard);
document.querySelector('#go-back').addEventListener('click', changeWindow);