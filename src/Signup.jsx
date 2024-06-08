import React, { useState } from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
      <h1 className='m-5 text-center text-warning'>Signup Page</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column w-50  m-auto '>
      <label htmlFor="">Email</label>
        <input
          type="email"
        //   placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border py-2'
        />
        <br /><br />
        <label htmlFor="">Password</label>
        <input
          type="password"
        //   placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border py-2'
        />
        <button type="submit" className='btn rounded bg-dark text-light'>Signup</button>
      </form>
      <p className='text-center'>Need to Login? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Signup