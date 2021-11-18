import React from "react";
import "./signupStyles.css";

export const Signup = () => {
  return (
    <section className="main-div">
      <div class="login-container">
        <form action="">
          <div class="title">Signup</div>
          <div class="input-box">
            <input type="text" placeholder="Enter name" />
            <div class="underline"></div>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Enter email" />
            <div class="underline"></div>
          </div>

          <div class="input-box">
            <input type="password" name="" id="" placeholder="Enter Password" />
            <div class="underline"></div>
          </div>

          <div class="input-box button">
            <input type="submit" value="Create Account" />
          </div>
        </form>
      </div>
    </section>
  );
};
