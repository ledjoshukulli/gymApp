import React from 'react';
import "../src/App.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useForm } from "react-hook-form";
import useAuthStore from './context';


const LoginForm = ({ mockUser }) => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const { isLoggedIn, setIsLoggedIn,loginError, setLoginError } = useAuthStore(); // Access Zustand store

  const handleLogin = ({ userName, password }) => {
    if (userName === mockUser.username && password === mockUser.password) {
      setIsLoggedIn(true);
      setLoginError(false);
      reset(); // Reset error state on successful login
    } else {
      setIsLoggedIn(false);
      setLoginError(true); // Set error state if username or password doesn't match
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {mockUser.username}!</h2>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit(handleLogin)}>
              <p id="heading">Login</p>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <AccountCircleIcon className="input-icon" />
            </svg>
            <input
              autoComplete="off"
              placeholder="Username"
              className="input-field"
              type="text"
              {...register("userName", {
                required: "Username is required",
                maxLength: { value: 20, message: 'Username is too long' }
              })}
            />
          </div>
          {errors.userName && <p className="error">{errors.userName.message}</p>}
          
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <LockIcon className="input-icon" />
            </svg>
            <input
              placeholder="Password"
              className="input-field"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
                  message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
            />
          </div>
          {errors.password && <p className="error">{errors.password.message}</p>}

          {loginError && <p className="error">Invalid username or password</p>}

          <div className="btn">
            <button className="button1" type="submit">Login</button>
            <button className="button2">Sign Up</button>
          </div>
          <button className="button3">Forgot Password</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
