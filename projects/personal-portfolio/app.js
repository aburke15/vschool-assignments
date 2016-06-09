var app = angular.module("portfolioApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            contoller: "HomeController"
        })
        .when("/projects", {
            templateUrl: "projects/projects.html",
            contoller: "ProjectsController"
        })
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});