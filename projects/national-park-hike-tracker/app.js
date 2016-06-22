var app = angular.module("nationalParkApp", ["ngRoute", "lr.upload"]); 

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
        templateUrl: "home/home.html",
        controller: "HomeController"
    })
        .when("/images", {
        templateUrl: "images/images.html",
        controller: "ImageController"
    })
        .when("/contact", {
        templateUrl: "contact/contact.html", 
        controller: "ContactController"
    })
        .otherwise({
        redirectTo: "/home"
    });
});