import React, { Component } from 'react';
import { logoutUser } from '../../ducks/signout';
import { connect } from 'react-redux'

class SignOut extends Component {
  constructor(props){
    super(props)
  }

  handleClick(event){
    event.preventDefault()
    localStorage.removeItem("token")
  }

  render(){

    return(
      <div className="twelve columns">
        <button onClick={this.handleClick.bind(this)}>Sign Out</button>
      </div>
    )
  }
}

export default connect(null, { SignOut })(SignOut)
