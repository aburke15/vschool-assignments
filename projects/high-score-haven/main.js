document.getElementById("button").addEventListener("click", empty);

function empty() {
    var name = "";
    var date = "";
    var highScore = "";
    name = document.getElementById("name").value;
    highScore = document.getElementById("high-score").value;
    score = parseInt(highScore);
    date = document.getElementById("date").value;
    if (name === "") {
        alert("Please fill in your name!");
        event.preventDefault();
        return false; 
    } else if (score <= 0) {
        alert("Please make sure your score is above zero!");
        event.preventDefault();
        return false; 
    } else if (date === "") {
        alert("Please fill in the date!");
        event.preventDefault();
        return false; 
    } else {
        submitButton(); 
    }
}

function submitButton() {

    var messageArray = ["Yeah! That's right!", "You got nothin' on me!", "Eat my shorts!", "You're not even good!", "I didn't even try.", "What competition?", "What's good?", "Looking for a real challenge.", "Get on my level.", "GOML!"];
    var randomMessage = Math.floor(Math.random() * messageArray.length);
    var trashTralk = messageArray[randomMessage];
    var name = $("#name").val();
    var score = $("#high-score").val();
    var date = $("#date").val();
    var message = $("input[name = message]:checked").val();
    console.log(name); 
    var table = document.getElementById("my-table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    if (message === "yes") {
        cell3.innerHTML = trashTralk;
    } else {
        cell3.innerHTML = " ";
    }
    cell1.innerHTML = name;
    cell2.innerHTML = date;
    cell4.innerHTML = score;
}