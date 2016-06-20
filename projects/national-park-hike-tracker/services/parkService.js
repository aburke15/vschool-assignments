var app = angular.module("nationalParkApp");

app.service("ParkService", ["$http", function($http) {
    var self = this;
    var baseUrl = "http://localhost:5000/parks/";
    this.parkList = []; 
    
    this.getParks = function() {
        return $http.get(baseUrl).then(function(response) {
            console.log(response); 
            self.parkList = response.data;
        });
    }
    
}]);