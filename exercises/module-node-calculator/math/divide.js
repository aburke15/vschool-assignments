//module.exports.divide = function (a, b) {
//    if (b !== 0) {
//        return a / b; 
//    } else {
//        console.log("Error, cannot divide by zero!"); 
//    }
//}

//module.exports = function (a, b) {
//    if (b !== 0) {
//        return a / b; 
//    } else {
//        console.log("Error, cannot divide by zero!"); 
//    }
//}

function Divider() {
    this.divide = function (a, b) {
        if (b !== 0) {
            return a / b; 
        } else {
            console.log("Error, cannot divide by zero!"); 
        }
    }
}

module.exports = new Divider(); 