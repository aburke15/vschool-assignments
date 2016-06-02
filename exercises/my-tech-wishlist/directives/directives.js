var app = angular.module("techApp"); 

app.directive("techList", function () {
    return {
        restrict: "E",
        scope: {
            "technology" : "="
        },
        templateUrl: "/directives/directive.html"
    };
});