import React, { useState } from 'react'
import './SignUpForm.css'
import { Link } from 'react-router-dom'
import { auth } from './firebase.jsx'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully");
      alert("Signup Successful!");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h1>SignUp</h1>

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

        <button type="submit">Sign Up</button>

        <p>
          Already Registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUpForm;
