var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var userSchema = new Schema ({
    id: "Jim",
    user: String,
    posts: [
        {
            post : {
                type: String,
                required: true
            }
        }
    ],
    comments: [
        {
            comment: {
                type: String,
                required: false
            }
        }
    ],
    tags: [
        {
            tag: String
        }
    ]
});

module.exports = mongoose.model("User", userSchema); 