
player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");
player1Score = 0;
player2Score = 0;
document.getElementById("questionTurn").innerHTML = player1Name;
document.getElementById("answerTurn").innerHTML = player2Name;
document.getElementById("player1").innerHTML = player1Name + " :";
document.getElementById("player2").innerHTML = player2Name + " :";
document.getElementById("player1score").innerHTML = player1Score;
document.getElementById("player2score").innerHTML = player2Score;

questionturn = player1Name;
answerturn = player2Name;


function send(){
    document.getElementById("output").style.display = "block";
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    answer = parseInt(number1)*parseInt(number2);
    question = number1  + " X " + number2;
    document.getElementById("question").innerHTML = question;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check(){
    enteredAns = document.getElementById("answer").value;
    if(answer == enteredAns){

        if(answerturn == player2Name){
            player2Score++;
            document.getElementById("player2score").innerHTML = player2Score;
            questionturn = player2Name;
            answerturn = player1Name;
        }else{
            player1Score++;
            document.getElementById("player1score").innerHTML = player1Score;
            questionturn = player1Name;
            answerturn = player2Name;
        }
          
    }else{
        if(answerturn == player2Name){
            player1Score++;
            questionturn = player2Name;
            answerturn = player1Name;
            document.getElementById("player1score").innerHTML = player1Score;
        }else{
            player2Score++;
            questionturn = player1Name;
            answerturn = player2Name;
            document.getElementById("player2score").innerHTML = player2Score;
        }
    }
    document.getElementById("questionTurn").innerHTML = questionturn;
    document.getElementById("answerTurn").innerHTML = answerturn;
    document.getElementById("answer").value = "";
    document.getElementById("output").style.display = "none";
}