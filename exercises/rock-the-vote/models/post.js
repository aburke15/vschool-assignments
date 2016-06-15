var mongoose = require("mongoose"); 
var Schema = mongoose.Schema; 

var postSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true
    }, 
    comments: [
        {
            comment: {
                type: String,
                required: false
            }
        }
    ]
});

module.exports = mongoose.model("Post", postSchema); 

//var postList = [
//    {
//        title: "Bernie Wins Over Washington",
//        description: "While visitng washington last week Bernie made impressions on many",
//        votes: 0,
//        comments: [
//            {
//                comment: "Bernie, love that guy!"
//            },
//            {
//                comment: "Eh Bernie is okay, def not my first choice."
//            },
//            {
//                comment: "Yeah, well we'll see what happens later"
//            }
//        ]
//    },
//    {
//        title: "Hillary Reaches a Tie",
//        description: "Came to a tie yesterday with one competing official",
//        votes: 0,
//        comments: [
//            {
//                comment: "Man, Hillary would reach a tie!"
//            },
//            {
//                comment: "^^ For real, it's kind of ridiculous."
//            },
//            {
//                comment: "Well, better luck in the next go."
//            }
//        ]
//    },
//    {
//        title: "Ted Cruz Devastating Loss",
//        description: "This is some major heat going on after this debate",
//        votes: 0,
//        comments: [
//            {
//                comment: "Such a sad loss for my dude"
//            },
//            {
//                comment: "Well, I hope he doesn't lose the next state."
//            },
//            {
//                comment: "Yeah, we'll definitely get 'em next time."
//            }
//        ]
//    }
//]
//
//module.exports = posts; 