import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Prompt } from 'react-router-dom'


function Admin() {
 

  let allUsers = useSelector(state=>state.users)
  let dispatch = useDispatch()
  const [log, setLog] = useState([])
  const [loan, setLoan] = useState([])
  const [historyLog, setHistoryLog] = useState([])
  const [admin, setAdmin] = useState({
    email: "admin@ourbank.com",
    password: "administrator"
  })

  const Delete = (index) => {
    let userIndex = allUsers.find((val, id) => id === index)
    dispatch({
            type: "DELETE",
            payload:userIndex
          })
  }

  const acceptLoan = (index) => {
    let userIndex = allUsers.find((val, id) => id === index)
    dispatch({
            type: "ACCEPT_LOAN",
            payload:userIndex
          })
  }

  const rejectLoan = (index, acc) => {
    // if (confirm('are you sure')) {
    let loanData = [...loan]
    let data = loanData.filter(val=>val !== index)
    setLoan(data)

    let users = JSON.parse(localStorage.getItem('users'))
    let owner = users.find(val => Number(val.card) === Number(acc))
    let localIndex = users.indexOf(owner)
    let localData = owner.loan.find(val =>{
      return val.time === index.time
    })
    let id = owner.loan.indexOf(localData)
    owner.loan.splice(id, 1)
    users[localIndex] = owner
    localStorage.setItem("users", JSON.stringify(users))
    // }
    }
   
  

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'))
    setLog(users)
    console.log(users);
    dispatch({
      type: "LOAD",
      payload: users
    })
}, [])


  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'))
      let allLoan = users.filter(val => val.loan)
      let loanArr = []
      for (let i = 0; i < allLoan.length; i++) {
        const eachLoan = allLoan[i].loan
         if (eachLoan.length > 0) {
           loanArr.push(...eachLoan)
         }
        }
        setLoan(loanArr)
         console.log(loanArr);  

  }, [])


  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'))
    let hist = users.filter(val => val.history)
    let arr = []
   for (let i = 0; i < hist.length; i++) {
     const history = hist[i].history
     let finder = history.filter(val=>{
       return val.amountSent
      })
      if (finder.length > 0) {
        arr.push(...finder)
      }
    }
    setHistoryLog(arr)
    console.log(arr);
  }, [])

// useEffect(() => {
//   for (let i = 0; i <= hist.length; i++) {
//     if (hist[i]!== undefined) {
//       for (let g = 0; g < hist[i].history.length; g++) {
//         if (hist[i].history[g].amountSent !== undefined) {
//         //   continue 
//         // }
//         // else{ 
//           console.log(hist[i].history[g]); 
//           setLog([...log, hist[i].history[g]])
  
  
//         }else{continue}
//       }
//     }
//   }
// }, [])


  return (
    <Fragment>
      <hr/> <br/>
        <h3>Welcome to the Admin Section, PLEASE CAREFULLY CONFIRM ALL OPERATIONS BEFORE PROCEEDING!!!</h3>
      <br/><br/>
      {allUsers ? allUsers.map((user, i) => {
          return (
            <div key={i}>
              <span>user {i +1}:</span> {user.lastname}<span> {user.firstname}</span> <span>card:{user.card}</span><span> balance:{user.balance}</span><span> </span>
              <button onClick={()=>Delete(i)}>Delete User</button> <br/> <br/>
            </div>
          )
        }) : <div>No user yet</div>
        } 
      <hr />

        <div>
          {loan ? loan.map((eachLoan, i)=>{
            return (
              <div key={i}>
                 <span>User with account number- <b>{eachLoan.from}</b> requested of <b>{eachLoan.amountReQuest}</b> @ {eachLoan.time}</span>
                 <button onClick={()=>acceptLoan(i)}>Accept</button> |
                 <button onClick={()=>rejectLoan(eachLoan, eachLoan.from)}>Reject</button> <br/> <br/>
              </div>
            )
          }): <div>No loan request yet</div>}
        </div>
          <hr />
        <div>
          {historyLog ? historyLog.map((history, i)=>{
            return (
              <div key={i}>
                <div>
                  <span>{history.by} send {history.amountSent} to account number-{history.to} @ {history.time}</span>
                </div>
                
              </div>
            )
          }): <div>No loan request yet</div>}
        </div>
    </Fragment>
  )
}

export default Admin