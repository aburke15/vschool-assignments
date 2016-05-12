var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frankank", "George", "Hal", "Ingrid", "Jill", "Janet"];

// create attempted call function with all of the other parameters 

function attemptedCall(name, call, dontCall, sendText) {
    // we need to check to see if a string has more than one "a"
    var numOfAs = name.toLowerCase().split("a").length - 1; 
    // now we need to start are checks so the right function is called
    if (numOfAs > 1) {
        // basically says if there is more than one "a" do this
        sendText(name); 
    } else if (name.length % 2 === 0) {
        // this will check to see if the length of the string can be divided evenly do this
        call(name); 
    } else {
        // this checks all other cases so all the odd names will be sectioned here 
        dontCall(name); 
    }
}

// now to create the functions that will display the message 

function call(name) {
    console.log("Call " + name); 
}

function dontCall(name) {
    console.log("Don't call " + name)
}

function sendText(name) {
    console.log("Send text to " + name);
}

// create the for loop 
for (var i = 0; i < names.length; i++) {
    attemptedCall(names[i], call, dontCall, sendText); 
}