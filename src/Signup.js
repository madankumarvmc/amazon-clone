import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const signIn = (e) => {
  //     e.preventDefault();

  //     auth
  //       .signInWithEmailAndPassword(email, password)
  //       .then((auth) => {
  //         // history.push("/");
  //         navigate("/");
  //       })
  //       .catch((error) => alert(error.message));
  //   };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
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
          <h2>Sign-Up</h2>
          <form className="logInInput__form">
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button onClick={register}>SignUp</button>
          </form>
          <p>
            By continuing, you agree to Amazon's Clone Conditions of Use and
            Privacy Notice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
