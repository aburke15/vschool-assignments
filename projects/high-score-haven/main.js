var messageArray = ["Yeah! That's right!", "You got nothin' on me!", "Eat my shorts!", "You're not even good!", "I didn't even try.", "What competition?", "What's good?", "Looking for a real challenge.", "Get on my level.", "GOML!"];
var randomMessage = Math.floor(Math.random() * messageArray.length);
var trashTralk = messageArray[randomMessage];

var button = $("#button");

button.click(function() {
    var name = $("#name").val();
    var score = $("#high-score").val(); 
    var date = $("#date").val(); 
    var message = $("input[name = message]:checked").val(); 
    if (score <= 0) {
        
    }
    console.log(name); 
    console.log(score); 
    console.log(date); 
    console.log(message); 
    $("#row tr:last").after("<tr><td></td><td></td><td></td><td></td></tr>");
}); 

