import React from 'react'
import SinglePeriod from './SinglePeriod'
import {removePeriodFromCurrent, setPeriod} from '../ducks/current'
import {connect} from 'react-redux'
import PeriodEdit from './PeriodEdit'

export default class PeriodList extends React.Component {
  constructor(props){
    super(props)
    this.state = {showChildren: false, calledChild: "", showEditForm: false, editChild: ""}
  }

  showChildren(event){
    if (this.state.calledChild !== event.target.innerHTML && this.state.calledChild !== "")
      { this.setState({calledChild: event.target.innerHTML}) }
    else if (this.state.calledChild === event.target.innerHTML){
      this.setState({showChildren: !this.state.showChildren, calledChild: ""})
    }
    else {this.setState({showChildren: !this.state.showChildren, calledChild: event.target.innerHTML})
  }
}
  editPeriodDetails(event){
    this.setState({showEditForm: !this.state.showEditForm, editChild: event.target.id})
    // debugger
  }

  submittedPeriodDetails(){
    this.setState({showEditForm: false, editChild: ""})
  }

  editPeriod(event){
    let thing = this.props.data.periods.filter(item=>{ if (item.name === event.target.id)
      {return item}})
  if (thing.length >= 1)
      {this.props.removePeriodFromCurrent(event.target.id)}
  else {
    let period = this.props.data.user.periods.filter(item=>{return item.name === event.target.id})
    this.props.setPeriod(period)
  }

  }
  render(){
  let shownPeriod, showThis

  if (this.props.data.user !== ""){
    shownPeriod = this.props.data.user.periods.filter(period=>{
      return period.credit_card_id === this.props.data.card.id
    })
  }
  if (shownPeriod) {
    // debugger
    showThis = shownPeriod.map((item, index)=>{
      return (
        <div key={index}>
          <h4 className="clickable" onClick={this.showChildren.bind(this)}>{item.name}</h4>
          <input type="checkbox" defaultChecked="true" onClick={this.editPeriod.bind(this)} id={item.name} />
          {((this.state.showEditForm === true) && (this.state.editChild == item.id)) ? <PeriodEdit item={item} submittedPeriodDetails={this.submittedPeriodDetails.bind(this)} /> :
           <SinglePeriod editButton={this.editPeriodDetails.bind(this)} item={item} showChildren={this.state.showChildren} calledChild={this.state.calledChild} />}
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
