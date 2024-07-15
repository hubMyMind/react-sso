import React, { useState } from 'react';
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthService from '../../services/AuthService';


function LoginForm({ history }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    AuthService.login(username, password)
      .then(() => {
        history.push('/');
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}  required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="/reset-password">Forgot password?</Link>
        </div>

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
