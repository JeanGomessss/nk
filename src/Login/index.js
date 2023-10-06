import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function Login () {
    return(
        <div className="login">
            <div className="login-box">
                <div className='menu-login'>
                    <h1 className="titulo">Nike User!</h1>
                    <p>Sign up for more Offers</p>
                    <div className='campos'>
                        <input className='campo-login' type='text' placeholder='Username'></input>
                        <input className='campo-login' type='Password' placeholder='Password'></input>
                    </div>
                    <div>
                        <input type="checkbox" className='marcado'></input>
                        <label>Remember my Username</label>
                    </div>
                    <Link to='/' className="log">LOGIN</Link>
                </div>
            </div>
        </div>
    );
}