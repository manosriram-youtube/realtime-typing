const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const socketio = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = socketio(server).listen(server);
app.set("view engine", "ejs");

io.on("connection", socket => {
    console.log("Client Connected!");
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

server.listen(port, () => console.log("Server at 5000"));
