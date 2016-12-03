import React, { Component } from 'react';
import { connect } from 'react-redux'
import {createCard} from '../ducks/newcard'
import { setCard, setPeriod } from '../ducks/current'
import { setValue } from '../ducks/tableData'
// import {fetchCard} from '../ducks/fetchCard'

class NewCard extends Component {
  constructor(props){
    super(props)
    let id = (localStorage.current_user_id)
    this.state = {name: '', debt: '', interest_rate:'', min_payment: '', user_id: id}
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleDebt(event){
    this.setState({debt: event.target.value})
  }

  handleInterest(event){
    this.setState({interest_rate: event.target.value})
  }

  handleMinimum(event){
    this.setState({min_payment: event.target.value})
  }

  handleSubmit(event){
    let months = ["January", "February", "March", "April", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = new Date()
    event.preventDefault()
    // var email = event.target.children[1].children[1].value
    // var password = event.target.children[2].children[1].value
    // this.props.locateAndLoginUser({email, password})
    this.props.setCard(this.state)
    let payment = (this.state.min_payment * this.state.debt) / 1200
    this.props.setPeriod({payment: payment, expenditure: 0})
    const newValues = {debt: this.state.debt,
                    month: months[date.getMonth()],
                    year: date.getYear()+1900,
                    creditcard: this.state.name,
                    payment: payment,
                    expenditure: 0,
                    interest: this.state.interest_rate}
    this.props.setValue(newValues)

  }

  render(){
    return(
      <div className="six columns">
      <h2>Add A Credit Card</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
         <p><label id="userLabel">Card Name</label><input type="text" id="name" placeholder="My Visa" onChange={this.handleName.bind(this)}/></p>
         <p><label id="userLabel">Total Debt</label><input type="number" id="debt" step=".01" onChange={this.handleDebt.bind(this)} /></p>
         <p><label id="userLabel">Interest Rate</label><input type="number" id="interest_rate" step=".01" onChange={this.handleInterest.bind(this)} />%</p>
         <p><label id="userLabel">Min Monthly Payment</label><input type="number" id="min_payment" step=".01" onChange={this.handleMinimum.bind(this)} />%</p>
         <p><input type="submit" name="submit" /></p>
      </form>
      </div>
      )

  }

}

export default connect(null, { createCard,setCard,setPeriod,setValue })(NewCard)
