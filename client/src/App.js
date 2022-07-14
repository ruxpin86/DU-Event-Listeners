import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Forum from "./pages/Forum";
import LiveChat from "./pages/LiveChat";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
import "./style/index.css";

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start">
        {/* <Header /> */}
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
    // </ApolloProvider>
  );
}

export default App;
