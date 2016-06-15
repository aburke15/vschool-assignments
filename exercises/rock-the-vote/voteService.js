var app = angular.module("voteApp"); 

app.service("VoteService", ["$http", function($http) {
    var baseUrl = "http://localhost:3000/posts/"
    var self = this; 
    this.postList = [];
    this.commentList = [];
    this.votes = 0;
    
    this.getPosts = function() {
        return $http.get(baseUrl).then(function(repsonse) {
            self.postList = repsonse.data; 
        });
    }
    
    this.addPost = function(post) {
        return $http.post(baseUrl, post).then(function(response) {
            self.postList.push(response.data); 
        });
    }
    
    this.deletePost = function(post, index) {
        return $http.delete(post, index).then(function(response) {});
    }
    
    this.updatePost = function(post, index) {
        return $http.put(post, index).then(function(response) {});
    }
    
    this.upVote = function(vote) {
        return $http.post(baseUrl, vote).then(function(response) {
            
        });
    }
    
    this.downVote = function(vote) {
        
    }
    
    this.getComments = function() {
        
    }
    
    this.addComment = function(comment) {
        
    }
    
    this.deleteComment = function(comment, index) {
        
    }
    
    this.updateComment = function (comment, index) {
        
    }
}]);