var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var bountySchema = new Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyAmount: Number,
    type: String
});

module.exports = mongoose.model("Bounty", bountySchema);


//var bounties = [
//    {
//        "firsName": "Mace",
//        "lastName": "Windo",
//        "living": "true",
//        "bountyAmount": "100000000000",
//        "type": "Jedi",
//        "id": "72e0fdf0-2cd6-11e6-b03b-0901217bb519"
//    },
//    {
//        "firsName": "Darth",
//        "lastName": "Vader",
//        "living": "true",
//        "bountyAmount": "100000000000",
//        "type": "Sith",
//        "id": "72e0fdf0-2csda-11e6-b03b-0901217bb519"
//    },
//    {
//        "firsName": "Darth",
//        "lastName": "Bane",
//        "living": "true",
//        "bountyAmount": "50100000000000",
//        "type": "Sith",
//        "id": "72e0fdf0-2cgg-11e6-b03b-0901217bb519"
//    },
//
//];

//module.exports = bounties;