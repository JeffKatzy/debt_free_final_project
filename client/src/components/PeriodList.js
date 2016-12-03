import React from 'react'

const PeriodList = (props) => {
  return(
    <div className="six columns">
      <h2>Payment Periods</h2>
      <ul>
        <li>Start Month</li>
        <li>Start Year</li>
        <li>End Month</li>
        <li>End Year</li>
        <li>Expenditure</li>
        <li>Payment</li>
      </ul>
    </div>
  )
}
module.exports = PeriodList
