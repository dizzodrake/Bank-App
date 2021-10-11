import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
  let myState = useSelector(state => state.users)
  let dispatch = useDispatch()

  

  useEffect(() => {
      let users = JSON.parse(localStorage.getItem('users'))
      console.log(users);
      dispatch({
        type: "LOAD",
        payload: users
      })
  }, [])
        
      
  
  return (
    <div>
      <h1>Welcome to your <b color="blue">OUR</b> bank, <b>OUR</b> Bank is <b>YOUR</b> Bank. Start banking with us today</h1>

      {/* <button>Start Today</button> */}
      {/* <hr/>
        {myState ? myState.map((user, i) => {
          return (
            <div key={i}>
              {user.lastname}
            </div>
          )
        }) : <div>No user yet</div>
        } */}
    </div>
  )
}
export default Home
