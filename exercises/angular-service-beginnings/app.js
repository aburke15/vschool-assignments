var app = angular.module("theService", []);

app.controller("MainController", ["$scope", "pokeService", function ($scope, pokeService) {
    $scope.pokemon;
    $scope.pokeList = [];
    $scope.add = function (pokemon) {
        pokeService.add(pokemon.toLowerCase());
        $scope.pokeList = pokeService.pokeList;
        $scope.pokemon = "";
    }

    $scope.delete = function (pokemon) {
        if (pokemon === "") {
            $scope.delete.preventDefault();
        } else {
            var indexer = $scope.pokeList.indexOf(pokemon);
            pokeService.delete(indexer);
            $scope.pokeList = pokeService.pokeList;
            $scope.pokemon = "";
        }
    }
}]);