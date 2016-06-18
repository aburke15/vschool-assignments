var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var parkSchema = new Schema({
    body: String,
    length: String,
    date: String,
    votes: Number,
    location: String,
    images: [
        {
            image: String,
            date: String,
            votes: Number
        }
    ]
});

module.exports = mongoose.model("Park", parkSchema); 