const express = require("express");
const { createServer } = require("http");
const realtimeServer = require("./realtimeServer");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const httpServer = createServer(app);

//SETTINGS
app.set("port",process.env.PORT || 3000);
app.set("views",path.join(__dirname,"views"));
app.use(cookieParser());

//ROUTES
app.use(require("./routes"))

//PUBLIC
app.use(express.static(path.join(__dirname,"public")));

//SE LEVANTA EL SERVER

httpServer.listen(app.get("port"), () => {
    const port = app.get("port");
    console.log("server is running in port "+port);
});

//LLAMO AL SERVIDOR DE SOCKET.IO

realtimeServer(httpServer);