Project requirements:
=====================

Create two parties (Use Javascript function objects using the new keyword to instantiate):

Each party has a starting population of 1,000,000

Each party has a name (Penguins and Communists - or whatever you want)

Flip a coin (make a random between 1 and 2) to see which party attacks first

Create a function called sendNuke(party, onHit, onMiss) where:

the first parameter party is the Javascript object of the party that will be attacked

the second parameter onHit is a callback function that will be called if the attack is successful

the third parameter onMiss is a callback function that will be called if the attack is unsuccessful

the onHit and onMiss functions each take one parameter of type party (just forwarding the party you 

already passed into sendNuke)

Print messages in the callbacks that are appropriate - ie if the attack missed then it would print, 

'Penguins nuke missed the Communists and instead landed in the ocean'

A random algorithm will be used to determine if the attack is a miss or a hit 

(this can happen in sendNuke function

If an attack is successful initiate a random damage amount

After an attack is completed (or missed) the opposing party will initiate an attack.

This process will repeat until one of the parties reaches a 0 population