var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frankank", "George", "Hal", "Ingrid", "Jill", "Janet"];

function attemptCall(name, dontCall, call, sendText) {
    
    var numOfAs = name.toLowerCase().split("a").length - 1; 
    
    if (numOfAs > 1) {
        sendText(name);  
    } else if (name.length % 2 === 0) {
        call(name); 
    } else {
         dontCall(name); 
    }
}

function call(name) {
    console.log("Call " + name); 
}

function dontCall(name) {
    console.log("Dont call " + name); 
}

function sendText(name) {
    console.log("Send text to " + name); 
}

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, sendText); 
}

















//function attemptCall(namesArray, callback) {
//    for (var i = 0; i < namesArray.length; i++) {
//        callback(namesArray[i]); 
//    }
//}
//
//function sendText(name) { 
//    if (name.toUpperCase().indexOf("A") !== name.toUpperCase().lastIndexOf("A")) {
//        console.log("Sent text " + callordont); 
//    }
//}
//
//
//function call(name) {
//    if (name.length % 2 === 0) {
//        console.log("Call " + name); 
//    }
//}
//
//function dontCall(name) {
//    if (name.length % 2 !== 0) {
//        console.log("Dont call " + name); 
//    }
//}
//
//
//function sendText(name) {
//    console.log("Send text " + name); 
//}
////attemptCall(randomThings, function(thing){
////    console.log(thing); 
////}); 
//
//attemptCall(namesArray, sendText);
//attemptCall(namesArray, call);
//attemptCall(namesArray, dontCall); 
// 
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//var randomThings = ["Basketball", "Baseball", "Lamp", "Mullet"]; 
//var animals = ["Cat", "Dog", "Gecko", "Rabbit"]; 
//// create a function that talks about the items in the array 
//
////function beEnthusiastic(thing) {
////    console.log("OMG I LOVE " + thing + "s!!1!"); 
////}
////
//function beADowner(thing) {
//    console.log("I hate " + thing + "s."); 
//}
//
//function talkAboutThings(myArray, callback) {
//    for (var i = 0; i < myArray.length; i++) {
//        callback(myArray[i]); 
//    }
//}
//talkAboutThings(randomThings, function(thing){
//    console.log(thing); 
//}); 
//
//
//talkAboutThings(animals, beADowner); 

//talkAboutThings(animals, beADowner); 