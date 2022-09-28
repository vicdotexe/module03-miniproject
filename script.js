var tactics = ["R","P","S"];

function randomInt(max){
    return Math.floor(Math.random() * max);
}

function getRandomTactic(){
    return tactics[randomInt(tactics.length)];
}

function getGameResults(userTactic, computerTactic){
    var user = userTactic.toUpperCase();
    var cpu = computerTactic.toUpperCase();
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

function runGame(){
    var userTactic = prompt("Choose: R, P, or S");
    var computerTactic = getRandomTactic();
    alert(`Computer picked ${computerTactic}`);
    var gameResult = getGameResults(userTactic, computerTactic);
    alert(`You ${gameResult}!`);
}

runGame();