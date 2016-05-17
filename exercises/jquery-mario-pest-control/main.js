function getCoins(selector) {
    var cost = document.getElementById(selector).value;
    var numBaddies = document.getElementById(selector + "s").value;
    var totalPrice = parseInt(cost) * parseInt(numBaddies);
    if (isNaN(totalPrice)) {
        document.getElementById(selector + "1").value = "Invalid input";
    } else {
        document.getElementById(selector + "1").value = totalPrice + " coins";
    }
}
