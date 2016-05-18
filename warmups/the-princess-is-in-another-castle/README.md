Warmup requirements
===================

Create an object for a player that has the following properties:

name of type String

totalCoins of type Number

status of type String (options are Big,Small,Powered Up,Dead

star of type Boolean (Is a star active?)

setName of type Function - sets name to Mario or Luigi. Has a parameter 

called namePicked where you pass in Mario or Luigi

gotHit of type Function - this is called whenever Mario is hit by an enemy. 

gotHit will set the status property

gameActive of type Boolean, true by default, becomes false when status is Dead

gotPowerup of type Function - called when a powerup is received and sets the status accordingly

addCoin of Function - adds a coin to totalCoins

print of type Function - prints to the console the name, totalCoins, status, and star 

properties. Make sure you make this look nice such as:

Name: Luigi,

Status: Small, etc, etc

Create a random range between 0 and 3:

See: Random Range

If the value is 0 call the gotHit function on the object.

If the value is 1 call the gotPowerup function on the object 

If the value is 2 call the addCoin function

Then call the print function on the object.

Perform this random operation 3 different times and call that print function 3 different times.