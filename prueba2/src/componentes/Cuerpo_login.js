import React from "react";
import { Link } from "react-router-dom";

const Cuerpo_login = () => {
  return (
    <div className="opacologin">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Enter email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" required />

          <Link to="/" className="submit-button">
            Submit
          </Link>
        </form>
        <p>
          New user <Link to="/register ">Register Here</Link>
        </p>
      </div>
    </div>  
  );
};
 
export default Cuerpo_login;
