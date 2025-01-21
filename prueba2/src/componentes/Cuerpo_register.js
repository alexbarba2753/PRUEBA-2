import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="opacoregister">
        <div className="regiter">
        <Link to="/"><div className="equis">
                <i class="fa-solid fa-x"></i>
            </div></Link>
            <div className="register-container">
                <h1>Register</h1>
                <form>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter full name" required />

                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm password"
                    required
                    />

                    <button type="submit">Register</button>
                </form>
                <p>
                    Already have an account? <Link to="/login">Login Here</Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default Register;
