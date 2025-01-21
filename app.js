const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
  console.log(`User connected: ${socket.id}`);
  socket.on("send-location", function (data) {
    console.log(
      `Location received from ${socket.id}: ${data.latitude}, ${data.longitude}`
    );
    io.emit("receive-location", { id: socket.id, ...data });
  });

  socket.on("disconnect", function () {
    console.log(`User disconnected: ${socket.id}`);
    io.emit("user-disconnected", socket.id);
  });
});

app.get("/", function (req, res) {
  res.render("index");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error("Port 3000 is already in use. Please use a different port.");
    process.exit(1);
  } else {
    throw err;
  }
});
