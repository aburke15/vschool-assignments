var clicked = 0;
var value = localStorage.getItem("clicked");

if (value) {
    clicked = parseInt(value);
}

$("img").click(function () {
    clicked += 1;
    var picClicked = $("#clicked");
    picClicked = clicked;
    var timesClicked = document.getElementById("times-clicked");
    timesClicked.value = clicked;
    localStorage.setItem("clicked", clicked);

});

$("button").click(function () {
    clicked = 0;
    var timesClicked = document.getElementById("times-clicked");
    timesClicked.value = clicked;
    localStorage.setItem("clicked", clicked);
});

document.getElementById("times-clicked").value = localStorage.getItem("clicked");