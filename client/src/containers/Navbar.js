import React from 'react'
import { connect } from 'react-redux'
import SignUp from '../components/users/SignUp.js'
import SignIn from '../components/users/SignIn.js'
import NewCard from '../components/NewCard.js'
import SignOut from '../components/users/SignOut.js'
import { signIn, signUp,addCreditCard } from '../ducks/userAccess.js'
import '../../public/css/navbar.css'

function handleUserSignin() {
  this.props.signIn()
}

function handleUserSignup() {
  this.props.signUp()
}

function handleCreditCard() {
  this.props.addCreditCard()
}

function handleClick(event){
  event.preventDefault()
  localStorage.removeItem("token")
}

class Navbar extends React.Component {

  render() {
    
    return (
      <div id="navbar">
        <span id="title">Debt Free</span>
        {this.props.current.user === "" ? <button onClick={handleUserSignup.bind(this)}>Sign Up</button> : <span />}
        {this.props.current.user === "" ? <button onClick={handleUserSignin.bind(this)}>Sign In</button> : <span />}
        {this.props.current.user !== "" ? <button onClick={handleClick.bind(this)}>Sign Out</button> : <span />} }
        <button onClick={handleCreditCard.bind(this)}>{this.props.current.user === "" ? "Try" : "Add"} a Credit Card</button>
        <br />
        {this.props.userAccess.showSignUp ? <SignUp /> : <p />}
        {this.props.userAccess.showSignIn ? <SignIn /> : <p />}
        {this.props.userAccess.addCreditCard ? <NewCard current={this.props.current} /> : <p />}
      </div>
    )
}}

export default connect(null, { signIn,signUp,addCreditCard })(Navbar)
