import React from 'react'

function Login() {
    return (
        <div className="container">
        <div className="left-half">
            <img src="https://i.pinimg.com/236x/c3/f5/5e/c3f55e407f827864a1fb2fbbdf914c3b.jpg" alt="Login Image" className="login-image" />
        </div>
        <div className="right-half">
            <form action="#" id="Login-form">
                
                <br />
                <label className="Formlabel">Email</label>
                <br />
                <input type="email" placeholder="e.g JohnDoe@gmail.com" className="textbox" id="input-email" required />
                <br /><br />
                <label className="Formlabel">Password</label>
                <br />
                <input type="password" placeholder="Password" className="textbox" id="input-password" required />
                <br /><br />
                <button className="button-login" id="button-login">Login</button>
                <div>
                    <pre>
                        <a href="forgot_password.html" className="forgotpassword">Forgot Password?</a>
                        <a href="signup.html" className="signup" id="su"> Signup Instead</a>
                    </pre>
                </div>
            </form>
        </div>
    </div>
        
    );
}

export default Login;