//module.exports.add = function (a, b) {
//    return a + b; 
//}

//module.exports= function (a, b) {
//    return a + b; 
//}

function Adder() {
    this.add = function(a, b) {
        return a + b; 
    }
}

module.exports = new Adder(); 