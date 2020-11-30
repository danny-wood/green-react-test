function Login() {
  const handleFormSubmit = () => {
    console.log("Submit form");
  };

  return (
    <div className="login-container">
      <img
        src="https://green.cdn.energy/branding/logo-r.svg"
        className="logo mb-40"
      />
      <h1 className="mb-5">Operations studio</h1>
      <p>Please enter your email below</p>
      <form onSubmit={handleFormSubmit} className="mt-40">
        <label htmlFor="email" className="mb-10">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="mb-10 form-control"
          required
        />
        <div className="mb-50 remember-me">
          <input id="remember" type="checkbox" className="custom-checkbox" />
          <label htmlFor="remember">Remember this device</label>
        </div>
        <button type="submit" className="primary-button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
