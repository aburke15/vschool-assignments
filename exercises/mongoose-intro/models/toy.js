var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var toySchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true,
        enum: [5, 6, 7]
    },
    ageRange: [Number],
    accessories: [String]
});

module.exports = mongoose.model("Toy", toySchema)