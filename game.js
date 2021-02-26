document.getElementById("questionTurn").innerHTML = localStorage.getItem("player1Name");
document.getElementById("answerTurn").innerHTML = localStorage.getItem("player2Name");

console.log("player name is " + localStorage.getItem("player2Name"));

function send(){
    document.getElementById("output").style.display = "block";
}