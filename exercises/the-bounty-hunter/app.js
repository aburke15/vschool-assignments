var app = angular.module("bountyApp", []); 

app.controller("BountyController", ["$scope", "BountyService", function($scope, BountyService) {
    $scope.bounties = BountyService; 
    
    BountyService.getBounties().then(function (response) {});
    
    $scope.addBounty = function(bounty) {
        BountyService.addBounty(bounty).then(function(response) {
            $scope.bounty = {}; 
        });
    }
    
    $scope.deleteBounty = function(bounty, index) {
        BountyService.deleteBounty(bounty, index).then(function(response) {}); 
    }
    
    $scope.updateBounty = function(bounty, index) {
        BountyService.updateBounty(bounty, index).then(function(response) {  
        });
    }
}]); 