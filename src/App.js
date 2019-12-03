import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/about" exact component={About} />
      </Router>
    );
  }
}

export default App;
