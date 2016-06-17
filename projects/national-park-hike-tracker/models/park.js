var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var parkSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    images: [
        {
            image: {
                type: String,
                required: true
            },
            votes: {
                type: Number,
                required: false
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = mongoose.model("Park", parkSchema); 