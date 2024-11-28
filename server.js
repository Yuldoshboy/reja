const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://sobirovyu:W24ZnJKkwylOFeAR@cluster0.4nw4s.mongodb.net/?retryWrites=true&w=majority&appName=Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParcer: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on the connection MongoDB");
    else {
      console.log("MongoDB connection has been successfull!");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running on the port: ${3000}, http://localhost:${PORT}`
        );
      });
    }
  }
);
