// generate the class
function EnemyGenerator(type, hitPoints, defense) {
    this.type = createType(); 
    this.hitPoints = getHitPoints(this.type); 
    this.defense = this.hitPoints * 3; 
}


// generate how ever many enemies in this case 100 

function generateEnemies(number) {
    var enemyArray = []; 
    for (var i = 0; i < number; i++) {
        var enemy = new EnemyGenerator(); 
        enemyArray.push(enemy); 
    }
    return enemyArray; 
}

// create the randomly choosen type 
function createType() {
    var enemyArray = ["Ancient Dragon", "Prowler", "Mighty Grunt"]; 
    var selectRandom = Math.floor(Math.random() * enemyArray.length); 
    return enemyArray[selectRandom];  
}

function getHitPoints(type) {
    if (type === "Ancient Dragon") {
        return randomHitPoints(80, 100); 
    } else if (type === "Prowler") {
        return randomHitPoints(50, 70); 
    } else {
        return randomHitPoints(20, 49); 
    }
}

function randomHitPoints(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateEnemies(100)); 