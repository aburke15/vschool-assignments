var messageArray = ["Yeah! That's right!", "You got nothin' on me!", "Eat my shorts!", "You're not even good!", "I didn't even try.", "What competition?"];
var randomMessage = Math.floor(Math.random() * messageArray.length);
var trashTralk = messageArray[randomMessage];

var numInput = document.querySelector("input");

numInput.addEventListener("input", function() {
    var num = this.value.match(/^\d+$/);
    if (num === null) {
        this.value = "";
    }
}, false);

button.click(function() {
    var name = $("#name").val();
    console.log(name);
    $("#row tr:last").after("<tr><td>#name</td> <td>text</td> <td>text</td> <td>text</td></tr>");
});