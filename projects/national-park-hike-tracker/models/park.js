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
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model("Park", parkSchema); 