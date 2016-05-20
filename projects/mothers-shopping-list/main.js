var add = document.getElementById("add-grocery");
add.addEventListener("click", addButton);
// create a function to add event to the add button 
function addButton() {
    // get the value from the input field 
    var getID = document.getElementById("grocery-input");
    var groceries = getID.value;
    // pass value to the appendValue function 
    appendValue(groceries);
}

var postList = $("#list");
// append the value of the input field into the list
function appendValue(grocery) {
    var newElement = $('<li id="grocery-list"><span id="remove" class="glyphicon glyphicon-remove"></span> ' + grocery + '</li>');
    postList.append(newElement);
    // call the reset button to clear the input field
    reset(); 
}

// function removes the parent element of the element set for click
$("#list").on("click", "#remove", function (event) {
    event.preventDefault();
    $(this).parent().remove();
});
 
function reset() {
    document.getElementById("grocery-input").value = ""; 
}
