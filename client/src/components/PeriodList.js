import React from 'react'
import {SinglePeriod} from './SinglePeriod'
import {removePeriodFromCurrent, setPeriod} from '../ducks/current'
import {connect} from 'react-redux'
// import {setPeriod} from '../ducks/current'

export default class PeriodList extends React.Component {
  constructor(props){
    super(props)
    // debugger
    this.state = {showChildren: false, calledChild: ""}
  }

  showChildren(event){
    //
    if (this.state.calledChild !== event.target.innerHTML && this.state.calledChild !== "")
      { this.setState({calledChild: event.target.innerHTML}) }
    else if (this.state.calledChild === event.target.innerHTML){
      this.setState({showChildren: !this.state.showChildren, calledChild: ""})
    }
    else {this.setState({showChildren: !this.state.showChildren, calledChild: event.target.innerHTML})
  }
}

  editPeriod(event){
    let thing = this.props.data.periods.filter(item=>{ if (item.name === event.target.id)
      {return item}})
    // debugger
    if (thing.length >= 1)
      {this.props.removePeriodFromCurrent(event.target.id)}
  else {
    let period = this.props.data.user.periods.filter(item=>{return item.name === event.target.id})
    this.props.setPeriod(period)
  }
    // else
      // this.props.setPeriod
  }
  render(){
    // debugger
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
            <h4 className="clickable" onClick={this.showChildren.bind(this)}>{item.name}</h4>
            <input type="checkbox" defaultChecked="true" onClick={this.editPeriod.bind(this)} id={item.name} />
            <SinglePeriod item={item} showChildren={this.state.showChildren} calledChild={this.state.calledChild}   />
          </div>
            )
  })
  }



  return(
    <div className="periodList twelve columns">
      <h2>Payment Periods</h2>
      <ul>
      {showThis}
      </ul>
    </div>
  )}
}
// export default connect(null, { setPeriod })(PeriodList)


 // <li>Start Month</li>
 //               <li>Start Year</li>
 //               <li>End Month</li>
 //               <li>End Year</li>
 //               <li>Expenditure</li>
 //               <li>Payment</li>
