import React, {Component} from 'react'

export class SinglePeriod extends Component {

  constructor(props){
    super(props)
  }


    render(){
    return (
               <div id={this.props.item.name}>{  
                this.props.showChildren && (this.props.calledChild === this.props.item.name) ? 
                  <ul>
                    <li>{this.props.item.start_month}</li>
                    <li>{this.props.item.start_year}</li>
                    <li>{this.props.item.end_month}</li>
                    <li>{this.props.item.end_year}</li>
                    <li>{this.props.item.payment}</li>   
                    <li>{this.props.item.expenditure}</li>
                  </ul>  : null }</div>
            )
    }
    
}