var app = angular.module("nationalParkApp");

app.service("ParkService", ["$http", function ($http) {
    var self = this;
    this.parkList = [];
    this.onePark = {};
    this.like = 0; 

    this.getParks = function () {
        return $http.get("/api/parks/").then(function (response) {
            self.parkList = response.data;
        });
    }

    this.addPark = function (park) {
        return $http.post("/api/parks/", park).then(function (response) {
            self.parkList.push(response.data);
        });
    }

    this.deletePark = function (park, index) {
        return $http.delete("/api/parks/" + park._id).then(function (response) {
            var confirmed = confirm("Are you sure you want to delete?");
            if (confirmed) {
                self.parkList.splice(index, 1);
                alert("Successfully deleted!"); 
            }
        });
    }
    
    this.getOne = function(id) {
        return $http.get("/api/parks/" + id).then(function(response) {
            self.onePark = response.data; 
        });
    }
    
//    this.like = function() {
//        return $http.get("")
//        var likes = 0: 
//        likes++;
//        
//    }

}]);