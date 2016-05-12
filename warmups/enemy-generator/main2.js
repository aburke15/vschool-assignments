// generate 100 or any number of enemies

function generateEnemy(number) {
    // make an array to hold the enemy objects
    var enemyArray = []; 
    // use a for loop to iterate through each enemy object
    for (var i = 0; i < number; i++) {
        // create a new enemy object 
        var enemy = new Enemy(); 
        // push each enemy obj into the array
        enemyArray.push(enemy); 
    }
    // return the enemy array 
    return enemyArray; 
}

// create the "class" for the enemies
function Enemy() {
    this.type = createType(); 
    this.hitPoints = getHitPoints(this.type); 
    // we know the defense is three times the hitpoints 
    this.defense = this.hitPoints * 3; 
}

// now time to create the enemy type 
function createType() {
    // create an array for our enemies
    var enemyArray = ["Ancient Dragon", "Prowler", "Mighty Grunt"]; 
    // genrate a random index based on the length of the array
    var randomType = Math.floor(Math.random() * enemyArray.length);
    // return the the random enemy by index
    return enemyArray[randomType]; 
}

// create function to generate hitpoints for the enenmies pass the type first
function getHitPoints(type) {
    if (type === "Ancient Dragon") {
        return randomHitPoints(80, 100); 
    } else if (type === "Prowler") {
        return randomHitPoints(50, 79); 
    } else {
        return randomHitPoints(20, 49); 
    }
}
// create a random number generator that takes two parameters 
function randomHitPoints(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateEnemy(100)); 