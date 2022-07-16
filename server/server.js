require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
// const http = require("http").Server(app);
// const io = require("socket.io")(http);
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

//SOCKET.IO STUFF?????
const botName = "EventListenerBot";

//run when user login
// // Run when client connects
// io.on("connection", (socket) => {
//   socket.on("check-user", () => {
//     console.log("check user:");
//     socket.emit("set-user", session.Store);
//   });
//   socket.on("message", (payload) => {
//     socket.broadcast.emit("message", payload);
//     console.log("server received message", payload);
//   });
//   socket.on("joinRoom", ({ username, room }) => {
//     const user = userJoin(socket.id, username, room);

//     socket.join(user.room);

//     // Welcome current user
//     socket.emit("message", formatMessage(botName, "Welcome to fAIM!"));

//     // Broadcast when a user connects
//     socket.broadcast
//       .to(user.room)
//       .emit(
//         "message",
//         formatMessage(botName, `${user.username} has joined the chat`)
//       );

//     // Send users and room info
//     io.to(user.room).emit("roomUsers", {
//       room: user.room,
//       users: getRoomUsers(user.room),
//     });
//   });

//   // Listen for chatMessage
//   socket.on("chatMessage", (msg) => {
//     const user = getCurrentUser(socket.id);

//     io.to(user.room).emit("message", formatMessage(user.username, msg));
//   });

//   // Runs when client disconnects
//   socket.on("disconnect", () => {
//     const user = userLeave(socket.id);

//     if (user) {
//       io.to(user.room).emit(
//         "message",
//         formatMessage(botName, `${user.username} has left the chat`)
//       );

//       // Send users and room info
//       io.to(user.room).emit("roomUsers", {
//         room: user.room,
//         users: getRoomUsers(user.room),
//       });
//     }
//   });
// });

//CREATING INSTANCE OF APOLLO SERVER WITH GRAPHQL SCHEMA
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Now running on ${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

//CALLING ASYNC FUNCTION
startApolloServer(typeDefs, resolvers);
