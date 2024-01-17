const express = require("express");
const server = express();
const es6Renderer = require("express-es6-template-engine")

server.get('/heartbeat', (req, res) => {
    res.json({
        "message": "heartbeat"
    });
});

server.listen(8080, () => {
    console.log("The server is running at PORT 8080");
});