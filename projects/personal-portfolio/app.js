var app = angular.module("portfolioApp", ["ngRoute", "ui.bootstrap"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController"
        })
        .when("/projects", {
            templateUrl: "projects/projects.html",
            controller: "ProjectsController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});