// function below adds two numbers together
var number1 = 2;
var number2 = 8;

function addSum(num1, num2) {
    var sum = num1 + num2;
    return console.log(sum);
}
console.log("The sum is below.");
addSum(number1, number2);

console.log();

// function below selects larger number of three
var integer = 3;
var integer2 = 6;
var integer3 = 20;

function largest(int1, int2, int3) {
    var large = Math.max(int1, int2, int3);
    console.log(large);
}
console.log("The larger number is below.");
largest(integer, integer2, integer3);

console.log();

// function below will tell you if number is odd or even 
var oddNumber = 3;
var evenNumber = 66;

function evenOrOdd(aNumber) {
    var i = 0;
    if (aNumber % 2 === 0) {
        return console.log("Even");
    } else {
        return console.log("Odd");
    }
}

evenOrOdd(evenNumber);

console.log();

// function below will tell you if a string is less than 20 characters 

var inputString = "This is a string. ";
var lengthOfString = inputString.length;
var halfString = Math.floor(lengthOfString / 2);

function checkString() {
    if (lengthOfString <= 20) {
        var doubleString = inputString + inputString;
        return console.log(doubleString);
    } else {
        return console.log(inputString.slice(0, halfString));
    }
}

checkString();

// to do later

//Fibonacci Sequence
console.info("fibonacci function")
var sequence = [0, 1];

function fib(n) {
    if (n <= 1) {
        sequence.pop(1);
    } else {
        for (i = 2; i < n; i++) {
            var x = sequence[sequence.length - 1],
                y = sequence[sequence.length - 2];
            sequence.push(x + y);
        }
    }
    console.log(sequence)
    var total = 0;
    for (i = 0; i < n; i++) {
        total += sequence[i];
    }
    console.log(total)
}
fib(9);


//Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
//

//var i; 
//var fib = []; 
//fib[0] = 0; 
//fib[1] = 1; 
//var fibonacciNum = 4;
//function printFibonacci(n1) {
//    for (i = 0; i < 10; i++) { 
//        fib[n1] = fib[n1 - 2] + fib[n1 - 1];
//        console.log(fib[n1]); 
//    }
//}
//
//printFibonacci(fibonacciNum); 





//var i;
//var fib = []; // Initialize array!
//
//fib[0] = 0;
//fib[1] = 1;
//for(i=2; i<=10; i++)
//{
//    // Next fibonacci number = previous + one before previous
//    // Translated to JavaScript:
//    fib[i] = fib[i-2] + fib[i-1];
//    alert(fib[i]);
//}
//Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)
//
//Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.