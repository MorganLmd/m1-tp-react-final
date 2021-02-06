import React from "react";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";
import "./App.css";
import Header from "./components/Header";
import Converter from "./components/Converter";

const App = () => (
  <div className="App">
    <Header logo={logo} />
    <main>
      <Converter />
    </main>
  </div>
);

export default App;
