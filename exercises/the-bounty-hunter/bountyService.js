var app = angular.module("bountyApp");

app.service("BountyService", ["$http", function ($http) {
    var baseUrl = "http://localhost:3000/bounty/";
    var self = this;
    this.bountyList = [];

    this.getBounties = function () {
        return $http.get(baseUrl).then(function (response) {
            self.bountyList = response.data;
        });
    }

    this.addBounty = function (bounty) {
        return $http.post(baseUrl, bounty).then(function (response) {
            self.bountyList.push(response.data);

        });
    }

    this.deleteBounty = function (bounty, index) {
        return $http.delete(baseUrl + bounty._id).then(function (response) {
            var confirmed = confirm("Are you sure you want to delete this bounty?");
            if (confirmed) {
                self.bountyList.splice(index, 1);
            }
        });
    }

    this.updateBounty = function (bounty, index) {
        return $http.put(baseUrl + bounty._id, bounty).then(function (response) {
            self.bountyList[index] = response.data;
        });
    }
}]);