//module.exports.subtract = function(a, b) {
//    return a - b; 
//}

//module.exports = function(a, b) {
//    return a - b; 
//}

function Subtraction() {
    this.subtract = function(a, b) {
        return a - b; 
    }
}

module.exports = new Subtraction(); 