// create event that tracks how many times the image is clicked

// set count variable to zero
var count = 0;

// get the value of the image being clicked
$("img").click(function () {
    count = $("#clicked").val();
    console.log(count);
});