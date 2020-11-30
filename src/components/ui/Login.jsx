import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import TextInput from "../common/TextInput";

function Login() {
  const handleFormSubmit = () => {
    console.log("Submit form");
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
        <TextInput
          id="email"
          type="email"
          label="Email Address"
          isRequired={true}
          className="mb-10"
        />
        <Checkbox id="remember" text="Remember this device" className="mb-50" />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}

export default Login;
