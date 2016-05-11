function processForm() {
    var info = document.myTravelForm;
    alert("First name: " + info.firstName.value +
        "\nLast name: " + info.lastName.value +
        "\nAge: " + info.age.value +
        "\nGender: " + info.gender.value +
        "\nTraveling to: " + info.travelingTo.value +
        "\nDietary restrictions: " + buildDiet(info.diet)

    );
}

function buildDiet(dietArray) {
    var dietString = "";
    for (var i = 0; i < dietArray.length; i++) {
        if (dietArray[i].checked) {
            dietString += dietArray[i].value + ", ";
        }
    }
    return dietString; 
}