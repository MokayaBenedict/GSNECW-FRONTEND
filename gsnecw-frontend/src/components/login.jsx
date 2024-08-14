
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import ErrorPanel from './ErrorPanel';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import AppContext from '../context/AppContext';
import { bouncy } from 'ldrs';
bouncy.register();
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormessage, setErrormessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const { setUser, setToken } = useContext(AppContext);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrormessage(null);
        setIsLoading(true);

        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/login",
            data: {
                email: email,
                password: password,
            },
        })
        .then((res) => {
            const data = res?.data;
            setToken(data?.token || null);
            localStorage.setItem("authToken",data.token)
            // console.log(data.token);
            
            setUser(data?.user || null);
            setErrormessage(null);
            navigate("/store");
            setIsLoading(false);
        })
        .catch((e) => {
            setErrormessage(e?.response?.data?.message || "Try Again");
            setIsLoading(false);
        });
    };

    return (
        <div className="login-container">
            {isLoading ? (
                <div className="loader-container">
                    <div className='loader-centre'>
                    <l-bouncy
                      size="45"
                      speed="1.75" 
                      color="purple" 
                    ></l-bouncy>
                </div>
                </div>
            ) : (
                <div>
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
            )}
        </div>
    );
}

export default Login;