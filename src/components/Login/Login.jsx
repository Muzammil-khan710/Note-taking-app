import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <div className='login-container'>
            <div className='login-title'>Login</div>
            <form action="" className='form-container'>
                <label htmlFor="">Email</label>
                <input className='form-input' type="email" placeholder='Enter your Email' />

                <label htmlFor="">Password</label>
                <input className='form-input' type="password" placeholder='Enter your password' />

                <button className='form-btn'>Login</button>
            </form>

            <div className='login-desc'>Or</div>
            <div className='login-desc'>New user?</div>
            <div className='login-desc'>Register <Link to="/signup" className='login-link'> Here </Link></div>

        </div>
    </div>
  )
}

export { Login }