var shopper = {
    name: "Sally",
    age: 26, 
    isShopper: true,
    groceryCart: ["Eggs", " Milk", " Orange Juice", " Laundry Soap."],
    shopping: function() {
        if (shopper.isShopper == true) {
            return shopper.name + " is a shopper.";  
        } else {
            return shopper.name + " isn't a shopper."; 
        }
    } 
}

console.log(shopper.shopping()); 
console.log(shopper.name + " needs to purchase, " + shopper.groceryCart); 
console.log(shopper.name + " is also " + shopper.age + " years old."); 