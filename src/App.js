import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar/dist/simplebar.min.css";
import "./App.css";
import Header from "./components/Header";
import MainContents from "./components/MainContents";
import LeftColumn from "./components/LeftColumn";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid d-flex">
        <LeftColumn />
        <MainContents />
      </div>
    </div>
  );
}

export default App;
