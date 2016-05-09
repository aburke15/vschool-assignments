var theDate = new Date(); 
var weekdayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
console.log("Today is: " + weekdayArray[theDate.getDay()] + "."); 
var hourArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]; 
console.log("Current time is: " + hourArray[theDate.getHours() - 1] + ":" + theDate.getMinutes("mm") + ":" + theDate.getSeconds("ss"));  