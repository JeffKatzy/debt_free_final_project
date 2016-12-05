import React from 'react'
// import {setCard} from '../ducks/current'

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

  let user_cards
  if (props.data.current.user) 
  {
    user_cards = 
    props.data.current.user.credit_cards.map(card=>
      {return (<option id={card.id}>{card.name}</option>)})
}
  else 
    {user_cards = "foo"}

  // debugger
  return (
    <div className="container" id="tableform" >
      {props.data.current.card !== "" ? <select onChange={handleCard.bind(props)}>{user_cards}</select> : <p></p>}
      <h2>Financial Data</h2>
      <div onChange={handleChange.bind(props)}>
        <label id="userLabel">Debt: $</label><input id="debt" type="number" placeholder="i.e.$123.45" defaultValue={props.data.expenditure ? props.data.expenditure : ""}></input>
        <label id="userLabel">Interest Rate: $</label><input id="interest" type="number" placeholder="i.e.$123.45" defaultValue={props.data.expenditure ? props.data.expenditure : ""}></input>
        <br />
        <label id="userLabel">Monthly Expenditure: $</label><input id="expenditure" type="number" placeholder="i.e.$123.45" defaultValue={props.data.expenditure ? props.data.expenditure : ""}></input>
        <label id="userLabel">Monthly Payment: $</label><input id="payment" type="number" placeholder="i.e.$123.45" defaultValue={props.data.payment ? props.data.payment : ""}></input>
        <br /><label id="userLabel">Period Start Date: </label><input id="start_date" type="date" />
        <label id="userLabel">Period End Date: </label><input id="end_date" type="date" />
      </div>
      <br />
    </div>
  )
}
module.exports = Form
