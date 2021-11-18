import React from "react";
import { Link } from "react-router-dom";
import "./loginStyles.css";

export const Login = () => {
  return (
    <section className="main-div">
      <div class="login-container">
        <form action="">
          <div class="title">Login</div>
          <div class="input-box">
            <input type="text" placeholder="Enter email" />
            <div class="underline"></div>
          </div>

          <div class="input-box">
            <input type="password" name="" id="" placeholder="Enter Password" />
            <div class="underline"></div>
          </div>

          <div class="input-box button">
            <input type="submit" value="Log in" />
          </div>
        </form>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <span style={{ marginRight: "6px" }}>don't have an account</span>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </section>
  );
};
