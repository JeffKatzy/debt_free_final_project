import React from 'react'
import {connect} from 'react-redux'
import { addPeriod } from '../ducks/userAccess.js'
import { overWritePeriods } from '../ducks/current.js'

const Form = (props) => {

  const handleChange = (event) => {
    let result = {}; let id = event.target.id;
    let val = event.target.value ? parseFloat(event.target.value) : 0
    result[id] = val
    props.setValue(result)
  }
  const handleCard = (event) => {
    let newCardName = event.target.value
    let newCard = props.current.user.credit_cards.filter(card=>{return card.name === newCardName})[0]
    props.setCard(newCard)
    props.setValue(newCard)
    let cardId = newCard.id
    let newPeriods = props.current.user.periods.filter(period=>{return period.credit_card_id === newCard.id})
    props.overWritePeriods(newPeriods)

  }

  const handleNewPeriod = () => {
    props.addPeriod()
  }

  let user_cards
  if (props.current.user) {
    user_cards =
    props.current.user.credit_cards.map((card, i)=> {
      return (<option key={i} id={card.id}>{card.name}</option>)
    })
  }
  console.log(props)
  return (
    <div className="container" id="tableform" >
      {props.current.user !== "" && <div><h3> Credit Card(s): </h3> {props.current.card !== "" ? <select onChange={handleCard.bind(props)}>{user_cards}</select> : <p></p>}</div>}
      <h2>Default Financial Data</h2>
      <div onChange={handleChange.bind(props)}>
        <label id="userLabel">Monthly Expenditure: $</label><input id="expenditure" type="number" placeholder="i.e.$123.45" defaultValue={props.data.payment}></input>
        <label id="userLabel">Monthly Payment: $</label><input id="payment" type="number" placeholder="i.e.$123.45" defaultValue={props.data.payment}></input>
      </div>
      {props.current.user !== "" && <button onClick={handleNewPeriod.bind(props)}>Add A Period</button>}
      <br />
    </div>
  )
}

export default connect(null, {addPeriod, overWritePeriods})(Form)
