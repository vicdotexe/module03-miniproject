var tactics = ["R","P","S"];
var userScore = 0;
var cpuScore = 0;
// var userScoreP = document.getElementById("userScore");
// var cpuScoreP = document.getElementById("cpuScore");
var playButton = document.getElementById("playButton");

function randomInt(max){
    return Math.floor(Math.random() * max);
}

function getRandomTactic(){
    return tactics[randomInt(tactics.length)];
}

function compareResults(user, cpu){
    // assumes the parameters have already been set to upper-case
    var result;
    if (user == "R")
    {
        if (cpu == "R"){
            result = "Tie";
        }
        if (cpu == "S"){
            result = "Win";
        }
        if (cpu == "P"){
            result = "Loose";
        }
    }
    if (user == "P")
    {
        if (cpu == "P"){
            result = "Tie";
        }
        if (cpu == "R"){
            result = "Win";
        }
        if (cpu == "S"){
            result = "Loose";
        }
    }
    if (user == "S")
    {
        if (cpu == "S"){
            result = "Tie";
        }
        if (cpu == "P"){
            result = "Win";
        }
        if (cpu == "R"){
            result = "Loose";
        }
    }
    return result;
}


function isTacticValid(tactic){
    // assumes the parameters have already been set to upper-case
    return (tactic == "R" || tactic == "P" || tactic == "S");
}

function promptUser(){

    var userTactic = prompt("Choose R, P, or S");
    
    // return null if pressed cancel
    if (userTactic == undefined){
        return null; 
    }

    // safeguard against casing
    userTactic = userTactic.toUpperCase(); 

    // check for valid prompt entry
    if (!isTacticValid(userTactic)){
        alert("Valid entries are only R, P or S"); // remind the user of their options
        return promptUser(); // continue to prompt user
    }

    // if this is reached then the user input a valid option
    return userTactic;
}

function processScore(result){
    if (result == "Win"){
        userScore++;
    }
    if (result == "Loose"){
        cpuScore++;
    }
    alert(`User Score: ${userScore}
Computer Score: ${cpuScore}`);
}

function runGame(){

    var userTactic = promptUser();

    // if the user pressed cancel then escape the game
    if (userTactic == null){
        return;
    }

    // the user picked their tactic, lets process the computers
    // choice and display the all activity/results to the user
    var computerTactic = getRandomTactic();
    alert(`Computer picked ${computerTactic}`);
    var gameResult = compareResults(userTactic.toUpperCase(), computerTactic);
    alert(`You ${gameResult}!`);

    processScore(gameResult);
    // refreshPageScores();
    
    // ask if user wants to play again
    if (confirm("Play again?")){
        return runGame();
    }
}

// function refreshPageScores(){
//     userScoreP.innerHTML = `User Score: ${userScore}`;
//     cpuScoreP.innerHTML = `Cpu Score: ${cpuScore}`;
// }

refreshPageScores();
playButton.addEventListener("click", runGame);