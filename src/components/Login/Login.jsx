import React, {useState} from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {

  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword]  = useState("")

  return (
    <div>
        <div className='login-container'>
            <div className='login-title'>Login</div>
            <div className='form-container'>
                <label htmlFor="">Email</label>
                <input className='form-input' type="email" placeholder='Enter your Email'value={email}  onChange={ e => setEmail(e.target.value) } />

                <label htmlFor="">Password</label>
                <input className='form-input' type="password" placeholder='Enter your password' value={password} onChange={ e => setPassword(e.target.value)}/>

                <button className='form-btn' onClick={(e) =>  login(e,email,password)}> Login</button>
            </div>

            <button onClick={() => {setEmail("adarshbalika@gmail.com"); setPassword("adarshBalika123")}}>Test credentials</button>
  
            <div className='login-desc'>Or</div>
            <div className='login-desc'>New user?</div>
            <div className='login-desc'>Register <Link to="/signup" className='login-link'> Here </Link></div>

        </div>
    </div>
  )
}

export { Login }