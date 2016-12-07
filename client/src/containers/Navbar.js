import React from 'react'
import { connect } from 'react-redux'
import SignUp from '../components/users/SignUp.js'
import SignIn from '../components/users/SignIn.js'
import NewCard from '../components/NewCard.js'
import SignOut from '../components/users/SignOut.js'
import { signIn, signUp,showNewCard,addPeriod,showPeriods,allFalse } from '../ducks/userAccess.js'
import signOutUser from '../ducks/signout'
import '../../public/css/navbar.css'

function handleTabs(event){
  console.log(event.target.innerText)
  this.props.allFalse()
  if (event.target.innerText === "SIGN UP"){
    this.props.signUp()
  }
  else if (event.target.innerText === "SIGN IN"){
    this.props.signIn()
  }
  else if (event.target.innerText === "TRY A CREDIT CARD" || event.target.innerText === "ADD A CREDIT CARD"){
    this.props.showNewCard()
  }
  else if (event.target.innerText === "ADD A PERIOD") {
    this.props.addPeriod()
  }
  else if (event.target.innerText === "VIEW PERIODS") {
    this.props.showPeriods()
  }
}

function handleClick(event){
  event.preventDefault()
  this.props.signOutUser()
}

class Navbar extends React.Component {

  render() {

    return (
      <div id="navbar">
        <span id="title">Debt Free</span>
        {this.props.current.user === "" ? <button onClick={handleTabs.bind(this)}>Sign Up</button> : <span />}
        {this.props.current.user === "" ? <button onClick={handleTabs.bind(this)}>Sign In</button> : <span />}
        {this.props.current.user ? <button onClick={handleClick.bind(this)}>Sign Out</button> : <span />}
        <button onClick={handleTabs.bind(this)}>{this.props.current.user ? "Add" : "Try"} a Credit Card</button>
        {this.props.current.user ? <button onClick={handleTabs.bind(this)}>Add a Period</button> : <span />}
        {this.props.current.user ? <button onClick={handleTabs.bind(this)}>View Periods</button> : <span />}
        <br />
        {this.props.userAccess.showSignUp ? <SignUp /> : <p />}
        {this.props.userAccess.showSignIn ? <SignIn /> : <p />}
        {this.props.userAccess.addCreditCard ? <NewCard current={this.props.current} /> : <p />}
        {}
      </div>
    )
}}

export default connect(null, { signIn,signUp,showNewCard,addPeriod,showPeriods,allFalse, signOutUser})(Navbar)
