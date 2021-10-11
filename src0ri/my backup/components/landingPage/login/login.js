// import Inputs from "../../Inputs"
import { Link } from 'react-router-dom'
import 'C:/Users/ASUS GAMING/Desktop/React/banking-app/fresh_react/src/components/landingPage/css.css'


function redirect(){
    return (
        // alert("a")
        <Link to="/dashboard"/>
    )
}
const Login= ()=>{
    return (
        <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={()=>redirect()}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href=" #">password?</a>
                </p>
            </form>
    )
}

export default Login

// import React, { Component } from "react";

// export default class Login extends Component {
//     render() {
//         return (
//             <></>
//         );
//     }
// }