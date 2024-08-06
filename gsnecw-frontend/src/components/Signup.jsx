import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import email_icon from '../assets/email.png';
import user_icon from '../assets/person.png';
import password_icon from '../assets/password.png';
import ErrorPanel from './ErrorPanel';
import AppContext from '../context/AppContext';
import { signup } from '../services/api';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormessage, setErrormessage] = useState(null);
    const { setUser, setToken } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrormessage(null);
        try {
            const data = await signup(username, email, password);
            setUser(data.user || null);
            setToken(data.token || null);
            setErrormessage(null);
            navigate('/');
        } catch (error) {
            setErrormessage(error?.response?.data?.message || 'Try Again');
        }
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
