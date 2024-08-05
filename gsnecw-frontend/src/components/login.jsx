import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

function Login() {
    return (
        <div className="login-container">
            <div className="header">
                <div className="text">Log in</div>
            </div>
            <form className="login-form">
                <div className="input-group">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder="Email" className="input-field" />
                </div>
                <div className="input-group">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Password" className="input-field" />
                </div>
                <button type="submit" className="submit-button">Log in</button>
            </form>
            <p className="signup-link">
                Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
}

export default Login;
