import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import Loan from './Loan'

function Dashboard() {
  let currentUser = useSelector(state=>state.user)
  let dispatch = useDispatch()

  let tranzact = currentUser.find(val => val.history).history
  
  
  
  let firstname = currentUser.map(val => val.firstname)
  let card = currentUser.map(val => val.card)
  let password = currentUser.map(val => val.password)
  let balance = currentUser.map(val => val.balance)
  
  const [owner, setOwner] = useState({
    ownerCard: "",
    ownerPassword: "",
    ownerBalance :"",
    ownerName:''
  })
  owner.ownerName = firstname
  owner.ownerCard = card
  owner.ownerPassword = password
  owner.ownerBalance = balance

  console.log(card);
  console.log(password);
  console.log(balance);
  
  const [transfer, setTransfer] = useState({
    card: "",
    amount: "",
    password: ""
  })
  const lastname = currentUser.map(val => val.lastname)
 
  const email = currentUser.map(val => val.email)

  const onSend = (e) => {
    e.preventDefault()
    dispatch({
      type : "TRANSFER",
      transaction:transfer,
      sender:owner
    })
  }
  const loanRequest = (value)=>{
    dispatch({
      type: "LOAN",
      loan : value,
      sender:owner
    })
  }

  let history = useHistory()
  const Click = () => {
    history.push('/')
    
  }



  return (
    <div class="bg-info" style={{ textAlign: "center" }}>

      {/* <nav className="nav">
        <div>Account: {lastname} {firstname} </div>
        
      </nav> */}
      <br/><br/><hr/>
      <div className="flex">
        <div className="margin">
          <h3><div>Hi <b>{lastname} {firstname}</b> !!!</div> 
          <p>You are logged in to OUR Bank.</p>
          <div>Email: <b>{email}</b></div> <br/>
          <div>Account number : <b>{card}</b> </div>
          <div>Current balance :  <b> &#x20A6; {balance}</b></div>
          {/* <button className="homeBtn" onClick={Click}>Logout</button> */}
          </h3>
        </div> <br />

      <div className="border">
        <h3>Transfer money</h3> <br/>
        <form onSubmit={onSend}>
          <input type="number" placeholder="recipient account number here"  onChange={e => setTransfer({ ...transfer, card: e.target.value })} /> <br /><br />
          <input type="number" placeholder="amount here"  onChange={e => setTransfer({ ...transfer, amount: e.target.value })} /> <br /><br />
          <input type="password" placeholder="Enter your password"  onChange={e => setTransfer({ ...transfer, password: e.target.value })} /> <br /><br />
          <input className="homeBtn"  type="submit" value="SEND" class="btn"/>
        </form>
      </div>
        {tranzact && tranzact.map((val, id) => {
          return(
            <div>
              <h4>History</h4>
              <div key={id}>
                {val.amountReceived ? ( <div>
                  <small>You recieved</small>
                  <small> <b> &#x20A6; {val.amountReceived}</b> from </small>
                  <small>{val.from}</small>
                  <small> on {val.time}</small>
                </div>): ( <div>
                  <small>you sent</small>
                  <small> <b> &#x20A6;{val.amountSent} </b> to </small>
                  <small> <b> {val.to} </b></small>
                  <small>@ {val.time}</small>
                </div>)}
              </div>

            </div>
          )
        })}
      </div>

      <Loan request={loanRequest}/>

      <br/>

    </div>
  )
}

export default Dashboard
