import React from 'react'

const PeriodList = (props) => {
  let dropDownPeriod
  let showThis
  // debugger
  if (props.data.user !== "")
  {dropDownPeriod = props.data.user.periods.filter(item=>{
    return item.credit_card_id == props.data.card.id
  })}

  if (dropDownPeriod) {
      showThis = dropDownPeriod.map((item, index)=>{
    return (
            <ul key={index} className="two columns">
            <li>{item.start_month}</li>
            <li>{item.start_year}</li>
            <li>{item.end_month}</li>
            <li>{item.end_year}</li>
            <li>{item.payment}</li>   
            <li>{item.expenditure}</li>
            </ul>  
            )
  })
  }

  return(
    <div className="six columns">
      <h2>Payment Periods</h2>
      <ul>
      {showThis}
      </ul>
    </div>
  )
}
module.exports = PeriodList

 // <li>Start Month</li>
 //               <li>Start Year</li>
 //               <li>End Month</li>
 //               <li>End Year</li>
 //               <li>Expenditure</li>
 //               <li>Payment</li>