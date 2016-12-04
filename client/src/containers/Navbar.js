import React from 'react'
import { connect } from 'react-redux'
import SignUp from '../components/users/SignUp.js'
import SignIn from '../components/users/SignIn.js'
import { signIn, signUp } from '../ducks/userAccess.js'
import '../../public/css/navbar.css'

function handleUserSignin() {
  this.props.signIn()
}

function handleUserSignup() {
  // debugger
  this.props.signUp()
}

class Navbar extends React.Component {

  render() {
    // debugger
    return (
      <div id="navbar">
        <button onClick={handleUserSignup.bind(this)}>Sign Up</button>
        <button onClick={handleUserSignin.bind(this)}>Sign In</button>
        <br />
        {this.props.userAccess.showSignUp ? <SignUp /> : <p />}
        {this.props.userAccess.showSignIn ? <SignIn /> : <p />}
      </div>
    )
}}

export default connect(null, { signIn,signUp })(Navbar)
