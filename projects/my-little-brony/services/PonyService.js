var app = angular.module("ponyApp");

app.service("PonyService", ["$http", function ($http) {
    var baseUrl = "http://mean.codingcamp.us/andreburke/pony/";
    var self = this;
    this.ponyList = [];

    this.getPony = function () {
        return $http.get(baseUrl).then(function (response) {
            self.ponyList = response.data;
        });
    }

    this.addPony = function (pony) {
        return $http.post(baseUrl, pony).then(function (response) {
            self.ponyList.push(response.data);
        });
    }

    this.deletePony = function (pony, index) {
        return $http.delete(baseUrl + pony._id).then(function (response) {
            var confirmed = confirm("Are you sure you want to delete this pony?");
            if (confirmed) {
                self.ponyList.splice(index, 1);
                alert(response.data.msg);
            }
        });
    }

    this.updatePony = function (pony, index) {
        return $http.put(baseUrl + pony._id, pony).then(function (response) {
            self.ponyList[index] = response.data; 
            self.editing = false;
        });
    }

}]);