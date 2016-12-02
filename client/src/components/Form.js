import React from 'react'

const Form = (props) => {

  const handleChange = (event) => {
    let result = {}; let id = event.target.id; let val = event.target.value
    result[id] = val
    props.setValue(result)
  }
  return (
    <div className="container" id="tableform" >
      {/* <h3><select><option>{props.data.creditcard}</option></select></h3>
      <h3><select><option>{props.data.month+", "+props.data.year}</option></select></h3> */}
      <div className="twelve column"> <h2>Form For The Table</h2>
      <div onChange={handleChange.bind(props)}>
        <label id="userLabel">Debt: $</label><input id="debt" type="number" step=".01"></input>
        <br></br>
        <label id="userLabel">Monthly Expenditure: $</label><input step=".01" id="expenditure" type="number" placeholder="i.e.$123.45" defaultValue={props.data.expenditure ? props.data.expenditure : ""}></input>
        <br></br>
        <label id="userLabel">Monthly Payment: $</label><input id="payment" step=".01" type="number" placeholder="i.e.$123.45" defaultValue={props.data.payment ? props.data.payment : ""}></input>
        <br></br>
        <label id="userLabel">Monthly Interest: </label><input id="interest" type="text" placeholder="i.e.$123.45" defaultValue={props.data.interest ? props.data.interest : ""}></input>%
        <br></br>
        <label id="userLabel">Minimum Payment Rate: </label><input id="rate" type="text" placeholder="i.e.$123.45" defaultValue={props.data.rate ? props.data.rate : ""}></input>%
      </div></div>
    </div>
  )
}
module.exports = Form
