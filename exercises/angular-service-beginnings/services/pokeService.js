var app = angular.module("theService");

app.service("pokeService", [function () {
    this.pokeList = [];
    this.pokemon; 

    this.add = function (pokemon) {
        this.pokeList.push(pokemon); 
    }

    this.delete = function (index) { 
        this.pokeList.splice(index, 1); 
    }

}]);