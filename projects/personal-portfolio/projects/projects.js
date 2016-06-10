var app = angular.module("portfolioApp");

app.controller("ProjectsController", ["$scope", function ($scope) {
    $scope.myInterval = 6000;
    $scope.slides = [
        {
            image: 'http://lorempixel.com/400/200/'
        },
        {
            image: 'http://lorempixel.com/400/200/food'
        },
        {
            image: 'http://lorempixel.com/400/200/sports'
        },
        {
            image: 'http://lorempixel.com/400/200/people'
        }
  ];
    
}]);