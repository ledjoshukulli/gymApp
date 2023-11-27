import React from 'react';
import "../src/App.css"

const LoginForm = () => {
  return (
    <div>
      <form className="form">
        <p id="heading">Login</p>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            {/* ... SVG Path for Username icon */}
          </svg>
          <input autoComplete="off" placeholder="Username" className="input-field" type="text" />
        </div>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            {/* ... SVG Path for Password icon */}
          </svg>
          <input placeholder="Password" className="input-field" type="password" />
        </div>
        <div className="btn">
          <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          <button className="button2">Sign Up</button>
        </div>
        <button className="button3">Forgot Password</button>
      </form>
    </div>
  );
};

export default LoginForm;
