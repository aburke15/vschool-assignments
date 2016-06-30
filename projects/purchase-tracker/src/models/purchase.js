var mongoose = require("mongoose"); 
var Schema = mongoose.Schema;

var purchaseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: String,
    paid: {
        type: Boolean,
        default: false
    },
    total: {
        type: Number,
        default: 0,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Purchase", purchaseSchema); 