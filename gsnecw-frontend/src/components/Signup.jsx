import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import email_icon from '../assets/email.png';
import user_icon from '../assets/person.png';
import password_icon from '../assets/password.png';
import ErrorPanel from './ErrorPanel';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormessage, setErrormessage] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrormessage(null);

        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/signup",
            data: {
                username: username,
                email: email,
                password: password,
            },
        })
        .then((res) => {
            setErrormessage(null);
            navigate("/login"); // Redirect to login page
        })
        .catch((e) => {
            setErrormessage(e?.response?.data?.message || "Try Again");
        });
    };
    
    return (
        <div className="signup-container">
            <div className="header">
                <div className="text">Sign Up</div>
            </div>
            <ErrorPanel errormessage={errormessage} />
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <img src={user_icon} alt="User Icon" />
                    <input
                        type="text"
                        placeholder="Username"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <img src={email_icon} alt="Email Icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <img src={password_icon} alt="Password Icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">CREATE ACCOUNT</button>
            </form>
            <p className="login-link">
                Already have an account? <Link to="/login">Log in instead</Link>
            </p>
        </div>
    );
}

export default Signup;
