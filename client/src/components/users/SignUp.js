import React, { Component } from 'react';
import { createUser } from '../../ducks/signup';
import { connect } from 'react-redux'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {name: '', email: '', password: ''}
  }

  handleOnNameChange(event){
    this.setState({name: event.target.value})
  }

  handleOnEmailChange(event){
    this.setState({email: event.target.value})
  }

  handleOnPasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    // var name = event.target.children[2].value
    // var email = event.target.children[4].value
    // var password = event.target.children[6].value
    // this.props.createUser({name, email, password})
    this.props.createUser(this.state)
  }

  render(){

    return(
      <div className="four columns">
        <form id="userAccess" onSubmit={this.handleSubmit.bind(this)}>
            <h2>Sign Up</h2>
            <p><label id="userLabel"> Name </label>
            <input type="text" placeholder="Your Name" onChange={this.handleOnNameChange.bind(this)}/></p>
            <p><label id="userLabel"> Email </label>
            <input type="text" placeholder="email@email.com" onChange={this.handleOnEmailChange.bind(this)}/></p>
            <p><label id="userLabel"> Password </label>
            <input type="password" placeholder="your password" onChange={this.handleOnPasswordChange.bind(this)} /></p>
            <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, { createUser })(Signup)
