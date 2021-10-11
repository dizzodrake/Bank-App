import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';


const initailState = []
const myReducer = (state = initailState, action) => {
  if (action.type === "REGISTER") {
    let myStore
    if (localStorage.getItem("users") === null) {
      myStore = []
    } else{
      myStore = JSON.parse(localStorage.getItem("users"))
    }
    myStore.push(action.payload)
    localStorage.setItem("users", JSON.stringify(myStore))
    return myStore
  }
  else if (action.type === "LOAD"){
    return action.payload
  }
  else if (action.type === "TRANSFER") {
    if (Number(action.sender.ownerPassword) === Number(action.transaction.password)) {
      if (Number(action.sender.ownerBalance) >= Number(action.transaction.amount)) {

        let registerLo = [...state];
        let cardFinder = registerLo.find((val) => val.card === Number(action.transaction.card))
        let ind = registerLo.indexOf(cardFinder);

        cardFinder.balance = eval(Number(cardFinder.balance) + Number(action.transaction.amount))
        let date = new Date()
        let time = date.toUTCString()
        cardFinder.history.unshift({by:action.sender.ownerName, from:action.sender.ownerCard, amountReceived: Number(action.transaction.amount), time:time})
        registerLo[ind] = cardFinder;

        let store = JSON.parse(localStorage.getItem("users"))
        let localFinder = store.find(val => val.card === Number(action.transaction.card))
        let localInd = store.indexOf(localFinder)
        localFinder.balance = eval(Number(localFinder.balance) + Number(action.transaction.amount))
        localFinder.history.unshift({by:action.sender.ownerName, from:action.sender.ownerCard, amountReceived: Number(action.transaction.amount), time:time})
        store[localInd] = localFinder
        localStorage.setItem("users", JSON.stringify(store))

        let deductlog = [...registerLo]
        let accFinder = deductlog.find((val) => val.card === Number(action.sender.ownerCard))
        let index = deductlog.indexOf(accFinder);
        accFinder.balance = eval(Number(accFinder.balance) - Number(action.transaction.amount))
        accFinder.history.unshift({to:Number(action.transaction.card), amountSent: Number(action.transaction.amount), time:time, by:action.sender.ownerName})
        deductlog[index] = accFinder;
        console.log(deductlog);

        let stores = JSON.parse(localStorage.getItem("users"))
        let localFinders = stores.find(val => val.card === Number(action.sender.ownerCard))
        let localIndex = stores.indexOf(localFinders)
        localFinders.balance = eval(Number(localFinders.balance) - Number(action.transaction.amount))
        localFinders.history.unshift({to:Number(action.transaction.card), amountSent: Number(action.transaction.amount), time:time, by:action.sender.ownerName})
        stores[localIndex] = localFinders
        localStorage.setItem("users", JSON.stringify(stores))

        return deductlog
      } else {
        alert("insufficient balance, kindly deposit or access our loan service  with just 200% interest rate.")
        return state
      }
    } else {
      alert("Incorrect credentials! check your credentials and try again")
      return state
    }
  }
  else if (action.type === "LOAN") {
    if (Number(action.sender.ownerPassword) === Number(action.loan.password)) {
        let registerLog = [...state];
        console.log(registerLog);
        let cardFinder = registerLog.find((val) => val.card === Number(action.loan.loanCard))
        let ind = registerLog.indexOf(cardFinder);
        console.log(cardFinder);
        let date = new Date()
        let time = date.toUTCString()
        cardFinder.loan.unshift({from:action.loan.loanCard, amountReQuest: Number(action.loan.loanAmount), time:time, name: action.sender.ownerName})
        registerLog[ind] = cardFinder;

        let stores = JSON.parse(localStorage.getItem("users"))
        let localFinders = stores.find(val => val.card === Number(action.loan.loanCard))
        let localIndex = stores.indexOf(localFinders)
        localFinders.loan.unshift({from:action.loan.loanCard, amountReQuest: Number(action.loan.loanAmount), time:time, name: action.sender.ownerName})
        stores[localIndex] = localFinders
        localStorage.setItem("users", JSON.stringify(stores))
        return registerLog
    }else {
      alert("Incorrect credentials! check your credentials and try again")
      return state
    }
  }
  else if (action.type === "DELETE") {
    let stateRep = [...state]
    let stateIndex = stateRep.indexOf(action.payload)
    stateRep.splice(stateIndex, 1)

   
    let store = JSON.parse(localStorage.getItem("users"))
    let localFinder = store.find(val => val.card === Number(action.payload.card))
    let localInd = store.indexOf(localFinder)
    store.splice(localInd, 1) 
    localStorage.setItem("users", JSON.stringify(store))

    return stateRep
  }
  else {
    return state
  }
}

const userinitailState = []
const secondReducer = (state = userinitailState, action) => {
  if (action.type === "SETUSER") {
    return action.payload
  }
  else if (action.type === "RESET") {
    return []
  } else if (action.type === "TRANSFER") {
    if (Number(action.sender.ownerPassword) === Number(action.transaction.password)) {
      if (Number(action.sender.ownerBalance) >= Number(action.transaction.amount)) {
        let deductlog = [...state]
        let accFinder = deductlog.find((val) => val.card === Number(action.sender.ownerCard))
        let index = deductlog.indexOf(accFinder);
        let date = new Date()
        let time = date.toUTCString()
        accFinder.balance = eval(Number(accFinder.balance) - Number(action.transaction.amount))
        accFinder.history.unshift({to:Number(action.transaction.card), amountSent: Number(action.transaction.amount), time:time, by:action.sender.ownerName})
        deductlog[index] = accFinder;
        return deductlog
      }
    }
  }
  else {
    return state
  }
}

const errorinitailState = ""
const thirdReducer = (state = errorinitailState, action) => {
  if (action.type === "SETERROR") {
    return "sorry user not found, kindly register"
  }
  else if (action.type === "SETAUTH") {
    return ""
  }
  else {
    return state
  }
}

const accessInitialState = true
const forthReducer = (state= accessInitialState, action)=>{
  if (action.type === "GRANT") {
    return state= false
  }
  else if (action.type === "RETURN") {
    return state= true
  }
  else{
    return state
  }
}

const rootReducer = combineReducers({
  users: myReducer, user: secondReducer, error: thirdReducer, access: forthReducer
})
const myStore = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
    