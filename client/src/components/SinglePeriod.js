import React, {Component} from 'react'

export class SinglePeriod extends Component {

  constructor(props){
    super(props)
  }


    render(){
    return (
               <div id={this.props.item.name}>{  
                this.props.showChildren && (this.props.calledChild === this.props.item.name) ? 
                  <ul className="middleList">
                    <li>Start Date: {this.props.item.start_month} {this.props.item.start_year}</li>
                    <li>End Date: {this.props.item.end_month} {this.props.item.end_year}</li>
                    <li>Payment: ${this.props.item.payment}</li>   
                    <li>Expenditure: ${this.props.item.expenditure}</li>
                  </ul>  : null }</div>
            )
    }
    
}