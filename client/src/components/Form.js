import React from 'react'

const Form = (props) => {

  const handleChange = (event) => {
    let result = {}; let id = event.target.id; let val = event.target.value
    result[id] = val
    props.setValue(result)
  }
  return (
    <div>
      {/* <h3><select><option>{props.data.creditcard}</option></select></h3>
      <h3><select><option>{props.data.month+", "+props.data.year}</option></select></h3> */}
      <div id="form" onChange={handleChange.bind(props)}>
        <label>Debt: $</label><input id="debt" type="number" step=".01"></input>
        <br></br>
        <label>Monthly Expenditure: $</label><input step=".01" id="expenditure" type="number" placeholder="i.e.$123.45" defaultValue={props.data.expenditure ? props.data.expenditure : ""}></input>
        <br></br>
        <label>Monthly Payment: $</label><input id="payment" step=".01" type="number" placeholder="i.e.$123.45" defaultValue={props.data.payment ? props.data.payment : ""}></input>
        <br></br>
        <label>Monthly Interest: </label><input id="interest" type="text" placeholder="i.e.$123.45" defaultValue={props.data.interest ? props.data.interest : ""}></input>%
        <br></br>
        <label>Minimum Payment Rate: </label><input id="rate" type="text" placeholder="i.e.$123.45" defaultValue={props.data.rate ? props.data.rate : ""}></input>%
      </div>
    </div>
  )
}
module.exports = Form
