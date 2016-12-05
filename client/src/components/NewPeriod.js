import React, { Component } from 'react';
import { connect } from 'react-redux'
import {createPeriod} from '../ducks/newperiod'

class NewPeriod extends Component {
  constructor(props){
    super(props)
    this.state = {start_month: '', start_year: '', end_month: '', end_year: '', expenditure:'', payment: '', credit_card_id: this.props.card}
    // debugger
    // use mapStateToProps to find the Current Credit Card, which we haven't established yet
  }

  handleStartDate(event){
    // debugger
    let array_date = event.target.value.split('-')
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    this.setState({start_year: array_date[0], start_month: months[array_date[1]-1]})
  }

  handleEndDate(event){
    let array_date = event.target.value.split('-')
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    this.setState({end_year: array_date[0], end_month: months[array_date[1]-1]})
  }


  handleExpenditure(event){
    this.setState({expenditure: event.target.value})
  }

  handlePayment(event){
    this.setState({payment: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createPeriod(this.state)
  }

  render(){
    return(
      <div className="twelve columns" id="newperiodform">
      <h2>Add A Period</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <p><label id="userLabel">Start Date</label><input type="month" id="period[start_date]" placeholder="December" onChange={this.handleStartDate.bind(this)}/></p>
        <p><label id="userLabel">End Date</label><input type="month" id="period[end_date]" placeholder="January" onChange={this.handleEndDate.bind(this)}/></p>
        <p><label id="userLabel">Monthly Expenditure</label><input type="number" id="period[expenditure]" step="100" onChange={this.handleExpenditure.bind(this)} />
        <label id="userLabel">Monthly Payment</label><input type="number" id="period[payment]" step="100" onChange={this.handlePayment.bind(this)} /></p>
        <p><input type="submit"/></p>
      </form>
      </div>
      )
  }
}

export default connect(null, { createPeriod })(NewPeriod)
