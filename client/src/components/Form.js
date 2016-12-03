import React from 'react'

const Form = (props) => {

  const handleChange = (event) => {
    let result = {}; let id = event.target.id; let val = event.target.value
    result[id] = val
    props.setValue(result)
  }
  // debugger
  return (
    <div className="container" id="tableform" >
      {props.data.current.card !== "" ? <select><option>{props.data.current.card}</option></select>: <p></p>}
      <h2>Financial Data</h2>
      <div onChange={handleChange.bind(props)}>
        <label id="userLabel">Monthly Expenditure: $</label><input step=".01" id="expenditure" type="number" placeholder="i.e.$123.45" defaultValue={props.data.expenditure ? props.data.expenditure : ""}></input>
        <label id="userLabel">Monthly Payment: $</label><input id="payment" step=".01" type="number" placeholder="i.e.$123.45" defaultValue={props.data.payment ? props.data.payment : ""}></input>
        <label id="userLabel">Period Start Date: </label><input id="start_date" type="text" placeholder="i.e.$123.45" defaultValue={props.data.interest ? props.data.interest : ""}></input>%
        <label id="userLabel">Period End Date: </label><input id="end_date" type="text" placeholder="i.e.$123.45" defaultValue={props.data.rate ? props.data.rate : ""}></input>%
      </div>
    </div>
  )
}
module.exports = Form
