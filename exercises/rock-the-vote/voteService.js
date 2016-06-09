var app = angular.module("voteApp"); 

app.service("VoteService", ["$http", function($http) {
    var baseUrl = "http://localhost:3000/post/"
    var self = this; 
    this.postList = []; 
    
    this.getPosts = function() {
        return $http.get(baseUrl).then(function(repsonse) {
            self.postList = repsonse.data; 
        });
    }
    
}]);