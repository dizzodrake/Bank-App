import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Register() {
  let dispatch = useDispatch()
  const [register, setRegister] = useState({
    fisrtname: "",
    lastname: "",
    email: "",
    password: "",
    history:"",
    loan:"",
    card: "",
    balance: ""
  })
  register.card = Math.floor(Math.random() * 100000000000)
  register.balance = 50000
  register.history = []
  register.loan = []

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "REGISTER",
      payload: register,
      
    })
    // history.push("/Login");
    
    
    // let myStore
    // if (localStorage.getItem("users") === null) {
      //   myStore = []
      // } else {
        //   myStore = JSON.parse(localStorage.getItem("users"))
        // }
        // myStore.push(register)
        // localStorage.setItem("users", JSON.stringify(myStore))
        setRegister({
          fisrtname: "",
          lastname: "",
          email: "",
          password: "",
          history:"",
          loan:"",
          card: "",
          balance: ""
        })
      }


  return (
    <div>
      <div className="register" class="bg-info">
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <form onSubmit={onSubmit} style={{ textAlign: "center" }}>
          <label htmlFor="firstname">Firstname</label>
          <input type="text" value={register.firstname} onChange={e => setRegister({ firstname: e.target.value })} /> <br /><br />

          <label htmlFor="lastname">Lastname</label>
          <input type="text" style={{ marginLeft: -2 }} value={register.lastname} onChange={e => setRegister({ ...register, lastname: e.target.value })} /> <br /><br />

          <label htmlFor="email">Email</label>
          <input type="email" style={{ marginLeft: 28 }} value={register.email} onChange={e => setRegister({ ...register, email: e.target.value })} /> <br /><br />

          <label htmlFor="password">Password</label>
          <input type="password" value={register.password} onChange={e => setRegister({ ...register, password: e.target.value })} /> <br /><br />

          <input type="submit" value="Submit" className="registerBtn" class="btn-primary"/>
          <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        </form>

      </div>
    </div>
  )
}

export default Register
