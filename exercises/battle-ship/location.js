function Location() {
    this.ship;
    this.hit;
    this.display = "";
}

function numberGenerator() {
    var randomShip = Math.floor(Math.random() * 5) + 1;
    shipGenerator(randomShip);
}

function shipGenerator(num) {
    if (num === 1) {
        this.ship = true;
    } else {
        this.ship = false;
    }
    console.log(ship);
}

numberGenerator();