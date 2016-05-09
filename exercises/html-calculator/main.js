function add() {
    var add1 = document.getElementById("add1").value;
    var add2 = document.getElementById("add2").value;
    var sum = parseInt(add1) + parseInt(add2);
    var nodeSum = document.createElement("p");
    var stringSum = sum.toString();
    nodeSum.innerHTML = stringSum;
    document.body.appendChild(nodeSum);
}

function subtract() {
    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;
    var difference = parseInt(sub1) - parseInt(sub2);
    var nodeSub = document.createElement("p");
    var stringSub = difference.toString();
    nodeSub.innerHTML = stringSub;
    document.body.appendChild(nodeSub);
}

function multiply() {
    var mult1 = document.getElementById("mult1").value;
    var mult2 = document.getElementById("mult2").value;
    var product = parseInt(mult1) * parseInt(mult2);
    var nodeMult = document.createElement("p");
    var stringMult = product.toString();
    nodeMult.innerHTML = stringMult;
    document.body.appendChild(nodeMult);
}

function divide() {
    var mult1 = document.getElementById("div1").value;
    var mult2 = document.getElementById("div2").value;
    if (parseInt(mult2) === 0) {
        var nodeDiv = document.createElement("p");
        var stringDiv = quotient.toString();
        nodeDiv.innerHTML = stringDiv;
        document.body.appendChild(nodeDiv);
    }
    var quotient = parseInt(mult1) / parseInt(mult2);
    var nodeDiv = document.createElement("p");
    var stringDiv = quotient.toString();
    nodeDiv.innerHTML = stringDiv;
    document.body.appendChild(nodeDiv);
}