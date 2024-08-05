import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import email_icon from '../assets/email.png'
import user_icon from '../assets/person.png'
import password_icon from '../assets/password.png'

function signup() {
    return (
        <div className="signup-container">
        <div className="header">
            <div className="text">Sign Up</div>
        </div>
        <form className="signup-form">
            <div className="input-group">
                <img src={user_icon} alt="User Icon" />
                <input type="text" placeholder="Name" className="input-field" />
            </div>
            <div className="input-group">
                <img src={email_icon} alt="Email Icon" />
                <input type="email" placeholder="Email" className="input-field" />
            </div>
            <div className="input-group">
                <img src={password_icon} alt="Password Icon" />
                <input type="password" placeholder="Password" className="input-field" />
            </div>
            <button type="submit" className="submit-button">CREATE ACCOUNT</button>
        </form>
        <p className="login-link">
            Already have an account? <Link to="/login">log in instead</Link>
        </p>
    </div>
);
}
export default signup;
