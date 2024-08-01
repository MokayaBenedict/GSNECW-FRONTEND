// import React from 'react'

// function signup() {
//     return (
//         <div className="container">
//         <div className="left-half">
//             <img src="https://i.pinimg.com/236x/c3/f5/5e/c3f55e407f827864a1fb2fbbdf914c3b.jpg" alt="Login Image" className="login-image" />
//         </div>
//         <div className="right-half">
//             <form action="#" id="Login-form">
//                 <label className="Formlabel">Name</label>
//                 <br />
//                 <input type='text' placeholder='JaneDoe' className='nameofplayer' />
//                 <br />
//                 <label className="Formlabel">Email</label>
//                 <br />
//                 <input type="email" placeholder="e.g JohnDoe@gmail.com" className="textbox" id="input-email" required />
//                 <br /><br />
//                 <label className="Formlabel">Password</label>
//                 <br />
//                 <input type="password" placeholder="*********" className="textbox" id="input-password" required />
//                 <br /><br />
//                 <button className="button-login" id="button-login">Continue</button>
//                 <div>
//                     <pre>
//                         <a href="forgot_password.html" className="forgotpassword">Forgot Password?</a>
//                         <a href="login.jsx" className="signup" id="su"> Login Instead</a>
//                     </pre>
//                 </div>
//             </form>
//         </div>
//     </div>
        
//     );
// }

// export default signup;
import React from 'react';
// import './SignUp.css';

function signup() {
    return (
        <div className="signup-container">
            <h1>SIGN UP</h1>
            <form className="signup-form">
                <input type="text" placeholder="Name" className="input-field" />
                <input type="email" placeholder="Email" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <button type="submit" className="submit-button">CREATE ACCOUNT</button>
            </form>
            <p className="login-link">
                Already have an account? <a href="/login">log in instead</a>
            </p>
        </div>
    );
}

export default signup;
