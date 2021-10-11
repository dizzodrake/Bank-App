import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"

function BankNav() {
  let access = useSelector(state => state.access)
  const dispatch = useDispatch()
  const logout = ()=>{
    dispatch({
      type:"RETURN"
    })
  }

  const Confirm = () => {
    if (access) {
      return (
        <nav class="nav navbar bg-success">
          <NavLink to="/"> Home</NavLink> |
          <NavLink to="/Register"> Register</NavLink> |
          <NavLink to="/Login"> Login</NavLink>
        </nav>
      )
    } else{
      return (
        <button class="btn"><NavLink onClick={logout} to="/">Logout</NavLink> </button>
      )
    }

  }
  return (
    <div>
      <span class="mt-3">OUR Bank</span>
      {Confirm()}
      {/* <NavLink to="/">Logout</NavLink> */}
    </div>
  )
}

export default BankNav
