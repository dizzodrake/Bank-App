// import React, { Component } from "react";
import { useState, useRef } from 'react';
import 'C:/Users/ASUS GAMING/Desktop/React/banking-app/fresh_react/src/components/landingPage/css.css'
// import {db, app} from '../../../config'


const  SignUp =()=> {
    const [fName, setFName] = useState('');
    // const [sName, setSName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const [state, setstate] = useState('');
    const fname = useRef(null)
    function Register () {
        let myFName = fname.current.value;  
     
        alert(fname) 
        // db.ref('/')
    }



        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" ref={fname}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="phone" className="form-control" placeholder="Phone Number" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <hr/>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    {/* Already registered <a href="#">sign in?</a> */}
                </p>
            </form>
        );
}

export default SignUp