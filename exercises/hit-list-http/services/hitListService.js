var app = angular.module("hitApp");

app.service("HitListService", ["$http", function ($http) {
    var baseUrl = "http://mean.codingcamp.us:6543/hitlist.json";
    var self = this;
    this.hitList = [];

    this.getHitList = function () {
        return $http.get(baseUrl).then(function (response) { 
            for (var i = 0; i < response.data.length; i++) {
                self.hitList.push(response.data[i]);
            }
            console.log(self.hitList); 
        });
    }
}]);