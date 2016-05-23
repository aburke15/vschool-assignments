Exercise requirements
=====================

Create an object called player. Player should have an array property called 

kills which stores an array of objects of other players they have killed.

The data structure should be similar to this:

var player = {  
    kills: [
        {
            handle: "jk400",
            rank: 14932,
            clan: ["hpburner200", "sputnik", "sololobo21"]
        }
    ]
}

Use ng-repeat to show the handle and rank of each player killed.

Then have an inner ng-repeat that shows each clan member of the killed player.

You can hardcode in the data in your .js file.