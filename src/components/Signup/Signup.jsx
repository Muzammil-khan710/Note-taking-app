import React from 'react'
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div>
         <div className='login-container'>
            <div className='login-title'>Sign up</div>
            <form action="" className='form-container'>
                <label htmlFor="">Name</label>
                <input type="text" className='form-input' placeholder='Enter your name' />

                <label htmlFor="">Email</label>
                <input className='form-input' type="email" placeholder='Enter your Email' />

                <label htmlFor="">Password</label>
                <input className='form-input' type="password" placeholder='Enter your password' />

                <button className='form-btn'>Sign up</button>
            </form>

            <div className='login-desc'>Or</div>
            <div className='login-desc'>Existing user?</div>
            <div className='login-desc'>Login<Link to="/login" className='login-link'> Here </Link></div>

        </div>
    </div>
  )
}

export { Signup }