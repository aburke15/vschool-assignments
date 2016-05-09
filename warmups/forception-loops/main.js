var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var peopleArray = [];


for (var i = 0; i < people.length; i++) {
    peopleArray.push(people[i] + ":");
    for (var j = 0; j < alphabet.length; j++) {
        peopleArray.push(alphabet[j].toUpperCase());
    }
}
console.log(peopleArray);

function Person () {
    this.name = "Sarah";
}