import React, { useState } from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container m-auto'>
      <h1 className='m-5 text-center' style={{color:"green"}}>Login Page</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column w-50  m-auto '>
      <label htmlFor="">Email</label>
        <input
          type="email"
          // placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border py-2 mx-0 px-0'
        />
        <br /><br />
        <label htmlFor="">Password</label>
        <input
        
          type="password"
          // placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border py-2'
        />
        <button type="submit" className='btn border rounded bg-dark text-light'>Login</button>
      </form>
      <p className='text-center'>Need to Signup? <Link to="/signup">Create Account</Link></p>
    </div>
  )
}

export default Login