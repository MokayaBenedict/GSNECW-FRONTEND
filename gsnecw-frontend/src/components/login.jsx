import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import ErrorPanel from './ErrorPanel';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import AppContext from '../context/AppContext';
import { login } from '../services/api';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormessage, setErrormessage] = useState(null);
    const { setUser, setToken } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrormessage(null);
        try {
            const data = await login(email, password);
            setToken(data?.token || null);
            setUser(data?.user || null);
            setErrormessage(null);
            navigate('/store');
        } catch (error) {
            setErrormessage(error?.response?.data?.message || 'Try Again');
        }
    };

    return (
        <div className="login-container">
            <div className="header">
                <div className="text">Log in</div>
            </div>
            <ErrorPanel errormessage={errormessage} /> 
            <form className="login-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="submit-button">Log in</button>
            </form>
            <p className="signup-link">
                Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
}

export default Login;
