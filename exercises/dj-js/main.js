function mouseOver() {
    document.getElementById("color").style.backgroundColor = "blue";
}

function mouseDown() {
    document.getElementById("color").style.backgroundColor = "red";
}

function mouseUp() {
    document.getElementById("color").style.backgroundColor = "yellow";
}

function doubleClick() {
    document.getElementById("color").style.backgroundColor = "green";
}

function mouseScroll() {
    document.getElementById("color").style.backgroundColor = "orange";
}

document.addEventListener("keydown", function(event) {
    var colors = event.which; 
    var box = document.getElementById("color"); 
    if (colors === 66) {
        box.style.backgroundColor = "blue"; 
    } else if (colors === 71) {
        box.style.backgroundColor = "green"; 
    } else if (colors === 79) {
        box.style.backgroundColor = "orange"; 
    } else if (colors === 89) {
        box.style.backgroundColor = "yellow"; 
    } else if (colors === 82) {
        box.style.backgroundColor = "red"; 
    }
}); 