import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";
import NavBar from "./components/Navbar/NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default App;
