player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1name + ":";
document.getElementById("player2_name").innerHTML = player2name + ":";

document.getElementById("player1_score").innerHTML = player1score ;
document.getElementById("player2_score").innerHTML = player2score ;

document.getElementById("player_question").innerHTML = "Question turn  " + player1name ;
document.getElementById("player_answer").innerHTML = "Answer turn "+ player2name ;

function send()
{
   number1 = document.getElementById("number1").value;
   number2 = document.getElementById("number2").value;
   actual_answer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + "x" + number2 + "</h4>";
    inputbox = "<br> answer: <input type = 'text' id='inputcheckbox'>";
    checkbutton = "<br><br><button class='btn btn-primary' onclick='check()'>check</button>";
    row = question + inputbox + checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value = " ";
    document.getElementById("number2").value = " ";
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer = document.getElementById("inputcheckbox").value;
    if(get_answer == actual_answer){

        if(answer_turn == "player1"){

            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }

        else{

            player2score = player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score;  
        }
    }
    if(question_turn == "player1"){

        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn-" + player2name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn-" + player1name; 
    }

    if(answer_turn == "player1"){

        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn-" + player2name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn-" + player1name; 
    }

    document.getElementById("output").innerHTML =" ";
}
