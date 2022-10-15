import React, { useState } from 'react'
import './Login.css'
import {Link,useNavigate} from "react-router-dom"
import {auth} from './firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    const signIn=e=>{
        e.preventDefault();//prevent refreshing page
        signInWithEmailAndPassword(auth,email,password).then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
   

    }
    const register=(e)=>{
        e.preventDefault();//prevent refreshing page
        createUserWithEmailAndPassword(auth,email,password).then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
       
    }
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />
        </Link> 
    <div className='login__container'>
        <h1>Log-in</h1>
        <form>
        <h5>Email</h5>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)} />
        <h5>Password</h5>
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <button type='submit' onClick={signIn} className='login__signInButton'>Sign-in</button>
        </form>
    <button onClick={register} className='login__registerButton'>Create Your amazon account</button>
    </div>   
    </div>
  )
}

export default Login
