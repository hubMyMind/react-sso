import React, { useState } from 'react';
import './PasswordRecoveryForm.css';
import { MdEmail } from "react-icons/md";


function PasswordRecoveryForm () {
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Reset Password </h1>
                <div className="input-box">
                    <input type="email"  placeholder="Email"  value={email} 
                    onChange={(e) => setEmail(e.target.value)} required  />
                    <MdEmail className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />I accept the <a href="#">Terms and Conditions</a></label>
                </div>

                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
}

export default PasswordRecoveryForm;