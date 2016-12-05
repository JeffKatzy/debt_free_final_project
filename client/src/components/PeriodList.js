import React from 'react'
import {SinglePeriod} from './SinglePeriod'

export class PeriodList extends React.Component {
  constructor(props){
    super(props)
    this.state = {showChildren: false, calledChild: ""}
  }

  showChildren(event){

    this.setState({showChildren: !this.state.showChildren, calledChild: event.target.innerHTML})
  }
  render(){
  let dropDownPeriod
  let showThis
  // debugger
  if (this.props.data.user !== "")
  {dropDownPeriod = this.props.data.user.periods.filter(item=>{
    return item.credit_card_id == this.props.data.card.id
  })}

  if (dropDownPeriod) {
      showThis = dropDownPeriod.map((item, index)=>{
    return (
          <div key={index}>
            <h3 onClick={this.showChildren.bind(this)}>{item.name}</h3>
            <SinglePeriod item={item} showChildren={this.state.showChildren} calledChild={this.state.calledChild}   />
          </div>
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
  )}
}
module.exports = PeriodList

 // <li>Start Month</li>
 //               <li>Start Year</li>
 //               <li>End Month</li>
 //               <li>End Year</li>
 //               <li>Expenditure</li>
 //               <li>Payment</li>