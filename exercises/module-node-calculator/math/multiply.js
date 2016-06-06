//module.exports.multiply = function (a, b) {
//    return a * b; 
//}

//module.exports = function (a, b) {
//    return a * b; 
//}

function Multiplier() {
    this.multiply = function(a, b) {
        return a * b; 
    }
}


module.exports = new Multiplier(); 