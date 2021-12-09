import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from "react-router-dom"
import {auth} from './firebase';
import logo from "./NicePng_genie-png_2277046.png"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        auth.
            signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/' className="login__link">
            <img
            className="login__logo"
            src={logo}
            />
            <span className="login__genie__text"> Genie
            </span>
            </Link>
            <div className="login__container">
              <h1>Sign-in</h1>
              <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                {e => setEmail(e.target.value)} placeholder="Please enter your email here"/>
                <h5>Password</h5>
                <input type='password' value={password} onChange=
                {e => setPassword(e.target.value)} placeholder="Please enter your password here"/>
                <button 
                type='submit'
                onClick={signIn}
                className="login__signInButton"
                >Sign-in</button>
              </form>
              <p>By continuing, you agree to Genie's Conditions of Use and Privacy Notice.</p>
                <button 
                onClick={register}
                className="login__registerButton">Create your account</button>
            </div>
        </div>
    )
}

export default Login