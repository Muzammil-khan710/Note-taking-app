import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../../Context/AuthContext'

const Signup = () => {

  const { signup } = useAuth()

  const [newuser, setNewUser] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : ""
  })

  return (
    <div>
         <div className='login-container'>
            <div className='login-title'>Sign up</div>
            <form className='form-container'>
                <label htmlFor="">First Name</label>
                <input type="text" className='form-input' placeholder='Enter your first name' onChange={(e) => setNewUser({ ...newuser, firstName : e.target.value})} />

                <label htmlFor="">Last Name</label>
                <input type="text" className='form-input' placeholder='Enter your last name'  onChange={(e) => setNewUser({ ...newuser, lastName : e.target.value})}/>

                <label htmlFor="">Email</label>
                <input className='form-input' type="email" placeholder='Enter your Email'  onChange={(e) => setNewUser({ ...newuser, email : e.target.value})} />

                <label htmlFor="">Password</label>
                <input className='form-input' type="password" placeholder='Enter your password'  onChange={(e) => setNewUser({ ...newuser, password : e.target.value})}/>

                <button className='form-btn btn-hover' onClick={(e) => signup(e, newuser) }>Sign up</button>
            </form>

            <div className='login-desc'>Or</div>
            <div className='login-desc'>Existing user?</div>
            <div className='login-desc'>Login<Link to="/login" className='login-link'> Here </Link></div>

        </div>
    </div>
  )
}

export { Signup }