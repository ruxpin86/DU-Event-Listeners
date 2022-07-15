import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./pages/Main";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Forum from "./pages/Forum";
import LiveChat from "./pages/LiveChat";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start">
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/main" element={<Main />} />
              <Route exact path="/events" element={<Events />} />
              <Route exact path="/resources" element={<Resources />} />
              <Route exact path="/forum" element={<Forum />} />
              <Route exact path="/live-chat" element={<LiveChat />} />
            </Routes>
          </div>
        </div>
      </Router>
      //{" "}
    </ApolloProvider>
  );
}

export default App;
