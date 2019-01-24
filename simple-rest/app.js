var express = require("express");

var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.post("/url", (req, res, next) => {
    res.json({result: "ok"});
    console.log("/url wurde aufgerufen!");
   });