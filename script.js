var tactics = ["R","P","S"];
var wins = 0;
var losses = 0;
var ties = 0;

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
        wins++;
    }
    if (result == "Loose"){
        losses++;
    }
    if (result == "Tie"){
        ties++;
    }

    alert(`Wins: ${wins}
Losses: ${losses}
Ties: ${ties}`);
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

    // ask if user wants to play again
    if (confirm("Play again?")){
        return runGame();
    }
}

var playButton = document.getElementById("playButton");
playButton.addEventListener("click", runGame);