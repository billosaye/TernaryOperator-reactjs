import React from "react";
import Input from "./input";

function Form() {
  return (
    <div>
      <h1>Please SignIn</h1>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form;
