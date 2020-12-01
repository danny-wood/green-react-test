import React, { useState } from "react";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import Label from "../common/Label";
import { useInput } from "./../../hooks/useInput";

function Login() {
  // First example shows binding a text box using a custom hook
  const { value: email, bind: bindEmail } = useInput("");
  // Second example shows binding the checkbox using local state
  const [rememberDevice, setRememberDevice] = useState(false);

  // function for submitting the form, here we would convert this to an async function and add a loading state
  // when posting data to an api, we could also catch any errors in a try catch and feedback to the user.
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Post data to api", { email, rememberDevice });
  };

  return (
    <div className="login-container">
      <img
        src="https://green.cdn.energy/branding/logo-r.svg"
        className="logo mb-40"
        alt="green"
      />
      <h1 className="mb-5">Operations studio</h1>
      <p>Please enter your email below</p>
      <form onSubmit={handleFormSubmit} className="mt-40">
        <Label text="Email Address" htmlFor="email" />
        <TextInput
          id="email"
          type="email"
          isRequired={true}
          className="mb-10"
          {...bindEmail}
        />
        <Checkbox
          id="remember"
          text="Remember this device"
          checked={rememberDevice}
          onChange={(e) => setRememberDevice(e.target.checked)}
          className="mb-50"
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}

export default Login;
