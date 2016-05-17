//Given 3 int values, a b c, return their sum. However, 
//if any of the values is a teen -- in the range 13 to 19 inclusive -- 
//then that value counts as 0, except 15 and 16 do not...

function add(a, b, c) {
    var num1 = a.toString(); 
    var num2 = b.toString();
    var num3 = c.toString();
    var new1 = num1.replace(/13|14|17|19/g, 0); 
    var new2 = num2.replace(/13|14|17|19/g, 0);
    var new3 = num3.replace(/13|14|17|19/g, 0);
    var n1 = parseInt(new1); 
    var n2 = parseInt(new2); 
    var n3 = parseInt(new3); 
    return n1 + n2 + n3; 
}

console.log(add(1, 2, 3)); 
console.log(add(2, 13, 1)); 
console.log(add(2, 1, 14)); 
console.log(add(2, 15, 14)); 