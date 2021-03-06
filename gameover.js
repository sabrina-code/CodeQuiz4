var username = document.getElementById("username");
var saveBtn = document.getElementById("save");

var mostRecentScore = localStorage.getItem("mostRecentScore");
var finalScore = document.getElementById("finalscore");
var highScore = JSON.parse(localStorage.getItem("highScore")) || []; 
//make the highScore string for localStorage do: localStorage.setItem("highScore", JSON.stringify([]));
//convert to an array object by JSON.parse do: console.log(JSON.parse(localStorage.getItem("highScore"))); 

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", function(){
    saveBtn.disabled = !username.value;
});

function saveHighScore(event){
    event.preventDefault();
    var player = {
        name: username.value,
        score: mostRecentScore
      };

    highScore.push(player);
    highScore.sort((a, b) => b.score - a.score);
    highScore.splice(8);

    localStorage.setItem("highScore", JSON.stringify(highScore));
}