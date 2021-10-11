import React, { useState } from 'react'

function Loan({request}) {
  const [loan, setLoan] = useState({
    loanCard: "",
    loanAmount: "",
    password: ""
  })
  const [notice, setNotification] = useState(false)
  const [message, setMessage] = useState("Your loan request has been sent successfully")

  const Send =(e)=>{
    e.preventDefault()
    setNotification(true)
    request(loan)
  }

  const remove = ()=>{
    setNotification(!notice)
  }

  return (
    <div>
      <h1>Loan</h1>
      {notice &&  (<span><span>{message} </span><button onClick={remove}>&times;</button></span>)}
      <form onSubmit={Send}>
          <input type="number" placeholder="recipient account number here"  onChange={e => setLoan({ ...loan, loanCard: e.target.value })} /> <br /><br />
          <input type="number" placeholder="amount to loan here"  onChange={e => setLoan({ ...loan, loanAmount: e.target.value })} /> <br /><br />
          <input type="password" placeholder="Enter your password"  onChange={e => setLoan({ ...loan, password: e.target.value })} /> <br /><br />
          <input className="homeBtn"  type="submit" value="SEND REQUEST" class="btn"/>
        </form>
    </div>
  )
}

export default Loan
