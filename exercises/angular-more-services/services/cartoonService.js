var app = angular.module("cartoonCreator"); 

app.service("CartoonService", [function() {
    this.cartoonList = []; 
    
    this.addCartoon = function(cartoon) {
        this.cartoonList.push(cartoon); 
    }
}]); 