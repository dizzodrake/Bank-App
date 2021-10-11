import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
// import { useHistory } from "react-router-dom"

function Login() {
  // let allUsers = useSelector(state => state.users)
  // let currenntUser = useSelector(state => state.user)
  let error = useSelector(state => state.error)
  let history = useHistory()
  let dispatch = useDispatch()
  // let history = useHistory()
  // {auth && history.push('/Dashboard')}
  const [login, setLogin] = useState({ email: "", password: "" })
  const [admin, setAdmin] = useState({
    email: "admin@ourbank.com",
    password: "administrator"
  })


  const onLogin = e => {
    e.preventDefault()
    let myStore = JSON.parse(localStorage.getItem("users"))
    let user = myStore.filter((info)=> info.email === login.email && Number(info.password) === Number(login.password) )
    // let user = allUsers.filter(user => login.email === user.email && Number(login.password) === Number(user.password))
    // console.log(user);
    if (login.password === admin.password && login.email === admin.email) {
      console.log("welcome back Admin");
      dispatch({
        type: "SETAUTH",
      })
      dispatch({
        type:"GRANT"
      })
      history.push("/Admin")

    }
    else if (user.length !== 0) {
      dispatch({
        type: "SETUSER",
        payload: user
      })
      dispatch({
        type: "SETAUTH",
      })
      dispatch({
        type:"GRANT"
      })
      history.push("/Dashboard")
    } else {
      dispatch({
        type: "SETERROR"
      })
      dispatch({
        type: "RESET"
      })
    }
  }

  const remove = ()=>{
    dispatch({
      type: "SETAUTH",
    })
  }

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'))
    dispatch({
      type: "LOAD",
      payload: users
    })
}, [])

  return (
    <div class="bg-info">
      <h2 style={{ textAlign: "center" }}>Login</h2>


      {/* {(error !== "") ? <div>{error}</div> : <p>Welcome back {lastname} </p>} */}
      {error &&  (<span><span>{error} </span><button onClick={remove}>&times;</button></span>)}
      <form onSubmit={onLogin} style={{ textAlign: "center" }}>
        <label htmlFor="email">Email : </label>
        <input style={{ marginLeft: 27 }} type="email" value={login.email} onChange={e => setLogin({ ...login, email: e.target.value })} /> <br /><br />

        <label htmlFor="password">Password : </label>
        <input type="password" value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} /> <br /><br />

        <input className="registerBtn" type="submit" value="Login" class="btn btn-success"/>
      </form>
    </div>
  )
}

export default Login
