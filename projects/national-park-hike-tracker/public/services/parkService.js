var app = angular.module("nationalParkApp");

app.service("ParkService", ["$http", function($http) {
    var self = this;
    this.parkList = [];

    this.getParks = function() {
        return $http.get("/api/parks").then(function(response) {
            console.log(response);
            self.parkList = response.data;
        });
    }

    this.addPark = function(park) {
        return $http.post("/api/parks", park).then(function(response) {
            self.parkList.push(response.data);
        });
    }

    this.isLocation = function() {
        self.location = true;
        self.image = false;
        self.length = false;
    }

    this.isImage = function() {
        self.image = true;
        self.location = false;
        self.length = false;
    }

    this.isLength = function() {
        self.length = true;
        self.image = false;
        self.location = false;
    }

}]);
