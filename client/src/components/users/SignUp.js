import React, { Component } from 'react';
import { createUser } from '../../ducks/signup';
import { connect } from 'react-redux'

class Signup extends Component {
  constructor(props){
    super(props)
    // this.state = {name: '', email: '', password: ''}
  }

  // handleOnNameChange(event){
  //   this.setState({name: event.target.value})
  // }

  // handleOnEmailChange(event){
  //   this.setState({email: event.target.value})
  // }

  // handleOnPasswordChange(event){
  //   this.setState({password: event.target.value})
  // }

  handleSubmit(event){
    event.preventDefault()
    var name = event.target.children[2].value
    var email = event.target.children[4].value
    var password = event.target.children[6].value
    this.props.createUser({name, email, password})
  }

  render(){

    return(
      <div>
        <form id="userAccess" onSubmit={this.handleSubmit.bind(this)}>
            <span className="two columns" id="signtitle">Signup</span>
            <label id="userLabel"> Name </label>
            <input type="text" placeholder="Your Name" />
            <label id="userLabel"> Email </label>
            <input type="text" placeholder="email@email.com" />
            <label id="userLabel"> Password </label>
            <input type="password" placeholder="your password"  />
            <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, { createUser })(Signup)
