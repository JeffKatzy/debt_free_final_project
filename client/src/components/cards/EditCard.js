import React, { Component } from 'react';
import { connect } from 'react-redux'
import {createCard} from '../../ducks/newcard'
import { setCard, setPeriod } from '../../ducks/current'
import { setValue } from '../../ducks/tableData'

class NewCard extends Component {
  constructor(props){
    super(props)
    let id = (localStorage.current_user_id)
    let submitName
    this.state = {name: '', debt: '', interest_rate:'', expenditure:0, payment: '', user_id: id, payment_type: '$'}
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleDebt(event){
    this.setState({debt: parseFloat(event.target.value)})
  }

  handleInterest(event){
    this.setState({interest_rate: parseFloat(event.target.value)})
  }

  handlePayment(event){
    this.setState({payment: parseFloat(event.target.value)})
  }

  handleExpenditure(event){
    this.setState({expenditure: parseFloat(event.target.value)})
  }

  handleRadio(event){
    this.setState({payment_type: event.target.id})
  }

  handleSubmit(event){
    event.preventDefault()
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = new Date()
    this.props.setCard(this.state)
    let payment = this.state.payment_type === "%" ? this.state.payment * this.state.debt / 100 : this.state.payment
    this.props.setPeriod({payment: payment, expenditure: 0})
    const newValues = {debt: this.state.debt,
                    start_month: date.getMonth(),
                    start_year: date.getYear()+1900,
                    creditcard: this.state.name,
                    payment: payment,
                    expenditure: this.state.expenditure,
                    interest: this.state.interest_rate}
    this.props.setValue(newValues)
    if (this.submitName === "store"){
      this.props.createCard(this.state)
    }
  }
  setSubmit(button){
    this.submitName = button.target.value
  }

  render(){
    return(
      <div className="twelve columns" id="forms">
      <h2>{this.props.current.user === "" ? "Try" : "Add"} A Card</h2>
      <form onSubmit={this.handleSubmit.bind(this)} >
         <p><label id="userLabel">Card Name</label><input type="text" id="card_name" placeholder="My Visa" onChange={this.handleName.bind(this)}/></p>
         <p><label id="userLabel">Total Debt</label><input type="number" id="debt" step=".01" onChange={this.handleDebt.bind(this)} /></p>
         <p><label id="userLabel">Interest Rate</label><input type="number" id="interest_rate" step=".01" onChange={this.handleInterest.bind(this)} />%</p>
         <p><label id="userLabel">Monthly Expenditure</label><input type="number" id="expenditure" step=".01" onChange={this.handleExpenditure.bind(this)} /></p>
         <p><label id="userLabel">Monthly Payment</label><input type="number" id="payment" step=".01" onChange={this.handlePayment.bind(this)} />
         <input type="radio" id="$" onChange={this.handleRadio.bind(this)} name="paymentType" defaultChecked={true} />$<input type="radio" id="%" name="paymentType" onChange={this.handleRadio.bind(this)} />%</p>
         <p><input type="submit" onClick={this.setSubmit.bind(this)} id="preview" value="preview" /></p>
         {this.props.current.user !== "" ? <p><input type="submit" onClick={this.setSubmit.bind(this)} id="rails" value="store" /></p> : <span />}
      </form>
      {this.props.newCard.error ? <h2 className="error">{this.props.newCard.error}</h2> : <span /> }
      </div>
      )

  }

}
function mapStateToProps(state){
  return {newCard: state.newCard}
}
export default connect(mapStateToProps, { createCard,setCard,setPeriod,setValue })(NewCard)
