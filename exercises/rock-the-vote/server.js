var express = require("express");
var app = express();
var uuid = require("uuid");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var port = process.env.PORT || 3000;
var cors = require("cors"); 

app.use(bodyParser.json());
app.use(cors()); 

var postList = [
    {
        title: "Bernie Wins Over Washington",
        description: "While visitng washington last week Bernie made impressions on many",
        votes: 0,
        comments: [
            {
                comment: "Bernie, love that guy!"
            },
            {
                comment: "Eh Bernie is okay, def not my first choice."
            },
            {
                comment: "Yeah, well we'll see what happens later"
            }
        ]
    },
    {
        title: "Hillary Reaches a Tie",
        description: "Came to a tie yesterday with one competing official",
        votes: 0,
        comments: [
            {
                comment: "Man, Hillary would reach a tie!"
            },
            {
                comment: "^^ For real, it's kind of ridiculous."
            },
            {
                comment: "Well, better luck in the next go."
            }
        ]
    },
    {
        title: "Ted Cruz Devastating Loss",
        description: "This is some major heat going on after this debate",
        votes: 0,
        comments: [
            {
                comment: "Such a sad loss for my dude"
            },
            {
                comment: "Well, I hope he doesn't lose the next state."
            },
            {
                comment: "Yeah, we'll definitely get 'em next time."
            }
        ]
    }
]

app.get("/post", function (req, res) {
    res.send(postList);
});

app.post("/post", function (req, res) {
    req.body.id = uuid.v1();
    postList.push(req.body);
    res.send(req.body);
});

app.delete("/post/:postsId", function (req, res) {
    for (var i = 0; i < postList.length; i++) {
        if (postList[i].id === req.params.postsId) {
            postList.splice(i, 1);
            return res.send("Topic Deleted");
        }
    }
    res.send("No matching ID found.");
});

app.put("/post/:postsId", function (req, res) {
    for (var i = 0; i < postList.length; i++) {
        if (postList[i].id === req.params.postsId) {
            postList[i] = req.body;
            return res.send(postList[i]);
        }
    }
    res.send("No matching ID found.");
});

app.listen(port, function () {
    console.log("Server is active on port " + port);
});