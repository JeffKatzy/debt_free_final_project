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
    this.props.createUser(this.state)
  }

  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <h2> Signup </h2>
            <p>
            <label> Name </label>
            <input type="text" placeholder="Your Name" onChange={this.handleOnNameChange.bind(this)}/>
            </p>
            <p>
            <label> Email </label>
            <input type="text" placeholder="email@email.com" onChange={this.handleOnEmailChange.bind(this)}/>
            </p>
            <p>
            <label> Password </label>
            <input type="password" placeholder="your password" onChange={this.handleOnPasswordChange.bind(this)} />
            </p>
            <p> <input type="submit" /> </p>
        </form>
      </div>
    )
  }
}

export default connect(null, { createUser })(Signup)
