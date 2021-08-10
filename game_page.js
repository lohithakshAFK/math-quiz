player1_name = localStorage.getItem("Player1 name");
player2_name = localStorage.getItem("Player2 name");
player1_score = "0";
player2_score = "0";

function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;

    title = "<h3>Find The Answer</h3><br><br>";
    number = number1 + " x " + number2 + "<br>";
    input = "<input class='form-control' id='answer_input' placeholder='Enter Your Answer'><br><br>";
    button = "<button class='btn btn-danger' onclick='send_answer()'>Send</button>";
    row = title + number + input + button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").innerHTML = "";
    document.getElementById("number_2").innerHTML = "";
}