import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormikUserForm from "./components/form/form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormikUserForm />
      </header>
    </div>
  );
}

export default App;
