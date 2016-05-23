var app = angular.module("playerKills", []);

app.controller("MainController", ["$scope", function ($scope) {

    $scope.player = {
        kills: [
            {
                handle: "jk400",
                rank: 14932,
                clan: ["hpburner200", "sputnik", "sololobo21"]
        },
            {
                handle: "jimj404",
                rank: 99876,
                clan: ["jrunner24", "nickles", "theoneguy"]
        },
            {
                handle: "canofwhoop8",
                rank: 39392,
                clan: ["suhdude64", "alloduo", "nuthinew"]
        },
            {
                handle: "backstab9",
                rank: 998213,
                clan: ["primeplayer4", "n00bpWner", "getSweated"]
        },
            {
                handle: "killer7",
                rank: 1120093,
                clan: ["helloguy0", "theMask1234", "randonamo3"]
        },
            {
                handle: "toughgai",
                rank: 43525,
                clan: ["todayisaday", "sunriseSkaters", "joecango99"]
        },
            ]
    };


}]);