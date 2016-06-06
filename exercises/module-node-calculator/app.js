//function mathOps(a, b, string) {
//    if (string === "add") {
//        var addition = require("./math/add");
//        return addition.add(a, b);
//    } else if (string === "subtract") {
//        var subtraction = require("./math/subtract");
//        return subtraction.subtract(a, b);
//    } else if (string === "multiply") {
//        var multiplication = require("./math/multiply");
//        return multiplication.multiply(a, b);
//    } else if (string === "divide") {
//        var division = require("./math/divide");
//        return division.divide(a, b);
//    } else if (string === "exponents") {
//        var exponential = require("./math/exponents");
//        return exponential.exponents(a, b);
//    } else {
//        console.log("Error, could not find matching operation");
//    }
//}
//
//
//console.log(mathOps(2, 2, "add"));
//console.log(mathOps(2, 2, "subtract"));
//console.log(mathOps(2, 2, "multiply"));
//console.log(mathOps(2, 2, "divide"));
//console.log(mathOps(2, 2, "exponents"));

//function opsPicker(a, b, string) {
//    if (string === "add") {
//        var addition = require("./math/add");
//        return addition(a, b); 
//    } else if (string === "subtract") {
//        var subtraction = require("./math/subtract");
//        return subtraction(a, b); 
//    } else if (string === "multiply") {
//        var multiplication = require("./math/multiply");
//        return multiplication(a, b); 
//    } else if (string === "divide") {
//        var division = require("./math/divide");
//        return division(a, b); 
//    } else if (string === "exponents") {
//        var exponential = require("./math/exponents");
//        return exponential(a, b); 
//    } else {
//        console.log("Error, could not find matching operation");
//    }
//}
//
//console.log(opsPicker(2, 2, "add"));
//console.log(opsPicker(2, 2, "subtract"));
//console.log(opsPicker(2, 2, "multiply"));
//console.log(opsPicker(2, 2, "divide"));
//console.log(opsPicker(2, 2, "exponents"));

function opsPicker(a, b, string) {
    if (string === "add") {
        var addition = require("./math/add");
        return addition.add(a, b);  
    } else if (string === "subtract") {
        var subtraction = require("./math/subtract");
        return subtraction.subtract(a, b); 
    } else if (string === "multiply") {
        var multiplication = require("./math/multiply");
        return multiplication.multiply(a, b);  
    } else if (string === "divide") {
        var division = require("./math/divide");
        return division.divide(a, b);  
    } else if (string === "exponents") {
        var exponents = require("./math/exponents");
        return exponents.exponential(a, b); 
    } else {
        console.log("Error, could not find matching operation");
    }
}

console.log(opsPicker(2, 2, "add"));
console.log(opsPicker(2, 2, "subtract"));
console.log(opsPicker(2, 2, "multiply"));
console.log(opsPicker(2, 0, "divide"));
console.log(opsPicker(2, 2, "exponents"));