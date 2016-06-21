var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var parkSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    length: String,
    date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    location: String,
    comments: [
        {
            comment: String,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    images: [
        {
            image: String,
            date: {
                type: Date,
                default: Date.now
            },
            likes: {
                type: Number,
                default: 0
            }
        }
    ]
});

module.exports = mongoose.model("Park", parkSchema);