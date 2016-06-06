//module.exports.exponents = function(a, b) {
//    return Math.pow(a, b); 
//}

//module.exports = function(a, b) {
//    return Math.pow(a, b); 
//}

function Exponents() {
    this.exponential = function(a, b) {
        return Math.pow(a, b); 
    }
}


module.exports = new Exponents(); 