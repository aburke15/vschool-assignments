function getCoinsGoomba() {
    var goombaCost = document.getElementById("usr goomba").value;
    var goombaBaddie = document.getElementById("usr goombas").value;
    var goombaTotal = parseInt(goombaCost) * parseInt(goombaBaddie);
    if (isNaN(goombaTotal)) {
        document.getElementById("usr goomba1").value = "Invalid input";
    } else {
        document.getElementById("usr goomba1").value = goombaTotal + " coins";
    }
}

function getCoinsCheep() {
    var cheepCheepCost = document.getElementById("usr cheepCheep").value;
    var cheepCheepBaddie = document.getElementById("usr cheepCheeps").value;
    var cheepCheepTotal = parseInt(cheepCheepCost) * parseInt(cheepCheepBaddie);
    if (isNaN(cheepCheepTotal)) {
        document.getElementById("usr cheepCheep1").value = "Invalid input";
    } else {
        document.getElementById("usr cheepCheep1").value = cheepCheepTotal + " coins";
    }
}

function getCoinsBobOmb() {
    var bobOmbCost = document.getElementById("usr bobOmb").value;
    var bobOmbBaddie = document.getElementById("usr bobOmbs").value;
    var bobOmbTotal = parseInt(bobOmbCost) * parseInt(bobOmbBaddie);
    if (isNaN(bobOmbTotal)) {
        document.getElementById("usr bobOmb1").value = "Invalid input";
    } else {
        document.getElementById("usr bobOmb1").value = bobOmbTotal + " coins";
    }
}