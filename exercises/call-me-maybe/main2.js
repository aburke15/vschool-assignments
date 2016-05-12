var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frankank", "George", "Hal", "Ingrid", "Jill", "Janet"];

function attemptCall(name, call, dontCall, sendText) {
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
    attemptCall(names[i], call, dontCall, sendText); 
}
