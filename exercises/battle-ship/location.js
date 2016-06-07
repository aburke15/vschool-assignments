function Location(ship) {
    this.ship = ship;
    this.hit = false; 
    this.display = "";
}

function numberGenerator() {
    var randomShip = Math.floor(Math.random() * 5) + 1;
    shipGenerator(randomShip); 
}

function shipGenerator(num) {
    var ship; 
    if (num === 1) {
        ship = true;
    } else {
        ship = false;
    }
    Location(ship); 
    console.log(ship); 
}

numberGenerator();
