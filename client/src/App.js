import React from "react";

import "./App.css";
import FormikUserForm from "./components/form/form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://loading.io/spinners/bluecat/lg.blue-longcat-spinner.gif"
          className="App-logo"
          alt="logo"
        />
        <FormikUserForm />
      </header>
    </div>
  );
}

export default App;
