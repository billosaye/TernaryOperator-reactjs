import React from "react";
import Form from "./form";

var isLoggedIn = true;

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Welcome Back</h1> : <Form />}
    </div>
  );
}

export default App;
