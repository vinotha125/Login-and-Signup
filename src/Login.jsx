import React, { useState } from 'react'
import './SignUpForm.css'
import { Link } from 'react-router-dom'
import { auth } from './firebase.jsx'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Login  successfully");
      alert("Signup Successful!");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label>
          Email:
          <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </label>

        <label>
          Password:
          <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </label>

        <button type="submit">Login</button>

        <p>
          Dont have an account? <Link to="/signup">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login;
