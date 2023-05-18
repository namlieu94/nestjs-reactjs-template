import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import SessionsPage from "./pages/SessionsPage";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<SessionsPage />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
