import React from 'react'

const Form = (props) => {

  const handleChange = (event) => {
    let result = {}; let id = event.target.id; let val = event.target.value
    result[id] = val
    props.setValue(result)
  }

  return (
    <div onChange={handleChange.bind(props)}>
      <label>Current Debt: </label><input id="debt" type="number" step=".01" placeholder="i.e.$1234.56"></input>
      <br></br>
      <label>Monthly Expenditure: </label><input id="expenditure" type="text" placeholder="i.e.$123.45"></input>
      <br></br>
      <label>Monthly Payment: </label><input id="payment" type="text" placeholder="i.e.$123.45"></input>
    </div>
  )
}
module.exports = Form
