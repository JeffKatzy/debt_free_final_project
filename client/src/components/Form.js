import React from 'react'

const Form = (props) => {

  const handleChange = (event) => {
    let result = {}; let id = event.target.id;
    // debugger 
    let val = event.target.value ? event.target.value : 0
    result[id] = val
    props.setValue(result)
  }
  // debugger
  return (
    <div className="container" id="tableform" >
      {props.data.current.card !== "" ? <select><option>{props.data.current.card.name}</option></select> : <p></p>}
      <h2>Financial Data</h2>
      <div onChange={handleChange.bind(props)}>
        <label id="userLabel">Monthly Expenditure: $</label><input step=".01" id="expenditure" type="number" placeholder="i.e.$123.45" defaultValue={props.data.expenditure ? props.data.expenditure : ""}></input>
        <label id="userLabel">Monthly Payment: $</label><input id="payment" step=".01" type="number" placeholder="i.e.$123.45" defaultValue={props.data.payment ? props.data.payment : ""}></input>
        <br /><label id="userLabel">Period Start Date: </label><input id="start_date" type="text" placeholder="i.e.$123.45" />
        <label id="userLabel">Period End Date: </label><input id="end_date" type="text" placeholder="i.e.$123.45" />
      </div>
      <br />
    </div>
  )
}
module.exports = Form
