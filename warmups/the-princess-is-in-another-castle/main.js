var ask = require("readline-sync");

function Player() {
    var newPlayer = ask.question("What player do you want to play as?  "); 
    this.name = newPlayer;
    this.totalCoins = 0;
    this.status = "Small";
    this.star = false;
    this.gameActive = true;
    this.setName = function (namePicked) {
        this.name = namePicked;
    }
    this.gotHit = function () {
        if (this.star === true) {
            if (this.status === "Powered Up") {
                this.status = "Big";
            } else if (this.status === "Big") {
                this.status = "Small";
            } else {
                this.status = "Dead";
                this.gameActive = false;
            }
        }
    }
    this.gotPowerup = function () {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else if (this.status === "Powered Up") {
            this.star = true;
        }
    }
    this.gotStar = function() {
        this.star = true;
    }
    this.addCoins = function() {
        this.totalCoins++;
    }
    this.print = function() {
        console.log();
        console.log("Name: " + this.name);
        console.log("Cons: " + this.totalCoins);
        console.log("Status: " + this.status);
        console.log("Star Active: " + this.star);
        console.log("Game Active: " + this.gameActive);
        console.log();
    }
}


function game(player) {
    var randomRange = Math.floor(Math.random() * 4) + 0;
    if (randomRange === 0) {
        player.gotHit();
    } else if (randomRange === 1) {
        player.gotPowerup();

    } else if (randomRange === 3) {
        player.addCoins();
    } else {
        player.gotStar();
    }
    player.print();
}

function playGame(n) {
    var player = new Player();
    for (var i = 0; i < n; i++) {
        game(player);
    }
}

playGame(3);