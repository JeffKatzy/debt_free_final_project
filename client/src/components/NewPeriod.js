import React, { Component } from 'react';
import { connect } from 'react-redux'
import {createPeriod} from '../ducks/newperiod'

class NewPeriod extends Component {
  constructor(props){
    super(props)
    this.state = {start_month: '', start_year: '', end_month: '', end_year: '', expenditure:'', payment: '', credit_card_id: 1}
    // use mapStateToProps to find the Current Credit Card, which we haven't established yet
  }

  handleStartMonth(event){
    this.setState({start_month: event.target.value})
  }

  handleStartYear(event){
    this.setState({start_year: event.target.value})
  }

  handleEndMonth(event){
    this.setState({end_month: event.target.value})
  }

  handleEndYear(event){
    this.setState({end_year: event.target.value})
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
        <p><label id="userLabel">Start Month</label><input type="text" id="start_month" placeholder="December" onChange={this.handleStartMonth.bind(this)}/>
        <label id="userLabel">Start Year</label><input type="number" id="start_year" placeholder="2016" step="number" onChange={this.handleStartYear.bind(this)} /></p>
        <p><label id="userLabel">End Month</label><input type="text" id="end_month" placeholder="December" onChange={this.handleEndMonth.bind(this)}/>
        <label id="userLabel">End Year</label><input type="number" id="end_year" placeholder="2016" step="number" onChange={this.handleEndYear.bind(this)} /></p>
        <p><label id="userLabel">Monthly Expenditure</label><input type="number" id="expenditure" step="100" onChange={this.handleExpenditure.bind(this)} />
        <label id="userLabel">Monthly Payment</label><input type="number" id="payment" step="100" onChange={this.handlePayment.bind(this)} /></p>
        <p><input type="submit"/></p>
      </form>
      </div>
      )
  }
}

export default connect(null, { createPeriod })(NewPeriod)
