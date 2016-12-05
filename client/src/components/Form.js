import React from 'react'
import {connect} from 'react-redux'
import { addPeriod } from '../ducks/userAccess.js'

const Form = (props) => {

  const handleChange = (event) => {
    let result = {}; let id = event.target.id;
    // debugger
    let val = event.target.value ? event.target.value : 0
    result[id] = val
    // debugger
    props.setValue(result)
  }
  const handleCard = (event) => {
    let newCardName = event.target.value
    let newCard = props.data.current.user.credit_cards.filter(card=>{return card.name === newCardName})
    debugger
    props.setCard(newCard[0])
    props.setValue(newCard[0])
    let cardId = newCard.id
    props.data.user.periods
    // filter on cardId
  }

  const handleNewPeriod = () => {
    props.addPeriod()
  }

  let user_cards
  if (props.data.current.user)
  {
    user_cards =
    props.data.current.user.credit_cards.map(card=>
      {return (<option id={card.id}>{card.name}</option>)})
}
  else
    {user_cards = "foo"}

  return (
    <div className="container" id="tableform" >
      <h3> Credit Card: </h3> {props.data.current.card !== "" ? <select onChange={handleCard.bind(props)}>{user_cards}</select> : <p></p>}
      <h2>Financial Data</h2>
      <div onChange={handleChange.bind(props)}>
        <label id="userLabel">Monthly Expenditure: $</label><input id="expenditure" type="number" placeholder="i.e.$123.45" defaultValue={props.data.expenditure ? props.data.expenditure : ""}></input>
        <label id="userLabel">Monthly Payment: $</label><input id="payment" type="number" placeholder="i.e.$123.45" defaultValue={props.data.payment ? props.data.payment : ""}></input>
      </div>
      <button onClick={handleNewPeriod.bind(props)}>Add A Period</button>
      <br />
    </div>
  )
}

export default connect(null, {addPeriod})(Form)
