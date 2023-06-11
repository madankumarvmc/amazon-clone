import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt="amazon logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <div className="login__items">
          <h2>Sign-In</h2>
          <form className="logInInput__form">
            <h5>E-mail or mobile phone number</h5>
            <input type="text"></input>

            <h5>Password</h5>
            <input type="password"></input>

            <button>Sign In</button>
          </form>
          <p>
            By continuing, you agree to Amazon's Clone Conditions of Use and
            Privacy Notice.
          </p>
        </div>
      </div>

      <div className="divider__break">
        <h6>New to Amazon?</h6>
      </div>

      <div className="signup__container">
        <button>Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
