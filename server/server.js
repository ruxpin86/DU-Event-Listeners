// require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
//Socket.io import
const socketio = require("socket.io");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//CREATING INSTANCE OF APOLLO SERVER WITH GRAPHQL SCHEMA
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    const http = app.listen(PORT, () => {
      console.log(`Now running on ${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });

    //ADDED THIS FOR SOCKET.IO!!!!
    const io = socketio(http);
    io.on("connection", (socket) => {
      socket.on("msg", (msg) => {
        console.log(msg);
        socket.broadcast.emit("msg", msg);
      });
      console.log("connected to socket w/ uuid:", socket.id);
      // io.emit("msg", "Welcome to the LiveChat!");
    });
  });
};

//CALLING ASYNC FUNCTION
startApolloServer(typeDefs, resolvers);
