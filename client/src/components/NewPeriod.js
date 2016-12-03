import React, { Component } from 'react';
import { connect } from 'react-redux'
import {createPeriod} from '../ducks/newperiod'

class NewPeriod extends Component {
  constructor(props){
    super(props)
    this.state = {month: '', year: '', expenditure:'', payment: '', credit_card_id: 1}
    // use mapStateToProps to find the Current Credit Card, which we haven't established yet
  }

  handleMonth(event){
    this.setState({month: event.target.value})
  }

  handleYear(event){
    this.setState({year: event.target.value})
  }

  handleExpenditure(event){
    this.setState({expenditure: event.target.value})
  }

  handlePayment(event){
    this.setState({payment: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    // var email = event.target.children[1].children[1].value
    // var password = event.target.children[2].children[1].value
    // this.props.locateAndLoginUser({email, password})
    this.props.createPeriod(this.state)
  }

  render(){
    return(
      <div className="six columns">
      <h2>Add A Payment Period</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <p><label id="userLabel">Month</label><input type="text" id="month" placeholder="December" onChange={this.handleMonth.bind(this)}/></p>
         <p><label id="userLabel">Year</label><input type="number" id="year" placeholder="2016" step=".01" onChange={this.handleYear.bind(this)} /></p>
         <p><label id="userLabel">Monthly Expenditures</label><input type="number" id="expenditure" step=".01" onChange={this.handleExpenditure.bind(this)} /></p>
        <p><label id="userLabel">Planned Monthly Payment</label><input type="number" id="payment" step=".01" onChange={this.handlePayment.bind(this)} /></p>
        <p><input type="submit" month="submit" /></p>
      </form>
      </div>
      )

  }

}


// function mapStateToProps(state){
//   debugger
//   return {data: state.period}
// }
export default connect(null, { createPeriod })(NewPeriod)
